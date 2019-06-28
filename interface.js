$(document).ready(function () {

var thermostat
thermostat = new Thermostat();

$('#temperature').text(thermostat.currentTemp());

$('#temperature-up').click(function() {
  thermostat.tempu();
  $('#temperature').text(thermostat.currentTemp());
});

$('#temperature-down').click(function() {
  thermostat.tempd();
  $('#temperature').text(thermostat.currentTemp());
});

$('#temperature-reset').click(function(){
  thermostat.reset();
  $('#temperature').text(thermostat.currentTemp());
})

});
