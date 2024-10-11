const presets = [
  ['@babel/preset-env', { // predefina o que você quer usar
    targets: { // as versões de navegador em que queremos que nosso código seja suportado
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },

    // use polyfills para os navegadores especificados na opção de destinos acima
    // O Babel usa polyfills da biblioteca core-js
    useBuiltIns: "entry",
    corejs: '^3',
  }]
];

module.exports = { presets };
