/**
 * Created by sannguyen on 12.12.17.
 */

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = "503726174:AAHgyg44GQ_YY-RqA4Pm70YT8lFnSA_Zg6c";
const bot = new TelegramBot(TOKEN, {
    polling: true
});

var DBFollowers = require("./db_followers");
var db_followers = DBFollowers.init();
var Follower = DBFollowers.getModel();

var DBCalorizator = require("../Calorizator/calorizator");
var db_calorizator = DBCalorizator.init();
var Product = DBCalorizator.getModel();


bot.onText(/\/start/, function (msg) {
    const text = "Привіт, " + msg.from.first_name + "!\nМене звати Хелзі 🤖.\n"+
    "Я дуже люблю їсти, тому я знаю майже все про це. Я можу показати тобі статистику продуктів.\n"+
            "Просто введи назву продукту";
    bot.sendMessage(msg.chat.id, text);
    console.log(msg);
    new Followers({
        first_name: msg.chat.first_name,
        last_name: msg.chat.last_name,
        id: msg.chat.id
    }).save(function (err) {
        if (err) console.log(err);
    });
})

/*bot.onText(/[\s\S]*!/, function (msg) {
 console.log(msg);
 })*/


bot.onText(/\/send/, function (msg) {
    if (msg.chat.id === 337800229) {
        const text = msg.text.substring(6);
        Follower.find(function (err, follower) {
            if (!err)
                follower.forEach(function (follower) {
                    bot.sendMessage(follower.id, text);
                })
        });
    }
});

bot.onText(/\/add/, function (msg) {
    if (msg.chat.id === 337800229) {
        const text = msg.text.substring(5);
        new Product({title: text}).save();
    }
});

bot.onText(/[\s\S]*/, function (msg) {
    var text = msg.text;
    text = text.trim();
    console.log(text);


    Product.find(
        {
            title: new RegExp('^'+text+'$', 'i')
        }, function (err, product_one) {
            if (product_one.length == 1) {
                showProductStats(product_one[0], msg);
            } else {
                Product.find(
                    {
                        title: new RegExp('[\s\S]*(' + text + '){1}[\s\S]*', 'i')
                    }, function (err, product) {

                        if (!err && product.length != 0) {
                            if (product.length <= 5) {
                                product.forEach(function (p) {
                                    showProductStats(p, msg);
                                });
                            } else {
                                for (var i = 0; i < 5; i++) {
                                    showProductStats(product[i], msg);
                                }
                            }
                        } else {
                            bot.sendMessage(msg.chat.id, "Вибач, але я не знаю такого продукту");
                        }

                    });
            }
        });
});

function showProductStats(p, msg) {
    var html;
    if (p.lang == "UKR" || p.lang == "RUS") {
        html = '' + p.title + '\n' +
            '*Калорії* : _' + p.calories + ' ккал_\n' +
            '*Жири* : _' + p.fats + ' г_\n' +
            '*Вуглеводи* : _' + p.carbohydrates + ' г_\n' +
            '*Білки* : _' + p.proteins + ' г_\n';

    } else {
        html = '' + p.title + '\n' +
            '*Calories* : _' + p.calories + ' kcal_\n' +
            '*Fats* : _' + p.fats + ' g_\n' +
            '*Carbohydrates* : _' + p.carbohydrates + ' g_\n' +
            '*Proteins* : _' + p.proteins + ' g_\n';
    }
    bot.sendMessage(msg.chat.id, html, {
        parse_mode: 'Markdown'
    });
}

//381008276 - Anne
