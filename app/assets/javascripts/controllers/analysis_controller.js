(function(App) {

  'use strict';

  App.Controller = App.Controller || {};

  App.Controller.Analysis = App.Controller.Page.extend({

    index: function() {

      new App.View.Steps({el: '#slider'})

      $('#country').change(function() {
        if($(this).val() !== '') {
          $.get('/geo_locations/states_for/'+$(this).val());
        } else {
          $("#state-selection").addClass("hidden");
        }
      });
    },

    show: function(params) {
      var analysisModel = new App.Model.Analysis({
        id: params.id
      });
      // Fetch the analysis before render the graphs
      analysisModel.fetch()
        .then(function(){
          console.log(analysisModel.toJSON());

          this.chart1 = new App.View.Chart({
            el: '#chart-1',
            options: {
              data: {
                columns: [
                  ['data1', 30, 200, 100, 400, 150, 250],
                  // ['data2', 130, 100, 140, 200, 150, 50]
                ],
                type: 'bar'
              },
              bar: {
                width: {
                  ratio: 0.5 // this makes bar width 50% of length between ticks
                }
              },
              axis: {
                x: {
                  type: 'category',
                  categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9']
                }
              }
            }
          });

          this.chart2 = new App.View.Chart({
            el: '#chart-2',
            options: {
              data: {
                columns: [
                  ['data1', 30, 200],
                  ['data2', 130, 100],
                  ['data3', 230, 200]
                ],
                type: 'bar',
                groups: [
                  ['data1', 'data2', 'data3']
                ]
              },
              bar: {
                width: {
                  ratio: 0.5 // this makes bar width 50% of length between ticks
                }
              },
              axis: {
                x: {
                  type: 'category',
                  categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9']
                }
              }
            }
          });
        }.bind(this))
        .fail(function(){
          console.log('The API does not work');
        }.bind(this))

    }
  });


})(this.App);
