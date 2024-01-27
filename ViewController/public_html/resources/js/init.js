$(function () {
  require([
    "esri/WebMap",
    "esri/views/MapView",
    "esri/intl",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Expand",
    "esri/widgets/Search",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Bookmarks",
    "esri/widgets/LayerList",
    "esri/widgets/Home",
    "esri/widgets/Compass",
    "esri/widgets/Locate",
    "esri/widgets/DistanceMeasurement2D",
    "esri/widgets/AreaMeasurement2D",

    "esri/widgets/Print",

    "esri/core/promiseUtils",

    "esri/config",
  ], (
    WebMap,
    MapView,
    intl,
    FeatureLayer,
    GraphicsLayer,
    Expand,
    Search,
    BasemapGallery,
    Bookmarks,
    LayerList,
    Home,
    Compass,
    Locate,
    DistanceMeasurement2D,
    AreaMeasurement2D,

    Print,

    promiseUtils,

    esriConfig
  ) => {
    intl.setLocale("ar");

    const glSelect = new GraphicsLayer({
      title: "طبقة الاختيار",
      listMode: "hide",
    });

    const map = new WebMap({
      basemap: "topo-vector",
    });

    const landsTemplate = {
      title: "اراضى الإستثمار",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "PKGMRAID",
              label: "رقم مميز القطعة",
            },
            {
              fieldName: "FKPLANID",
              label: "رقم مميز المخطط",
            },
            {
              fieldName: "FKDEEDID",
              label: "رقم مميز الصك",
            },
            {
              fieldName: "FKROADID",
              label: "الشارع الرئيسي",
            },
            {
              fieldName: "PARCELNO",
              label: "رقم قطعة الأرض من المخطط",
            },
            {
              fieldName: "MAINLANDUSE",
              label: " الاستعمال الرئيسي",
            },
            {
              fieldName: "PARCELLANDUSE",
              label: "إستعمال الأرض التفصيلي",
            },
            {
              fieldName: "CREATIONUSER",
              label: "CREATIONUSER",
            },
            {
              fieldName: "DATECREATED",
              label: "DATECREATED",
            },
            {
              fieldName: "DATEMODIFIED",
              label: "DATEMODIFIED",
            },
            {
              fieldName: "PARCELLEVEL",
              label: "منسوب قطعة الأرض",
            },
            {
              fieldName: "WATERSERVICE",
              label: "خدمات المياه",
            },
            {
              fieldName: "ELECTRICITYSERVICE",
              label: "خدمات كهرباء",
            },
            {
              fieldName: "TELECOMESERVICE",
              label: "خطوط هاتف ثابت",
            },
            {
              fieldName: "SEWERHISTORY",
              label: "صرف صحي",
            },
            {
              fieldName: "BUILDINGCOUNT",
              label: "عدد المباني",
            },
            {
              fieldName: "BUILDINGAREA",
              label: "المساحة المبنية",
            },
            {
              fieldName: "EMPTYAREA",
              label: "المساحة الفضاء",
            },
            {
              fieldName: "ELEVATION",
              label: "الارتفاع",
            },
            {
              fieldName: "FKMUNICIPAITYID",
              label: "رقم مميز البلدية",
            },
            {
              fieldName: "STREETLEVEL",
              label: "STREETLEVEL",
            },
            {
              fieldName: "PARCEL_STATUS",
              label: "حالة الموقع",
            },
            {
              fieldName: "nots",
              label: "nots",
            },
            {
              fieldName: "apl_code",
              label: "apl_code",
            },
            {
              fieldName: "Status",
              label: "الحالة",
            },
          ],
        },
      ],
    };

    const contractTemplate = {
      title: "العقود الإستثماريه",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "كود_العقد",
              label: "كود العقد",
            },
            {
              fieldName: "حالةالعقد",
              label: "حالة العقد",
            },
            {
              fieldName: "تاريخ_اول_عقد",
              label: "تاريخ اول عقد",
            },
            {
              fieldName: "تاريخ_البداية",
              label: "تاريخ البداية",
            },
            {
              fieldName: "تاريخ_النهاية",
              label: "تاريخ النهايه",
            },
            {
              fieldName: "وصف_الممتلك",
              label: "وصف الممتلك",
            },
            {
              fieldName: "رقم_المخطط",
              label: "رقم المخطط",
            },
            {
              fieldName: "التصنيف_التابع_له_الممتلك",
              label: "التصنيف التابع له الممتلك",
            },
            {
              fieldName: "اسم_المستثمر",
              label: "اسم المستثمر",
            },
            {
              fieldName: "وصف_النشاط",
              label: "وصف النشاط",
            },
            {
              fieldName: "رقم_القطعة",
              label: "رقم القطعه",
            },
            {
              fieldName: "رقم_العقد",
              label: "رقم العقد",
            },
            {
              fieldName: "الحي",
              label: "الحي",
            },
            {
              fieldName: "كود_البلدية",
              label: "كود البلديه",
            },
            {
              fieldName: "اسم_البلدية",
              label: "اسم البلديه",
            },
            {
              fieldName: "تاريخ_بداية_العقد",
              label: "تاريخ بدايه العقد",
            },
            {
              fieldName: "تاريخ_نهاية_العقد",
              label: "تاريخ نهايه العقد",
            },
            {
              fieldName: "تاريخ_نهاية_اخر_سداد_على_العقد",
              label: "تاريخ نهايه اخر سداد علي العقد",
            },
            {
              fieldName: "تاريخ_اخر_تسوية_على_العقد",
              label: "تاريخ اخر تسويه علي العقد",
            },
            {
              fieldName: "تاريخ_الاستحقاق",
              label: "تاريخ الاستحقاق",
            },
            {
              fieldName: "قيمة_الايجار_السنوي",
              label: "قيمه الايجار السنوي",
            },
            {
              fieldName: "المبلغ_المستحق",
              label: "المبغ المستحق",
            },
            {
              fieldName: "نوع_الاستثمار",
              label: "نوع الاستثمار",
            },
            {
              fieldName: "حالة_العقد",
              label: "حالة العقد",
            },
            {
              fieldName: "كود_المستثمر",
              label: "كود المستثمر",
            },
            {
              fieldName: "رقم_الهويه",
              label: "رقم الهويه",
            },
            {
              fieldName: "نوع_المستثمر",
              label: "نوع المستثمر",
            },
            {
              fieldName: "رقم_الجوال",
              label: "رقم الجوال",
            },
            {
              fieldName: "رقم_الهاتف",
              label: "رقم الهاتف",
            },
            {
              fieldName: "X",
              label: "X",
            },
            {
              fieldName: "Y",
              label: "Y",
            },
            {
              fieldName: "A_CO",
              label: "A_CO",
            },
          ],
        },
      ],
    };

    for (var i = 8; i >= 0; i--) {
      const url =
        "https://services8.arcgis.com/L0qfS8oCJd8BimBM/arcgis/rest/services/Hail/FeatureServer/" +
        i;
      map.add(
        new FeatureLayer({
          url: url,
          //listMode: "hide",
          outFields: i == 0 || i || 2 ? ["*"] : [],
          popupTemplate:
            i === 0 ? contractTemplate : i === 2 ? landsTemplate : null,
        })
      );
    }

    const view = new MapView({
      container: "mapDiv",
      map: map,
      zoom: 7,
      center: [41.70229077166609, 27.52580151668012],
    });

    view.when(() => {
      //view.watch("extent", (evt) => {
      //    console.log(evt)
      //})
      const searchWidget = new Search({
        view: view,
      });
      const expandSearch = new Expand({
        content: searchWidget,
        group: "grp_top_left",
      });
      view.ui.add(expandSearch, {
        position: "top-left",
      });

      const basemapGallery = new BasemapGallery({
        view: view,
      });
      const expandBasemapGalary = new Expand({
        content: basemapGallery,
        group: "grp_top_left",
      });
      view.ui.add(expandBasemapGalary, {
        position: "top-left",
      });

      const bookmarks = new Bookmarks({
        view: view,
        // allows bookmarks to be added, edited, or deleted
        editingEnabled: true,
      });
      const expandBookmarks = new Expand({
        content: bookmarks,
        group: "grp_top_left",
      });
      view.ui.add(expandBookmarks, {
        position: "top-left",
      });

      const layerList = new LayerList({
        view: view,
        listItemCreatedFunction: (event) => {
          const item = event.item;
          if (item.layer.type !== "group") {
            // don't show legend twice
            item.panel = {
              content: "legend",
              open: true,
            };
          }
        },
      });
      const expandLayerList = new Expand({
        content: layerList,
        group: "grp_top_left",
      });
      view.ui.add(expandLayerList, {
        position: "top-left",
      });

      const print = new Print({
        view: view,
        // specify your own print service
        printServiceUrl:
          "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
      });
      const expandPrint = new Expand({
        content: print,
        group: "grp_top_left",
      });
      view.ui.add(expandPrint, {
        position: "top-left",
      });

      const expandClearGraphics = new Expand({
        content: document.getElementById("clearGraphics"),
        group: "grp_top_left",
        expandIconClass: "esri-icon-erase",
        collapseIconClass: "esri-icon-erase",
      });
      view.ui.add(expandClearGraphics, {
        position: "top-left",
      });

      // *** top-right ***
      const homeBtn = new Home({
        view: view,
      });
      view.ui.add(homeBtn, {
        position: "top-right",
      });

      const compassBtn = new Compass({
        view: view,
      });
      view.ui.add(compassBtn, {
        position: "top-right",
      });

      const locateBtn = new Locate({
        view: view,
      });
      view.ui.add(locateBtn, {
        position: "top-right",
      });

      const distanceMeasurement = new DistanceMeasurement2D({
        view: view,
      });
      const expandDistanceMeasurement = new Expand({
        content: distanceMeasurement,
        group: "bottom-right",
      });
      expandDistanceMeasurement.watch("expanded", (pExpanded) => {
        if (!pExpanded) {
          distanceMeasurement.viewModel.clear();
        }
      });
      view.ui.add(expandDistanceMeasurement, {
        position: "bottom-right",
      });

      const areaMeasurement = new AreaMeasurement2D({
        view: view,
      });
      const expandAreaMeasurement = new Expand({
        content: areaMeasurement,
        group: "bottom-right",
      });
      expandAreaMeasurement.watch("expanded", (pExpanded) => {
        if (!pExpanded) {
          areaMeasurement.viewModel.clear();
        }
      });
      view.ui.add(expandAreaMeasurement, {
        position: "bottom-right",
      });
      // *** bottom-left ***
      setTimeout(() => {
        view.goTo(
          {
            center: [41.70229077166609, 27.52580151668012],
            zoom: 10,
          },
          {
            animate: true,
            duration: 2050,
            easing: "ease-in",
          }
        );
      }, 5250);

      const debouncedUpdate = promiseUtils.debounce((event, pEvent) => {
        // Perform a hitTest on the View
        view.hitTest(event).then((event) => {
          event.results.forEach((x) => {
            view.graphics.removeAll();
            if (x.layer.title.indexOf("Land polygon") != -1) {
              glSelect.graphics.removeAll();
              const symbol = {
                type: "simple-fill",
                color: [255, 230, 128, 0.5],
                style: "solid",
                outline: {
                  color: "#FF0101",
                  width: 4,
                  style: "solid",
                },
              };
              x.graphic.symbol = symbol;
              glSelect.graphics.add(x.graphic);

              getGISData({
                layer: x.layer.title,
                id: x.graphic.attributes.ID,
                objectId: x.graphic.attributes.OBJECTID,
              });
              view.goTo(
                {
                  target:
                    x.layer.title.indexOf("Land polygon") != -1
                      ? x.graphic.geometry.extent.expand(1.75)
                      : x.graphic,
                },
                {
                  animate: true,
                  duration: 750,
                  easing: "ease-in",
                }
              );
            }
          });
        });
      });

      view.on("click", (event) => {
        debouncedUpdate(event, "click").catch((err) => {
          if (!promiseUtils.isAbortError(err)) {
            throw err;
          }
        });
      });
    });
  });
});
