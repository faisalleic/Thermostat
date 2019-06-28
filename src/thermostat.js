"use strict"

function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemperature = 25;
  this.powerSavingMode = true;
}

Thermostat.prototype.powerSavingStatus = function() {
  if(this.powerSavingMode){
    return "on";
  } else {
    return "off";
  }
};

Thermostat.prototype.switchon = function(){
    this.powerSavingMode = true;
    this.maxTemperature = 25;
  };
Thermostat.prototype.switchoff = function() {
  this.powerSavingMode = false;
  this.maxTemperature = 32;
};


Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.tempu = function(){
  if(this.temperature < this.maxTemperature){
      this.temperature ++;
  }};

Thermostat.prototype.tempd = function() {
  if(this.temperature > this.minTemp){
    this.temperature --;
  }};


Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.energyUsage = function(){
  if(this.temperature < 18){
    return "low-usage"
  } else if(this.temperature < 25 && this.temperature >= 18){
    return "medium-usage"
  } else { return "high-usage" }
}
