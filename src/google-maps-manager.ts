declare let MarkerClusterer: any;

class GoogleMapsManager {
  private configuration: GoogleMapsManagerOptions = {
    mapId: "map",
    markers: null,
    isFitToBound: true,
    isClustered: false,
    hasLegend: false,
    legendId: "map-legend",
    mapIcons: []
  };

  private mapOptions: google.maps.MapOptions = {
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

  private map: google.maps.Map;

  private markers: Array<GoogleMapsManagerMarker> = [];

  constructor(configuration: GoogleMapsManagerOptions, mapOptions: google.maps.MapOptions) {
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

  setConfiguration(newOptions) {
    if (!newOptions) {
      return;
    }
    this.configuration = { ...this.configuration, ...newOptions };
  }

  setMapOptions(newMapOptions) {
    if (!newMapOptions) {
      return;
    }
    this.mapOptions = { ...this.mapOptions, ...newMapOptions };
  }

  createMap(mapId = this.configuration.mapId) {
    this.configuration.mapId = mapId;

    // MAP HTML ELEMENT
    let mapDiv = document.getElementById(this.configuration.mapId);
    if (!mapDiv) {
      console.error("map element doesn't exist");
      return;
    }

    // MAP CREATION
    this.map = new google.maps.Map(mapDiv, this.mapOptions);
  }

  setMapStyles(mapStyles: Array<google.maps.MapTypeStyle> = this.mapOptions.styles) {
    this.map.setOptions({ styles: mapStyles });
  }

  setMapIcons(mapIcons: Array<GoogleMapsManagerIcons> = this.configuration.mapIcons) {
    this.configuration.mapIcons = [...mapIcons];
  }

  setLegend(legendId = this.configuration.legendId, timeout = 1000) {
    this.configuration.hasLegend = true;
    this.configuration.legendId = legendId;

    let items = this.configuration.mapIcons;
    let legend = document.getElementById(legendId);

    if (!legend) {
      console.error("legend element doesn't exist");
      return;
    }
    this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(document.getElementById(legendId));
    for (let item in items) {
      let name;
      let icon;
      let description;

      if (items.hasOwnProperty(item)) {
        name = items[item].name;
        description = items[item].description;
        icon = items[item].icon;
      }

      let div = document.createElement("div");
      div.className = "map-legend-item";
      div.innerHTML =
        "<img class=\"map-legend-item-image\" src=\"" +
        icon +
        "\" title=\"" +
        name +
        "\"> " +
        "<span class=\"map-legend-item-name\">" +
        description +
        "</span>";

      legend.appendChild(div);
    }

    window.setTimeout(function() {
      legend.style.opacity = "1";
    }, timeout);
  }

  setMarkers(
    markers: Array<GoogleMapsManagerMarkerOptions>,
    fitToBounds = this.configuration.isFitToBound,
    isClustered = this.configuration.isClustered
  ) {
    let isLast = false;
    for (var i = 0; i < markers.length; i++) {
      if (i === markers.length - 1) {
        isLast = true;
      }
      this.addMarker(markers[i], fitToBounds, isClustered, isLast);
    }
  }

  addMarker(marker: GoogleMapsManagerMarkerOptions, isFitToBounds: boolean, isClustered: boolean, isLast: boolean) {
    if (!marker.position === undefined || typeof marker.position.lat !== "number" || typeof marker.position.lng !== "number") {
      console.log("Errore nel marker: ", marker);
      return;
    }

    let infoWindow = null;
    let hasInfoWindow = false;
    if (marker.infoWindow) {
      hasInfoWindow = true;
      infoWindow = new google.maps.InfoWindow({
        content: marker.infoWindow
      });
    }

    let markerOptions = {
      position: marker.position,
      title: marker.title,
      // animation: google.maps.Animation.DROP,
      icon: marker.icon,
      map: this.map,
      infoWindow: infoWindow,
      isOpen: false
    };

    let currentMarker = new GoogleMapsManagerMarker(markerOptions);
    if (hasInfoWindow) {
      currentMarker.addListener("click", () => {
        if (!currentMarker.isOpen) {
          currentMarker.infoWindow.open(this.map, currentMarker);
          currentMarker.isOpen = true;
        } else {
          currentMarker.infoWindow.close();
          currentMarker.isOpen = false;
        }
      });
    }
    this.markers.push(currentMarker);

    if (isFitToBounds) {
      this.fitBounds();
    } else {
      this.centerMap();
    }

    if (isLast) {
      if (isClustered) {
        this.setMarkerClusterer();
      }
    }
  }

  setMarkerClusterer() {
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
  }

  fitBounds() {
    if (this.markers.length > 0) {
      let bounds = new google.maps.LatLngBounds();
      for (let i = 0; i < this.markers.length; i++) {
        bounds.extend(this.markers[i].getPosition());
      }
      this.map.fitBounds(bounds);
      this.map.setCenter(bounds.getCenter());
    }
  }

  centerMap() {
    this.map.setCenter(this.mapOptions.center);
  }

  getIcon(name) {
    if (this.configuration.mapIcons[name]) {
      var item = this.configuration.mapIcons[name];
      if (item.icon) {
        return item.icon;
      }
    }
    return null;
  }
}

class GoogleMapsManagerMarker extends google.maps.Marker {
  infoWindow: google.maps.InfoWindow;
  isOpen: boolean;
  constructor(markerOptions) {
    super(markerOptions);
    this.isOpen = markerOptions.isOpen;
    this.infoWindow = markerOptions.infoWindow;
  }
}
interface GoogleMapsManagerMarkerOptions extends google.maps.MarkerOptions {
  infoWindow: string;
  isOpen: boolean;
}

interface GoogleMapsManagerOptions {
  mapId: string;
  markers?: Array<GoogleMapsManagerMarkerOptions>;
  isFitToBound?: boolean;
  isClustered?: boolean;
  mapIcons?: Array<GoogleMapsManagerIcons>;
  legendId?: string;
  hasLegend?: boolean;
  center?: google.maps.LatLng;
  zoom?: number;
}

interface GoogleMapsManagerIcons {
  name: string;
  description: string;
  icon: string;
}
