angular.module('uploadTest',['fileField'])
.controller('uploadTestCtrl',['$scope', '$http',function($scope, $http){

	$scope.addedFiles = [];
	$scope.previews = [];

    $scope.doUpload = function(){

        console.log('previews', $scope.previews);
        console.log('addedFiles', $scope.addedFiles);
        alert('Do upload. See console for data');


        

        //create form data object
        var fd = new FormData();
        fd.append('title',$scope.title);
		angular.forEach($scope.addedFiles, function(file){
			fd.append('file[]', file);
		});
        

        //send the file / data to your server
        $http.post('/file/upload/path', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(data){
            //do something on success
        }).error(function(err){
            //do something on error
        })
        /**/          
    }
    
}]);
