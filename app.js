var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/:city',function(req,res){
var imageCount=4;
var cityLabel="";
var city = req.params.city;

if(city=='bangaluru'){
	cityLabel="Bangaluru";
}
else if (city=='singapore'){
	cityLabel = "Singapore";
}
else if (city == 'newyork'){
	cityLabel = "New York";
}

	res.render('city',
			  {city: req.params.city,
			   title:"EJS Demo",
			   cityLabel:cityLabel,
			   imageCount:imageCount
			  });
});

app.get('/',function(req,res){

	res.render('home',
			    { headline: "EJS Demo",
			      title: "EJS Demo "
			    });

});

app.listen(port, function(){
  console.log('server is up and running on port %s',port);
});
