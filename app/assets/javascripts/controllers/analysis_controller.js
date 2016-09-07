(function(App) {

  'use strict';

  App.Controller = App.Controller || {};

  App.Controller.Analysis = App.Controller.Page.extend({

    index: function() {
      $('#wizard').steps({
        headerTag: 'h1',
        bodyTag: 'section',
        autoFocus: true,
        enableFinishButton: false
      });

      $('#country').change(function() {
        if($(this).val() !== '') {
          $.get('/geo_locations/states_for/'+$(this).val());
        } else {
          $("#state-selection").addClass("hidden");
        }
      });
    },

    show: function(params) {
      //TO-DO: We should move this to a component
      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['data1', 30, 200, 200, 400, 150, 250],
            ['data2', 130, 100, 100, 200, 150, 50],
            ['data3', 230, 200, 200, 300, 250, 250]
          ],
          type: 'bar',
          groups: [
            ['data1', 'data2', 'data3']
          ]
        },
        grid: {
          y: {
            lines: [{value:0}]
          }
        }
      });
    }
  });


})(this.App);
