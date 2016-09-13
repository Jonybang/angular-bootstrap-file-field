/* @preserve
 *
 * angular-file-field
 * https://github.com/Jonybang/angular-file-field
 *
 * Version: 0.1.4 - 09/13/2016
 * License: MIT
 */

angular.module('fileField',[])
    .directive('fileField', [function() {
        return {
            require:'ngModel',
            restrict: 'E',
            transclude: true,
            scope: {
                ngModel: '=',
                preview: '=',
                ngChange: '&',
                name: '@'
            },
            template: '<div ng-transclude></div><input id="fileField" name="{{name}}" type="file" multiple style="display:none">',
            link: function (scope, element, attrs, ngModel) {

                var fileField = angular.element(document.querySelector('#fileField'));

                fileField.bind('change', function(event){
                    scope.$evalAsync(function () {
                        scope.ngModel = event.target.files;

                        scope.preview = [];
                        angular.forEach(event.target.files, function(file, index){
                            var reader = new FileReader();
                            reader.onload = function (e) {
                                scope.$evalAsync(function(){
                                    scope.preview.splice(index, 0, e.target.result);

                                    if(scope.preview.length == event.target.files.length){
                                        scope.ngChange();
                                    }
                                });
                            };
                            reader.readAsDataURL(file);
                        });
                    });
                });
                fileField.bind('click',function(e){
                    e.stopPropagation();
                });
                element.bind('click',function(e){
                    e.preventDefault();
                    fileField[0].click()
                });
            }
        };
    }]);
