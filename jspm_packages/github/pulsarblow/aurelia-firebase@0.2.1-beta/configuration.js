/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ConfigurationDefaults = function ConfigurationDefaults() {
    _classCallCheck(this, ConfigurationDefaults);
  };

  exports.ConfigurationDefaults = ConfigurationDefaults;

  ConfigurationDefaults._defaults = {
    firebaseUrl: null,
    monitorAuthChange: false
  };

  ConfigurationDefaults.defaults = function () {
    var defaults = {};
    Object.assign(defaults, ConfigurationDefaults._defaults);
    return defaults;
  };

  var Configuration = (function () {
    function Configuration(innerConfig) {
      _classCallCheck(this, Configuration);

      this.innerConfig = innerConfig;
      this.values = this.innerConfig ? {} : ConfigurationDefaults.defaults();
    }

    _createClass(Configuration, [{
      key: 'getValue',
      value: function getValue(identifier) {
        if (this.values.hasOwnProperty(identifier) !== null && this.values[identifier] !== undefined) {
          return this.values[identifier];
        }
        if (this.innerConfig !== null) {
          return this.innerConfig.getValue(identifier);
        }
        throw new Error('Config not found: ' + identifier);
      }
    }, {
      key: 'setValue',
      value: function setValue(identifier, value) {
        this.values[identifier] = value;
        return this;
      }
    }, {
      key: 'getFirebaseUrl',
      value: function getFirebaseUrl() {
        return this.getValue('firebaseUrl');
      }
    }, {
      key: 'setFirebaseUrl',
      value: function setFirebaseUrl(firebaseUrl) {
        return this.setValue('firebaseUrl', firebaseUrl);
      }
    }, {
      key: 'getMonitorAuthChange',
      value: function getMonitorAuthChange() {
        return this.getValue('monitorAuthChange');
      }
    }, {
      key: 'setMonitorAuthChange',
      value: function setMonitorAuthChange() {
        var monitorAuthChange = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        return this.setValue('monitorAuthChange', monitorAuthChange === true);
      }
    }]);

    return Configuration;
  })();

  exports.Configuration = Configuration;
});