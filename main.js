/* Following the quickstart instructions for angular-google-maps, I'm declaring
uiGmapgoogle-maps as a dependency of my app. */
angular.module('app', ['uiGmapgoogle-maps'])
/* Normally, I'd declare each component in a separate file, but I'm using one
file for this example to keep things simple.
As I built out these components, I'd also add bindings and controllers as needed.
*/
  .component('orderForm', {
    templateUrl: 'order_form.html',
  })
  .component('mapTab', {
    templateUrl: 'map_tab.html',
    controller: function () {
      /* Following the quickstart instructions for angular-google-maps, I'm
      creating a settings object to pass to the ui-gmap-google-map directive. */
      this.map = {
        center: {
          latitude: 34,
          longitude: -118,
        },
        zoom: 9,
      };
    },
  })
  .component('otherTab', {
    templateUrl: 'other_tab.html',
  });
