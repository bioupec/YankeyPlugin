function YankeyPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
YankeyPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'YankeyPlugin', 'show', [options]);
}

// Installation constructor that binds YankeyPlugin to window
YankeyPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.yankeyPlugin = new YankeyPlugin();
  return window.plugins.yankeyPlugin;
};
cordova.addConstructor(YankeyPlugin.install);

