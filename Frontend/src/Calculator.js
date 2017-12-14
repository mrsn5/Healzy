var API = require('./API');


function initCalc() {


    var allProducts =[];
    var titles=[];

    API.findProduct({title: ""}, function (err, res) {

        if(err)
            alert("Can't load article list ");
        else{
            allProducts=res;
            for(var i=0;i<allProducts.length;i++)
                titles.push(allProducts[i].title);

            $( "#automplete" ).autocomplete({
                minLength:2,
                delay:300,
                source: titles
            });
        }
    });
}

exports.initCalc = initCalc;