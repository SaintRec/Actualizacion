//para hacer uso de $resource debemos colocarlo al crear el modulo
var myApp = angular.module("myApp", ["ngResource"]);

//con dataResource inyectamos la factoría
myApp.controller("appController", function ($scope, $http, dataResource) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('http://tiagolex.byethost7.com/server/tipoemoji/leer').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        console.log(data);
        $scope.datos = data;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
    $scope.datosResource = dataResource.get();
})

//de esta forma tan sencilla consumimos con $resource en AngularJS
myApp.factory("dataResource", function ($resource) {
    return $resource("http://tiagolex.byethost7.com/server/tipoemoji/leer", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        {
            get: { method: "GET", isArray: true }
        })
})