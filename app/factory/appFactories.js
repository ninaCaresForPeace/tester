'use strict';
//(function() {
	angular.module('myApp') 
	.factory('getJsonService', ['$http', '$q',function($http, $q){
        return {
            retrieveJson : function(pathName){
            	var d = $q.defer();
                $http.get(pathName).then(function(data){ //wrap it inside another promise using then
                           
                            console.log("in the service: " + data)
                            d.resolve(data);
                			//return response.data.menu[0];  //only return friends 
                  });
                return d.promise;
            }
        }
    }]);
//})();
