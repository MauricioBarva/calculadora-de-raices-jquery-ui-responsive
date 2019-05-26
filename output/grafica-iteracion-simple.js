"use strict";

window.addEventListener("load", function () {
  function draw() {
    try {
      // compile the expression once
      var expression = document.getElementById('ecuacion-iteracion').value;
      var expr = math.compile(expression); // evaluate the expression repeatedly for different values of x

      var xValues = math.range(-10, 10, 0.5).toArray();
      var yValues = xValues.map(function (x) {
        return expr.eval({
          x: x
        });
      }); // render the plot using plotly

      var trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      };
      var data = [trace1];
      Plotly.newPlot('plot-iteracion', data);
    } catch (error) {
      alert(error);
    }
  }

  document.getElementById('form-iteracion').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();
});