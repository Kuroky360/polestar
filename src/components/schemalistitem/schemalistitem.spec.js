'use strict';

describe('Directive: schemaListItem', function () {

  // load the directive's module
  beforeEach(module('polestar', function($provide) {
    // mock vega
    $provide.constant('vg', {
      parse: {
        spec: function(spec, callback) {
          callback(function(opt) {

            return {
              width: function() {},
              height: function() {},
              update: function() {},
              renderer: function() {},
              on: function() {}
            };
          });
        }
      }
    });
    $provide.constant('vl', vl);
  }));


  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<schema-list-item field="{name:\'a\'}"></schema-list-item>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.find('span.field-info').length).toBe(1);
  }));
});