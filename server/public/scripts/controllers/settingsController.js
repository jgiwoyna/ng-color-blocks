colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  var self = this;

  self.colors = DataFactory.colors;

  self.newColor = "";

  self.newColorBlocks = [];

  addColorBlocks(self.colors);
  console.log(self.newColorBlocks);

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
