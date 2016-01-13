
/**
 * Main AngularJS Web Application
 */
var app = angular.module("Pembroke", ['ngRoute','nemLogging','ui-leaflet']);

angular.extend($scope, {
    defaults: {
        tileLayer: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
        maxZoom: 14,
    }
     center: {
        lat: 45.8256661,
        lng: -77.1182135,
        zoom: 8
    }
});


/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pages/map.html", controller: "PageCtrl"})
    // Pages
    .when("/paradata", {templateUrl: "pages/projects.html", controller: "PageCtrl"})

    }]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {
    console.log('PageCtrl');
});

app.controller('MapCtrl', ['$scope', 'leafletData', function($scope, leafletData){
    leafletData.getMap().then(function(map) {
            L.GeoIP.centerMapOnPosition(map, 15);
        });
    }
}]);

/**app.directive('leaflet', function() {
    return {
        link: function(scope, element, attrs) {
            var map = L.map('map', {
                center: [45.8256661,-77.1182135],
                zoom: 13,
                layers:[
                  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'),
                  L.tileLayer('http://warp.woritldmap.harvard.edu/maps/tile/4322/{z}/{x}/{y}.png')
                ]
            });

            element.on('ready', function(layer) {
                 this.eachLayer(function(marker) {

            // Bind a popup to each icon based on the same properties
            // Adds coloumns of extra info to marker popup
            marker.bindPopup(marker.toGeoJSON().properties.timePeriod +
                marker.toGeoJSON().properties.siteName + '<br><br> ' +
                marker.toGeoJSON().properties.info + '<br><br> ' +
                marker.toGeoJSON().properties.audio + '<br><br>' +
                marker.toGeoJSON().properties.link, {autoPanPadding: [5,55]});
        });
    })
            this.addTo(map);  
        }

}});**/
