'use strict';
console.log("i'm here in script file");
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);

      // attaching the tile layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      async function getMomtalakatData() {
        const response = await fetch(
          'http://194.146.12.188:7003/Invst11-RESTWebService-context-root/rest/1/MomtlkatServiceView1?limit=9999'
        );

        const data = await response.json();
        // console.log(data);
        console.log(data.items[0].CoordinatesX);
        console.log(data.items[0].CoordinatesY);
        // console.log(typeof data.items);
        for (const itemOfMomtalakat in data.items) {
          const marker = L.marker([
            data.items[itemOfMomtalakat].CoordinatesX,
            data.items[itemOfMomtalakat].CoordinatesY,
          ])
            .addTo(map)
            .bindPopup(`كود الممتلك ${data.items[itemOfMomtalakat].MomtlkCode}`)
            .openPopup();
        }
        // console.log(marker);

        // esri
        // var map = L.map('map').setView([45.53, -122.64], 14);

        L.esri.basemapLayer('Streets').addTo(map);

        L.esri
          .featureLayer({
            url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/stops/FeatureServer/0/',
          })
          .addTo(map);

        // end of esri

        return data.items;
      }

      const ArrayOfMomtalakat = getMomtalakatData();
      //console.log(ArrayOfMomtalakat.length);

      // for (const itemOfMomtalakat in ArrayOfMomtalakat) {
      //   const marker = L.marker([
      //     ArrayOfMomtalakat[itemOfMomtalakat].CoordinatesY,
      //     ArrayOfMomtalakat[itemOfMomtalakat].CoordinatesX,
      //   ]).addTo(map);
      //   // .bindPopup('this is a pop-up')
      //   // .openPopup();
      //   console.log(marker);
      // }
      map.on('click', function (mopEvent) {
        console.log(mopEvent);
      });
    },
    function () {
      alert('can not get your current position ');
    }
  );
}
