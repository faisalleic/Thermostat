$(document).ready(function () {

var thermostat
thermostat = new Thermostat();

$('#temperature').text(thermostat.currentTemp());

$('#temperature-up').click(function() {
  thermostat.tempu();
  // $('#temperature').text(thermostat.currentTemp());
  updateTemperature();
});

$('#temperature-down').click(function() {
  thermostat.tempd();
  updateTemperature();
});

$('#temperature-reset').click(function(){
  thermostat.reset();
  updateTemperature();
});

$('#power-saving-status').text(thermostat.powerSavingStatus());

$('#powersaving-on').click(function(){
  thermostat.switchon();
$('#power-saving-status').text(thermostat.powerSavingStatus());
updateTemperature();

});

$('#powersaving-off').click(function(){
  thermostat.switchoff();
$('#power-saving-status').text(thermostat.powerSavingStatus());
updateTemperature();
});

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}
});
