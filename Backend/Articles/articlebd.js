/**
 * Created by sannguyen on 14.12.17.
 */

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoURI_calorizator = "mongodb://mr.sn5:HelloWorld5@ds135946.mlab.com:35946/articlesdb";

db_article = mongoose.createConnection(mongoURI_calorizator);
/*

var Article;

db_article.on('error', function (err) {
    console.log('connection error:', err.message); });
db_article.once('open', function callback () {
    console.log("Connected to DB Articles!");

    var ArticleSchema = mongoose.Schema({
        image: { type: String },
        title: { type: String, unique: true },
        category: { type: String },
        content: { type: String },
        type: { type: String },
        date: {type: Date}
    });

    Article = db_article.model('Article', ArticleSchema);
});



function getModel() {
    return Article;
}

exports.getModel = getModel;

*/


var article_info = [
    {
        image: "assets/images/1.jpg",
        title: "Chicken & Spinach Soup with Fresh Pesto",
        category: "Diets",
        content: "This fragrant, Italian-flavored soup takes advantage of quick-cooking ingredients—boneless, skinless chicken breast, bagged baby spinach and canned beans. It features a simple homemade basil pesto swirled in at the end to add a fresh herb flavor. If you are very pressed for time, you can substitute 3 to 4 tablespoons of a store-bought basil pesto. Recipe by Nancy Baggett for EatingWell.",
        type: "Recipes",
        date: new Date("2015-08-01"),
    },
    {
        image: "assets/images/2.jpg",
        title: "Creamy Garlic Pasta with Shrimp & Vegetables",
        category: "Diets",
        content:  "Toss a garlicky, Middle Eastern-inspired yogurt sauce with pasta, shrimp, asparagus, peas and red bell pepper for a fresh, satisfying summer meal. Serve with: Slices of cucumber and tomato tossed with lemon juice and olive oil.",
        type: "Recipes",
        date: new Date("2014-08-01"),
    },
    {
        image: "assets/images/3.jpg",
        title: "Spaghetti Squash with Roasted Tomatoes, Beans & Almond Pesto",
        category: "Diets",
        content:  "",
        type: "Recipes",
        date: new Date("2016-08-01"),
    },
    {
        image: "assets/images/3.jpg",
        title: "Creamy Garlic Pasta with Shrimp & Vegetables",
        category: "Diets",
        content:  "Looking at a tangle of spaghetti squash tricks your brain into thinking you're about to eat a serving of eggy noodles, when in fact, you get a nice calorie and carb savings in this healthy recipe. Giving tomatoes a stint in a hot oven makes them candy-sweet.",
        type: "Recipes",
        date: new Date("2016-08-01"),
    },
    {
        image: "assets/images/4.jpg",
        title: "Creamy Mashed Cauliflower",
        category: "Diets",
        content:  "Our savory cauliflower puree makes a perfect low-carb stand-in for mashed potatoes. It gets its fabulous flavor from garlic, buttermilk and a touch of butter and, best of all, it has about one-quarter of the calories of typical mashed potatoes. If you like, vary it by adding shredded low-fat cheese or chopped fresh herbs.",
        type: "Recipes",
        date: new Date("2016-10-01"),
    },
    {
        image: "assets/images/5.jpg",
        title: "Slow-Cooker Black Bean-Mushroom Chili",
        category: "Diets",
        content:  "Black beans, earthy mushrooms and tangy tomatillos combine with a variety of spices and smoky chipotles to create a fantastic full-flavored chili. It can simmer in the slow cooker all day, which makes it perfect for a healthy supper when the end of your day is rushed.",
        type: "Recipes",
        date: new Date("2016-08-01"),
    },
    {
        image: "assets/images/6.jpg",
        title: "Cider-Braised Brussels Sprouts with Bacon",
        category: "Diets",
        content:  "Everyone loves Brussels sprouts when they're drizzled in a tangy-sweet sauce. Plus, bacon! Serve with chicken, pork or steak and roasted potatoes.",
        type: "Recipes",
        date: new Date("2015-08-01"),
    },
    {
        image: "assets/images/7.jpg",
        title: "Smoked Gouda-Broccoli Soup",
        category: "Diets",
        content:  "Smoked paprika and smoked Gouda give this broccoli-and-cheese soup recipe a double hit of smoky flavor. If you can't find smoked Gouda, smoked Cheddar gives delicious results as well.",
        type: "Recipes",
        date: new Date("2016-08-01"),
    },
    {
        image: "assets/images/8.jpg",
        title: "Broccoli with Balsamic Mushrooms",
        category: "Diets",
        content:  "Just a touch of butter adds silkiness to the balsamic sauce that coats broccoli and meaty mushrooms in this easy broccoli side dish recipe.",
        type: "Recipes",
        date: new Date("2013-08-01"),
    },
    {
        image: "assets/images/9.jpg",
        title: "Broccoli, Chickpea & Pomegranate Salad",
        category: "Diets",
        content:  "Simple steps give this broccoli salad recipe a more nuanced flavor: soaking the onion tempers its bite and toasting the cumin enhances its aroma. Serve alongside grilled chicken, pork or fish.",
        type: "Articles",
        date: new Date("2016-08-01"),
    },
    {
        image: "assets/images/10.jpg",
        title: "Roasted Broccoli with Lemon-Garlic Vinaigrette",
        category: "Diets",
        content:  "Resist the temptation to turn the broccoli over while it roasts in this easy recipe. Leaving it cut-side down means you'll get deliciously caramelized results.",
        type: "Recipes",
        date: new Date("2014-08-01"),
    },
    {
        image: "assets/images/11.jpg",
        title: "Berry-Almond Smoothie Bowl",
        category: "Diets",
        content:  "A little frozen banana gives creamy texture to this satisfying smoothie bowl.",
        type: "Articles",
        date: new Date("2016-08-01"),
    },
    {
        image: "assets/images/12.jpg",
        title: "Frozen Peach Margaritas",
        category: "Cocktails",
        content:  "Enjoy sweet peach flavor anytime of year with this skinny frozen margarita. It tastes just like a restaurant version, but with less sugar, for an easy cocktail you will actually want to make at home.",
        type: "Articles",
        date: new Date("2015-08-01"),
    },
    {
        image: "assets/images/13.jpg",
        title: "Frozen Mango Margaritas",
        category: "Cocktails",
        content:  "Frozen mango chunks aren't just for smoothies anymore. Whir them up in your blender with all the other classic margarita ingredients to make a skinny frozen cocktail at home that's just as good as (if not better than, and definitely healthier than!) restaurant versions.",
        type: "Articles",
        date: new Date("2014-08-01"),
    },

    {
        image: "assets/images/14.jpg",
        title: "Champagne Float",
        category: "Cocktails",
        content:  "An adult spin on an ice cream float—what could be better? Sorbet adds a festive touch and pop of flavor to your celebratory glass of Champagne.",
        type: "Recipes",
        date: new Date("2014-10-01"),
    },
    {
        image: "assets/images/food1.jpg",
        title: "Jalapeno-Watermelon Margaritas",
        category: "Cocktails",
        content: "When the fruit is ripe and you need a little kick in your glass, it's time for this spicy watermelon margarita recipe. Dip the glass rims in chili powder–spiked coarse salt for an extra layer of spice.",
        type: "Recipes",
        date: new Date("2013-08-01"),
    }

];







var ArticleSchema = mongoose.Schema({
    image: { type: String },
    title: { type: String, unique: true },
    category: { type: String },
    content: { type: String },
    type: { type: String },
    date: {type: Date}
});


db_article = mongoose.createConnection(mongoURI_calorizator);

db_article.on('error', function (err) {
    console.log('connection error:', err.message); });
db_article.once('open', function callback () {
    console.log("Connected to DB Blog!"); });


var Article = db_article.model('Article', ArticleSchema);


article_info.forEach(function (a) {
    new Article(a).save();
    //console.log(product);
});
