/*Import required modules*/
var async = require('async');		//import async module (to make asynchronous api calls)
var http = require("http");
var https = require('https');
var cheerio = require("cheerio");	//module that makes parsing HTML possible using JQUERY syntax
var request = require("request");

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var state_abbr = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];


var server = require('ws').Server;	//import websocket module (to communicate with clientside)
var s = new server({port: 5001});	//create new server on port 5001

s.on('connection', function(ws){			//when server starts up
	ws.on('message', function(message){		//when client sends server a message

		var source_tag = {					//dictionary of news sources and html tags
			"cnn": "#body-text",
			"the-new-york-times": ".story-body-text.story-content",
			"associated-press": ".articleBody",
			"business-insider": "#content",
			"espn": ".container",
			"national-geographic": ".parsys.content",
			"engadget": ".article-text",
			"reuters": "#article-text",
			"usa-today":".double-wide.p402_premium"
		};

		var source_list = ["cnn","the-new-york-times","associated-press","business-insider","espn","national-geographic", "engadget", "reuters", "usa-today"];
		var source_i = 0;	//stepper used to loop through source_tag dictionary
		var inner_i = -1;	//stepper used to keep track of sources within source_list

		/*LOOP THROUGH EACH SOURCE*/
		async.forEachOf(source_tag, function (source, cb) {	//performs api calls synchronously
			var path = '/v1/articles?apiKey=a23a95a36f194a9bb33aaec2bc0cb8d0&sortBy=top&source=' + source_list[source_i];
			var options = {
			    host : 'newsapi.org', // api domain name
			    path : path, // parameters
			    method : 'GET' 
			};
			source_i+=1;	//prepare variable to loop through next source

			/*QUERY THE API USING PARAMETERS*/
			getJSON(options, function(err, result){	//perform GET request to retrieve JSON data
				if(err){
					return console.log("Error while trying to get news: ", err);
				}
				inner_i += 1;	//keep track of location within forloop
				article_list = result.articles;	//access the articles within JSON
				
				async.forEachOf(article_list, function (a, callback) {//loop through each article within JSON
					var image_url = "";
					try{    //try storing the multimedia thumbnail from the json
						image_url = a.urlToImage;
					}
					catch(err){
						image_url = "null";  //if the json does not contain a multimedia image, set image_url to null
					} 

					//prepare a websocket message containing metadata to be displayed
					var m = a.author+"~"+a.title+"~"+a.description+"~"+a.url+"~"+a.urlToImage+"~"+a.publishedAt+"~"+result.source;

					/*GET FULL HTML CODE OF URL TO BE PARSED*/
				    request(
					{
						url: a.url,		//access each article's website
						jar: true //https://github.com/request/request/issues/1809 nytimes generates infinite loop of redirects if cookies are enabled, so enable cookies	
					}, function (error, response, html) {
						if (!error && response.statusCode == 200) {	//if server connection was successfully established
							var max_state = "null";	//initialize variable that will contain the most frequently mentioned state
							var max = 0;	//initialize counter variable that contains the max occurences of a state mention
							$ = cheerio.load(html);	//load html into $ to be accessed using JQUERY methods
							var text = $(source).text();	//load the text to be parsed by grabbing the corresponding class name (source)
							
							/*Loop through each state to find the max number of occurrences of a state in the article*/							
							for (var k = 0; k < states.length; k++) {
								var count = 0;
								var pos = text.indexOf(states[k]);
								while(pos != -1){	//while there are still state occurrences
								    ++count;	//increment count if a match for the state was found
								    pos = text.indexOf(states[k], ++pos);	//take the substring so only text after occurrence is searched
								}
								if(count > max) {	//if the current count is greater than the max state count
									max = count;
									max_state = states[k];	//set the max occurrences state to the current state
								} else if (count == max && count > 0) {
									if(max_state == "Washington"){max_state = states[k];}	//if "Washington" occurs the same amount as another state, set max state to the latter
								} 
							}
							m+="~"+max_state;	//add the max_state to the websocket message
							ws.send(m);
						} else {
							console.log(error);
							m+="~null";
							ws.send(m);
						}
					});
					if(inner_i == 5 && a == article_list[9]){ //if the HTTP requests have all finished
						ws.send("done");
					}
				}, function () {
				    // end callback
				});
			});	
		}, function () {
				    // end callback
			}
		); 
	});
});

function getJSON(options, cb){	//callback function to get json data
	// do the GET request
	https.request(options, function(res) {	//request the JSON from API
		var body = '';

		res.on('data', function(chunk){	//when server recieves data, append it to the body message
			body+=chunk;
		});

		res.on('end', function(){
			var result = JSON.parse(body);	//convert the body chunk to JSON
			cb(null, result);				//perform callback and return the JSON result
		});

		res.on('error',cb);
	})
	.on('error', cb)
	.end(); //node knows it is done with request and can now send it to the server   
}


var Twitter = require('twitter');

var client = new Twitter({	//OAUTH 2 CREDENTIALS
  consumer_key: 'BB1yDwmudYXDQ3bt0MUkdQvRq',
  consumer_secret: 'KzicgBUl0BLOcVML1NWv89fW5AdVE5g2OVWrYOiA7rGDlZ3IjG',
  access_token_key: '3103379648-eJqOztdsBBffLEcLs9IBBSFkxlCxX79MeAT8pBj',
  access_token_secret: '14cHSBlAJWqGQTk3z6qgsFPEuTdjO71Amfik76uKOJiMm'
});
		 
var s2 = new server({port: 5002});	//Create new server on port 5002
s2.on('connection', function(so){	//When server starts up
	so.on('message', function(message){	//When server recieves a message

		var trend_params = {id:"23424977"};	//GEO Location ID of United States
		//Get the JSON containing trend data
		client.get('trends/place.json', trend_params, function(err, tweet, res) {
			var trend_list = tweet[0].trends //get the list of trends

			for (i = 0; i<trend_list.length; i++){ //for each trend in the list
				var trend = trend_list[i];		//each individual trend
				//prepare and send the websocket message containing trend data
				var tr = trend.name + "~"+ trend.url + "~"+ trend.tweet_volume;	
				so.send(tr);
			}
		});

	});

});


/*

var geo_params = {query: "Washington DC", granularity: "city"};

client.get('geo/search.json', geo_params, function(error, tweets, response) {
  if (!error) {
    var body = JSON.parse(response.body);
    var place_id = body.result.places[0].id;
    console.log(place_id);
  }
});
*/
/*
var opt = {
    host : 'http://where.yahooapis.com/v1', // here only the domain name// (no http/https !)
    path : ".q('sydney%20opera%20house')?appid=Mdi7lk6q", // the rest of the url with parameters if needed
    method : 'GET' // do GET
};*/


/*
var search_params = {q: "paris"};
client.get('search/tweets.json', search_params, function(error, tweets, response){
	console.log(tweets.statuses[0].user);
});*/

/*var http = require("http");
var cheerio = require("cheerio");
var request = require("request");

require('events').EventEmitter.defaultMaxListeners = Infinity;

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

request(
	{
		url: 'https://www.nytimes.com/2017/05/24/us/politics/russia-trump-manafort-flynn.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=span-ab-top-region&region=top-news&WT.nav=top-news&_r=0',
		jar: true //https://github.com/request/request/issues/1809 nytimes generates infinite loop of redirects if cookies are enabled, so enable cookies	
	}, function (error, response, html) {
		if (!error && response.statusCode == 200) {
			console.log(html);
		} else {
			console.log(error);
		}
	});*/