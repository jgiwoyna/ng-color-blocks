colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;

  self.colors = DataFactory.colors; // original color array from data factory

  self.newColor = ""; // new color entered by user

  self.newColorBlocks = []; // new color block

  addColorBlocks(self.colors); // adds new color block to game

  self.addNewColor = function() {
    self.colors.push(self.newColor);
    DataFactory.colors = self.colors;
    self.newColor = "";
    self.newColorBlocks = [];
    addColorBlocks(self.colors);
  }

  function addColorBlocks(colors) {
    for (var i = 0; i < colors.length; i++) {
      var color = {};
      color.name = colors[i];
      color.index = i;
      self.newColorBlocks.push(color);
    }
  }

}]);
