

angular
  .module('luna').factory('Contacts', ['$resource',
    function ($resource) {
      return $resource('http://192.168.32.66:55868/api/contacts/:id', { id: '@Id' }, {
        // Let's make the `query()` method cancellable
        get: { method: 'get', isArray: true, cancellable: true },
        put: { method: 'put', isArray: true, cancellable: true }
      });
    }]).factory('Panels', ['$resource',
      function ($resource) {
        return $resource('http://localhost:55868/api/panels', {}, {
          // Let's make the `query()` method cancellable
          get: { method: 'get', isArray: true, cancellable: true },
          saveall: { method: 'post', isArray: true, cancellable: true }
        });
      }]).factory('UserConfigs', ['$resource',
        function ($resource) {
          return $resource('/api/UserConfigs', {},{
            // Let's make the `query()` method cancellable
            get: { method: 'Get', params:{id:'@Id'},isArray: false, cancellable: true },
            put: { method: 'Put', params: { id:"@Id",pageId: '@pageId', pageAlias: '@pageAlias', Config: '@Config' }, isArray: false, cancellable: true },
            save: { method: 'Post', params: { id:"@Id",pageId: '@pageId', Config: '@Config', pageAlias: '@pageAlias' }, isArray: false, cancellable: true },
            delete: { method: 'Delete', params: { id:"@Id",pageId: '@pageId' }, isArray: false, cancellable: true }
          });
        }]).factory('UserLog', function () {
          var sdo = {
            isLogged: false,
            username: ''
          };
          return sdo;
        }).factory('UserAuth', ['$resource',
        function ($resource) {
          return $resource('http://localhost:55868/api/UserAuth',  {
            // Let's make the `query()` method cancellable
            get: { method: 'GetUser', params:{username:'@username',password:"@password"},isArray:true, cancellable: true }
            // put: { method: 'Put', params: { pageId: '@pageId', pageAlias: '@pageAlias', Config: '@Config' }, isArray: false, cancellable: true },
            // save: { method: 'Post', params: { pageId: '@pageId', Config: '@Config', pageAlias: '@pageAlias' }, isArray: false, cancellable: true },
            // delete: { method: 'Delete', params: { pageId: '@pageId' }, isArray: false, cancellable: true }
          })}]);