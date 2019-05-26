function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

var arrayJS = ['biseccion', 'newton', 'falsa-posicion',
    'falsa-posicion-modificada',
    'grafica-biseccion',
    'grafica-fp',
    'grafica-fp-m',
    'grafica-iteracion-simple',
    'grafica-newton',
    'grafica-secante',
    'iteracion-simple',
    'math.min',
    'newton',
    'plotly-1.35.2.min',
    'secante'
]
for (var i in arrayJS) {
    importarScript('src/' + arrayJS[i] + '.js');
}