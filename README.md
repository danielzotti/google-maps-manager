# Google Maps Manager

A library to use Google Maps in a more simple way. Download the project or browse `index.html` to learn how to use it.

## Dependencies

- [@google/markerclusterer](https://github.com/googlemaps/v3-utility-library/tree/master/markerclusterer)

- [@google/maps](https://github.com/googlemaps)

## Useful links

- [Google Maps Icon](http://kml4earth.appspot.com/icons.html)

## Google maps documentation
- [Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Maps Styles](https://developers.google.com/maps/documentation/javascript/styling)

## Code

 ```javascript
var markers = [
    {
        position: {
            lat: 45,
            lng: 11.3
        },
        title: "Custom icon",
        icon: "http://earth.google.com/images/kml-icons/track-directional/track-8.png",
        infoWindow: "Tooltip text"
    }
    // ...
];

// NORMAL
var mapManagerNormal = new GoogleMapsManager({
    markers: markers
});

// NORMAL (NO FIT)
var mapManagerNoFit = new GoogleMapsManager({
    mapId: "map-no-fit",
    markers: markers,
    isFitToBound: false,
}, {
    zoom: 6,
    center: {
        lat: 46.3,
        lng: 10.2
    }
});

// CLUSTERED
var mapManagerClustered = new GoogleMapsManager({
    mapId: "map-clustered",
    markers: markers,
    isClustered: true
});

// LEGEND
var mapManagerLegend = new GoogleMapsManager({
    mapId: "map-with-legend",
    markers: markers
});
mapManagerLegend.setMapIcons([{
    name: "First",
    description: "Default icon",
    icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"
},
    {
        name: "Second",
        description: "Arrow icon",
        icon: "http://earth.google.com/images/kml-icons/track-directional/track-8.png"
    }
]);
mapManagerLegend.setLegend();

// CUSTOM STYLES
var mapManagerCustomStyles = new GoogleMapsManager({
    mapId: "map-custom-styles",
    markers: markers
}, {
    styles: customStyles, // see "Maps Styles" doucumentation link 
    disableDefaultUI: true
});
```
