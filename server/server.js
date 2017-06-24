//The code in this document is written in Node.js, a javascript library

//List of module variables that are used for the below functions. A sever works by sitting on a host computer and
//waiting for a request. Once a request arrives it will "serve" a responce. Node employess modules which are
//packages that supply functions to make the Node.js code easier/cleaner to write. The below varables set up "links"
//to these module packages
var express = require('express');
var app = express();
var request = require('request');
var parseString = require('xml2js').parseString;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-  With, Content-Type, Accept");
    next();
});

function buildCampUrl(state, res, type) {
  var campURL = "http://api.amp.active.com/camping/campgrounds?pstate=" +
    state.toUpperCase() +
    "&api_key=tevg8efq2e83yy8hzhhp99ns";
  campAPI(campURL, res, type);
};

function xmlParser(rawXml, res, type) {
  parseString(rawXml, function(err, result) {
    var returnJson = result.resultset.result.map(function(obj) {
      if (type === "list") {
        return {
          'lat': obj['$'].latitude,
          'long': obj['$'].longitude
        }
      } else if (type === "json") {
        return {
          'agencyIcon': obj['$'].agencyIcon,
          'agencyName': obj['$'].agencyName,
          'availabilityStatus': obj['$'].availabilityStatus,
          'contractID': obj['$'].contractID,
          'contractType': obj['$'].contractType,
          'facilityID': obj['$'].facilityID,
          'facilityName': obj['$'].facilityName,
          'State': obj['$'].State,
          'Park': obj['$'].Park,
          'faciltyPhoto': obj['$'].faciltyPhoto,
          'favorite': obj['$'].favorite,
          'lat': obj['$'].latitude,
          'listingOnly': obj['$'].listingOnly,
          'long': obj['$'].longitude,
          'regionName': obj['$'].regionName,
          'reservationChannel': obj['$'].reservationChannel,
          'shortName': obj['$'].shortName,
          'withAmps': obj['$'].sitesWithAmps,
          'petsAllowed': obj['$'].sitesWithPetsAllowed,
          'sewerHookup': obj['$'].sitesWithSewerHookup,
          'waterHookup': obj['$'].sitesWithWaterHookup,
          'waterfront': obj['$'].sitesWithWaterfront,
          'state': obj['$'].state
        }
      }
    });
    res.send(returnJson);
  });
}

function campAPI(campURL, res, type) {
  var str = '';
  request
    .get(campURL)
    .on('data', function(response) {
      str = str + response;
    }).on('end', function() {
      xmlParser(str, res, type);
    });
}

app.get('/', function (req, res) {
  res.send('You have reached the blank page.')
})

app.get('/geocode/:state', function(req, res, type) {
  buildCampUrl(req.params.state, res, 'list');
})

app.get('/geojson/:state', function(req, res, type) {
  buildCampUrl(req.params.state, res, 'json');
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
