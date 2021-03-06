/**
 * revisamigrieta.appspot.com
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Revisamigrietaappspotcom);
  }
}(this, function(expect, Revisamigrietaappspotcom) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Revisamigrietaappspotcom.GeoPt();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GeoPt', function() {
    it('should create an instance of GeoPt', function() {
      // uncomment below and update the code to test GeoPt
      //var instane = new Revisamigrietaappspotcom.GeoPt();
      //expect(instance).to.be.a(Revisamigrietaappspotcom.GeoPt);
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new Revisamigrietaappspotcom.GeoPt();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new Revisamigrietaappspotcom.GeoPt();
      //expect(instance).to.be();
    });

  });

}));
