angular.module("app")
.factory("recordsFactory", function($http) {
  factory = {};
  factory.add = function(data) {
    return $http.put("/api/records/", data).then(function(response) {
      return {data: response.data, status: response.status};
    }, function(response) {
      if(response.status === 500) {
        return {data: response.data, status: response.status};
      }
      else if(response.status === 403) {
        return {data: response.data, status: response.status}
      }
    })
  };

  factory.getAll = function() {
    return $http.get("/api/records/").then(function(response) {
      return response.data;
    }, function(response) {
      return response.data;
    })
  };

  factory.getServer = function(server) {
    return $http.get("/api/records/server/"+server).then(function(response) {
      return response.data;
    }, function(response) {
      return response.data;
    })
  };

  factory.getClass = function(cls) {
    return $http.get("/api/records/class/"+cls).then(function(response) {
      return response.data;
    }, function(response) {
      return response.data;
    })
  };

  factory.getName = function(name) {
    return $http.get("/api/records/name/"+name).then(function(response) {
      return response.data;
    }, function(response) {
      return response.data;
    });
  };

  return factory;
});
