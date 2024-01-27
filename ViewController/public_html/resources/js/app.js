function showMap(coordinatesPoint) {
  if (coordinatesPoint) {
    require([
      "esri/layers/GraphicsLayer",
      "esri/Graphic",
      "esri/Map",
      "esri/views/MapView",
      "esri/PopupTemplate",
      "esri/layers/FeatureLayer",
      "esri/widgets/Legend",
    ], function (
      GraphicsLayer,
      Graphic,
      Map,
      MapView,
      PopupTemplate,
      FeatureLayer,
      Legend
    ) {
      const investmentLands = new FeatureLayer({
        url: "https://services.arcgis.com/oRVAh9p991ohElGI/ArcGIS/rest/services/investment_map41/FeatureServer/2",
      });
      // splitting the input
      var longInput = coordinatesPoint.split(",")[0];
      var latInput = coordinatesPoint.split(",")[1];

      var graphic = new Graphic({
        geometry: {
          type: "point",
          x: longInput,
          y: latInput,
        },
        symbol: {
          type: "web-style",
          name: "tear-pin-2",
          styleName: "Esri2DPointSymbolsStyle",
        },
      });

      var map = new Map({
        basemap: "hybrid",
      });

      var view = new MapView({
        container: "viewDiv",
        map: map,
      });

      var graphicsLayer = new GraphicsLayer();
      graphicsLayer.graphics.push(graphic);

      map.addMany([investmentLands, graphicsLayer]);

      graphicsLayer.on("layerview-create", function (e) {
        view
          .goTo(
            {
              center: [graphic.geometry.longitude, graphic.geometry.latitude],
              zoom: 17,
            },
            {
              duration: 3000,
            }
          )
          .catch(function (error) {
            if (error.name != "AbortError") {
              console.error(error);
            }
          });
      });

      view.when(() => {
        const featureLayer = map.layers.getItemAt(0);

        const legend = new Legend({
          view: view,
          layerInfos: [
            {
              layer: featureLayer,
              title: "أراضي الاستثمار",
            },
          ],
        });

        view.ui.add(legend, "bottom-right");
      });
    });
  } else {
    require([
      "esri/layers/GraphicsLayer",
      "esri/Graphic",
      "esri/Map",
      "esri/views/MapView",
      "esri/PopupTemplate",
      "esri/layers/FeatureLayer",
      "esri/widgets/Legend",
    ], function (
      GraphicsLayer,
      Graphic,
      Map,
      MapView,
      PopupTemplate,
      FeatureLayer,
      Legend
    ) {
      const investmentLands = new FeatureLayer({
        url: "https://services3.arcgis.com/DfrpaAjfrEJ4XvJg/arcgis/rest/services/Investment_map_238/FeatureServer/2",
      });

      var map2 = new Map({
        basemap: "hybrid",
      });

      var view2 = new MapView({
        container: "viewDiv",
        map: map2,
      });
      map2.add(investmentLands);

      investmentLands.on("layerview-create", function (e) {
        view2
          .goTo(
            {
              center: [41.70229077166609, 27.52580151668012],
              zoom: 15,
            },
            {
              duration: 3000,
            }
          )
          .catch(function (error) {
            if (error.name != "AbortError") {
              console.error(error);
            }
          });
      });

      view2.on("click", function (evt) {
        var graphic2 = new Graphic({
          geometry: {
            type: "point",
            x: evt.mapPoint.latitude,
            y: evt.mapPoint.longitude,
            spatialReference: view2.spatialReference,
          },
          symbol: {
            type: "web-style",
            name: "push-pin-1",
            styleName: "Esri2DPointSymbolsStyle",
          },
        });
        view2.graphics.removeAll();
        view2.graphics.add(graphic2);

        var adfLong = graphic2.geometry.x;

        var adfLat = graphic2.geometry.y;
        //console.log(graphic2.geometry.x);
        // console.log(graphic2.geometry.y);
        $("input[name$=lat]").val(adfLat);
        $("input[name$=lng]").val(adfLong);
      });

      view2.when(() => {
        const featureLayer = map2.layers.getItemAt(0);

        const legend = new Legend({
          view: view2,
          layerInfos: [
            {
              layer: featureLayer,
              title: "أراضي الاستثمار",
            },
          ],
        });

        view2.ui.add(legend, "bottom-right");
      });
    });
  }
}

 showMap("41.70229077166609, 27.52580151668012");
