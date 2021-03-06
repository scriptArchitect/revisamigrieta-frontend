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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EstadoDeObra', 'model/GeoPt', 'model/TipoEnum', 'model/UbicacionEnum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EstadoDeObra'), require('./GeoPt'), require('./TipoEnum'), require('./UbicacionEnum'));
  } else {
    // Browser globals (root is window)
    if (!root.Revisamigrietaappspotcom) {
      root.Revisamigrietaappspotcom = {};
    }
    root.Revisamigrietaappspotcom.GrietaModel = factory(root.Revisamigrietaappspotcom.ApiClient, root.Revisamigrietaappspotcom.EstadoDeObra, root.Revisamigrietaappspotcom.GeoPt, root.Revisamigrietaappspotcom.TipoEnum, root.Revisamigrietaappspotcom.UbicacionEnum);
  }
}(this, function(ApiClient, EstadoDeObra, GeoPt, TipoEnum, UbicacionEnum) {
  'use strict';




  /**
   * The GrietaModel model module.
   * @module model/GrietaModel
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GrietaModel</code>.
   * @alias module:model/GrietaModel
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>GrietaModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrietaModel} obj Optional instance to populate.
   * @return {module:model/GrietaModel} The populated <code>GrietaModel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comentario')) {
        obj['comentario'] = ApiClient.convertToType(data['comentario'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
      }
      if (data.hasOwnProperty('diagonalesLosa')) {
        obj['diagonalesLosa'] = ApiClient.convertToType(data['diagonalesLosa'], 'Boolean');
      }
      if (data.hasOwnProperty('diagonalesPiso')) {
        obj['diagonalesPiso'] = ApiClient.convertToType(data['diagonalesPiso'], 'Boolean');
      }
      if (data.hasOwnProperty('estadoDeObra')) {
        obj['estadoDeObra'] = EstadoDeObra.constructFromObject(data['estadoDeObra']);
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], ['String']);
      }
      if (data.hasOwnProperty('geolocalizacion')) {
        obj['geolocalizacion'] = GeoPt.constructFromObject(data['geolocalizacion']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
      }
      if (data.hasOwnProperty('paralelasPiso')) {
        obj['paralelasPiso'] = ApiClient.convertToType(data['paralelasPiso'], 'Boolean');
      }
      if (data.hasOwnProperty('revisada')) {
        obj['revisada'] = ApiClient.convertToType(data['revisada'], 'Boolean');
      }
      if (data.hasOwnProperty('tipo')) {
        obj['tipo'] = TipoEnum.constructFromObject(data['tipo']);
      }
      if (data.hasOwnProperty('tweet')) {
        obj['tweet'] = ApiClient.convertToType(data['tweet'], 'String');
      }
      if (data.hasOwnProperty('ubicacionEnum')) {
        obj['ubicacionEnum'] = UbicacionEnum.constructFromObject(data['ubicacionEnum']);
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} comentario
   */
  exports.prototype['comentario'] = undefined;
  /**
   * @member {Date} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * @member {Boolean} diagonalesLosa
   */
  exports.prototype['diagonalesLosa'] = undefined;
  /**
   * @member {Boolean} diagonalesPiso
   */
  exports.prototype['diagonalesPiso'] = undefined;
  /**
   * @member {module:model/EstadoDeObra} estadoDeObra
   */
  exports.prototype['estadoDeObra'] = undefined;
  /**
   * @member {Array.<String>} files
   */
  exports.prototype['files'] = undefined;
  /**
   * @member {module:model/GeoPt} geolocalizacion
   */
  exports.prototype['geolocalizacion'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {Boolean} paralelasPiso
   */
  exports.prototype['paralelasPiso'] = undefined;
  /**
   * @member {Boolean} revisada
   */
  exports.prototype['revisada'] = undefined;
  /**
   * @member {module:model/TipoEnum} tipo
   */
  exports.prototype['tipo'] = undefined;
  /**
   * @member {String} tweet
   */
  exports.prototype['tweet'] = undefined;
  /**
   * @member {module:model/UbicacionEnum} ubicacionEnum
   */
  exports.prototype['ubicacionEnum'] = undefined;
  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


