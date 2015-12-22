/*
 * File         :   slowService.js
 * Description  :   A service that is very slow at returning.
 * ------------------------------------------------------------------------------------------------ */
function cpuIntensiveProcess() {
  var i = 0;
  while (i < 50000000) {
    i += Math.round(Math.random());
  }
}

var service = function () {
  return new Promise(function (resolve) {
    cpuIntensiveProcess();
    resolve();
  });
};

module.exports = service;