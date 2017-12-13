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
    const text = "Привіт, " + msg.from.first_name + "!\nЯ Healzy, твій персональний тренер.";
    bot.sendMessage(msg.chat.id, text);
    console.log(msg);
    new Followers({
        first_name: msg.chat.first_name,
        last_name: msg.chat.last_name,
        id: msg.chat.id
    }).save(function (err) {
        if(err) console.log(err);
    });
})

bot.onText(/[\s\S]*/, function (msg) {
    console.log(msg);
})


bot.onText(/\/send/, function (msg) {
    if (msg.chat.id === 337800229){
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
    if (msg.chat.id === 337800229){
        const text = msg.text.substring(5);
        new Product({title: text}).save();
    }
});

bot.onText(/\/info/, function (msg) {
    var text = msg.text.substring(5);
    text = text.trim();
    console.log(text);
    Product.find(
        {
            title: text
        }, function (err, product) {
            var html;
            if(!err && product.length != 0) {
                product.forEach(function (p) {
                    html =
                        '<b>Калорії</b> : <i>' + p.calories + '</i> '+
                        '<b>Жири</b> : <i>' + p.fats + '</i> '+
                        '<b>Вуглеводи</b> : <i>' + p.carbohydrates + '</i> '+
                        '<b>Білки</b> : <i>' + p.proteins + '</i> ';
                    bot.sendMessage(msg.chat.id, html, {
                        parse_mode: 'HTML'
                    });
                });
            } else {
                bot.sendMessage(msg.chat.id, "Вибач, але я не знаю такого продукту");
            }
        });
});



//381008276 - Anne
//https://api.telegram.org/bot503726174:AAHgyg44GQ_YY-RqA4Pm70YT8lFnSA_Zg6c/sendMessage?chat_id=@337800229,text=тест.

