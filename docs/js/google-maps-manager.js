var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var GoogleMapsManager = /** @class */ (function () {
    function GoogleMapsManager(configuration, mapOptions) {
        this.configuration = {
            mapId: "map",
            markers: null,
            isFitToBound: true,
            isClustered: false,
            hasLegend: false,
            legendId: "map-legend",
            mapIcons: []
        };
        this.mapOptions = {
            zoom: 1,
            center: new google.maps.LatLng(0, 0),
            backgroundColor: "transparent"
            // clickableIcons: true,
            // disableDefaultUI: true,
            // disableDoubleClickZoom: false,
            // draggable: true,
            // heading: 0,
            // draggableCursor: "",
            // draggingCursor: "",
            // fullscreenControlOptions: {
            //   position: google.maps.ControlPosition.TOP_RIGHT
            // },
            // fullscreenControl: true,
            // gestureHandling: "auto",
            // keyboardShortcuts: true,
            // mapTypeControl: true,
            // mapTypeControlOptions: {
            //   mapTypeIds: [
            //     google.maps.MapTypeId.HYBRID,
            //     google.maps.MapTypeId.ROADMAP,
            //     google.maps.MapTypeId.SATELLITE,
            //     google.maps.MapTypeId.TERRAIN
            //   ]
            // },
            // mapTypeId: google.maps.MapTypeId.ROADMAP,
            // maxZoom: null,
            // minZoom: null,
            // noClear: false,
            // overviewMapControl: true,
            // overviewMapControlOptions: {
            //   opened: true
            // },
            // panControl: true,
            // panControlOptions: {
            //   position: google.maps.ControlPosition.BOTTOM_RIGHT
            // },
            // rotateControl: true,
            // rotateControlOptions: {
            //   position: google.maps.ControlPosition.RIGHT_CENTER
            // },
            // scaleControl: true,
            // scaleControlOptions: {
            //   style: google.maps.ScaleControlStyle.DEFAULT
            // },
            // scrollwheel: true,
            // signInControl: true,
            // streetView: null,
            // streetViewControl: true,
            // streetViewControlOptions: {
            //   position: google.maps.ControlPosition.BOTTOM_LEFT
            // },
            // styles: [
            //   {
            //     featureType: "water",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#ffffff"
            //       },
            //       {
            //         lightness: 17
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "landscape",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#e9e9e9"
            //       },
            //       {
            //         lightness: 20
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "road.highway",
            //     elementType: "geometry.fill",
            //     stylers: [
            //       {
            //         color: "#ffffff"
            //       },
            //       {
            //         lightness: 17
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "road.highway",
            //     elementType: "geometry.stroke",
            //     stylers: [
            //       {
            //         color: "#ffffff"
            //       },
            //       {
            //         lightness: 29
            //       },
            //       {
            //         weight: 0.2
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "road.arterial",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#ffffff"
            //       },
            //       {
            //         lightness: 18
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "road.local",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#ffffff"
            //       },
            //       {
            //         lightness: 16
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "poi",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#f5f5f5"
            //       },
            //       {
            //         lightness: 21
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "poi.park",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#dedede"
            //       },
            //       {
            //         lightness: 21
            //       }
            //     ]
            //   },
            //   {
            //     elementType: "labels.text.stroke",
            //     stylers: [
            //       {
            //         visibility: "on"
            //       },
            //       {
            //         color: "#ffffff"
            //       },
            //       {
            //         lightness: 16
            //       }
            //     ]
            //   },
            //   {
            //     elementType: "labels.text.fill",
            //     stylers: [
            //       {
            //         saturation: 36
            //       },
            //       {
            //         color: "#333333"
            //       },
            //       {
            //         lightness: 40
            //       }
            //     ]
            //   },
            //   {
            //     elementType: "labels.icon",
            //     stylers: [
            //       {
            //         visibility: "off"
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "transit",
            //     elementType: "geometry",
            //     stylers: [
            //       {
            //         color: "#f2f2f2"
            //       },
            //       {
            //         lightness: 19
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "administrative",
            //     elementType: "geometry.fill",
            //     stylers: [
            //       {
            //         color: "#fefefe"
            //       },
            //       {
            //         lightness: 20
            //       }
            //     ]
            //   },
            //   {
            //     featureType: "administrative",
            //     elementType: "geometry.stroke",
            //     stylers: [
            //       {
            //         color: "#fefefe"
            //       },
            //       {
            //         lightness: 17
            //       },
            //       {
            //         weight: 1.2
            //       }
            //     ]
            //   }
            // ];
        };
        this.markers = [];
        // MANAGER CONFIGURATION
        this.setConfiguration(configuration);
        // MAP CONFIGURATION
        this.setMapOptions(mapOptions);
        // MAP CREATION
        this.createMap();
        // MARKERS
        if (configuration && configuration.markers) {
            this.setMarkers(configuration.markers);
        }
    }
    GoogleMapsManager.prototype.setConfiguration = function (newOptions) {
        if (!newOptions) {
            return;
        }
        this.configuration = __assign({}, this.configuration, newOptions);
    };
    GoogleMapsManager.prototype.setMapOptions = function (newMapOptions) {
        if (!newMapOptions) {
            return;
        }
        this.mapOptions = __assign({}, this.mapOptions, newMapOptions);
    };
    GoogleMapsManager.prototype.createMap = function (mapId) {
        if (mapId === void 0) { mapId = this.configuration.mapId; }
        this.configuration.mapId = mapId;
        // MAP HTML ELEMENT
        var mapDiv = document.getElementById(this.configuration.mapId);
        if (!mapDiv) {
            console.error("map element doesn't exist");
            return;
        }
        // MAP CREATION
        this.map = new google.maps.Map(mapDiv, this.mapOptions);
    };
    GoogleMapsManager.prototype.setMapStyles = function (mapStyles) {
        if (mapStyles === void 0) { mapStyles = this.mapOptions.styles; }
        this.map.setOptions({ styles: mapStyles });
    };
    GoogleMapsManager.prototype.setMapIcons = function (mapIcons) {
        if (mapIcons === void 0) { mapIcons = this.configuration.mapIcons; }
        this.configuration.mapIcons = mapIcons.slice();
    };
    GoogleMapsManager.prototype.setLegend = function (legendId, timeout) {
        if (legendId === void 0) { legendId = this.configuration.legendId; }
        if (timeout === void 0) { timeout = 1000; }
        this.configuration.hasLegend = true;
        this.configuration.legendId = legendId;
        var items = this.configuration.mapIcons;
        var legend = document.getElementById(legendId);
        if (!legend) {
            console.error("legend element doesn't exist");
            return;
        }
        this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById(legendId));
        for (var item in items) {
            var name_1 = void 0;
            var icon = void 0;
            var description = void 0;
            if (items.hasOwnProperty(item)) {
                name_1 = items[item].name;
                description = items[item].description;
                icon = items[item].icon;
            }
            var div = document.createElement("div");
            div.className = "map-legend-item";
            div.innerHTML =
                "<img class=\"map-legend-item-image\" src=\"" +
                    icon +
                    "\" title=\"" +
                    name_1 +
                    "\"> " +
                    "<span class=\"map-legend-item-name\">" +
                    description +
                    "</span>";
            legend.appendChild(div);
        }
        window.setTimeout(function () {
            legend.style.opacity = "1";
        }, timeout);
    };
    GoogleMapsManager.prototype.setMarkers = function (markers, fitToBounds, isClustered) {
        if (fitToBounds === void 0) { fitToBounds = this.configuration.isFitToBound; }
        if (isClustered === void 0) { isClustered = this.configuration.isClustered; }
        var isLast = false;
        for (var i = 0; i < markers.length; i++) {
            if (i === markers.length - 1) {
                isLast = true;
            }
            this.addMarker(markers[i], fitToBounds, isClustered, isLast);
        }
    };
    GoogleMapsManager.prototype.addMarker = function (marker, isFitToBounds, isClustered, isLast) {
        var _this = this;
        if (!marker.position === undefined || typeof marker.position.lat !== "number" || typeof marker.position.lng !== "number") {
            console.log("Errore nel marker: ", marker);
            return;
        }
        var infoWindow = null;
        var hasInfoWindow = false;
        if (marker.infoWindow) {
            hasInfoWindow = true;
            infoWindow = new google.maps.InfoWindow({
                content: marker.infoWindow
            });
        }
        var markerOptions = {
            position: marker.position,
            title: marker.title,
            // animation: google.maps.Animation.DROP,
            icon: marker.icon,
            map: this.map,
            infoWindow: infoWindow,
            isOpen: false
        };
        var currentMarker = new GoogleMapsManagerMarker(markerOptions);
        if (hasInfoWindow) {
            currentMarker.addListener("click", function () {
                if (!currentMarker.isOpen) {
                    currentMarker.infoWindow.open(_this.map, currentMarker);
                    currentMarker.isOpen = true;
                }
                else {
                    currentMarker.infoWindow.close();
                    currentMarker.isOpen = false;
                }
            });
        }
        this.markers.push(currentMarker);
        if (isFitToBounds) {
            this.fitBounds();
        }
        else {
            this.centerMap();
        }
        if (isLast) {
            if (isClustered) {
                this.setMarkerClusterer();
            }
        }
    };
    GoogleMapsManager.prototype.setMarkerClusterer = function () {
        new MarkerClusterer(this.map, this.markers, {
            gridSize: 60,
            averageCenter: true,
            styles: [
                {
                    textColor: "white",
                    url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                    width: 53,
                    height: 53
                }
            ]
        });
    };
    GoogleMapsManager.prototype.fitBounds = function () {
        if (this.markers.length > 0) {
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0; i < this.markers.length; i++) {
                bounds.extend(this.markers[i].getPosition());
            }
            this.map.fitBounds(bounds);
            this.map.setCenter(bounds.getCenter());
        }
    };
    GoogleMapsManager.prototype.centerMap = function () {
        this.map.setCenter(this.mapOptions.center);
    };
    GoogleMapsManager.prototype.getIcon = function (name) {
        if (this.configuration.mapIcons[name]) {
            var item = this.configuration.mapIcons[name];
            if (item.icon) {
                return item.icon;
            }
        }
        return null;
    };
    return GoogleMapsManager;
}());
var GoogleMapsManagerMarker = /** @class */ (function (_super) {
    __extends(GoogleMapsManagerMarker, _super);
    function GoogleMapsManagerMarker(markerOptions) {
        var _this = _super.call(this, markerOptions) || this;
        _this.isOpen = markerOptions.isOpen;
        _this.infoWindow = markerOptions.infoWindow;
        return _this;
    }
    return GoogleMapsManagerMarker;
}(google.maps.Marker));
