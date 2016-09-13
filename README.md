Angular File Field
========================

A pure angular (no jquery) file field that functions like the native file input field but is displayed as a bootstrap button (also works without bootstrap see "styling" below) instead of the ugly system file upload field.

Adds support for `ng-model` and image preview.

Fork of [itslenny/angular-bootstrap-file-field](https://github.com/itslenny/angular-bootstrap-file-field). In this fork added support of multiple upload and remove addiction on bootstrap(May used for material design).

Actions speak louder than words: [Check out THE DEMO](http://itslenny.github.io/angular-bootstrap-file-field/).

##Installation

Dependencies: Angular

Download and include angular-file-field.min.js

Create an angular app and inject `fileField`. That's about it.

##Usage

**Minimal**

```html
<file-field ng-model="addedFiles" preview="previews" ng-change="filesAdded()" name="my_files[]">
	<button class="btn btn-default">Add file(s)</button>
</file-field>
```

**Show file name**

```html
<file-field ng-model="addedFiles" preview="previews" ng-change="filesAdded()" name="my_files[]">
	<button class="btn btn-default">Add file(s)</button>
</file-field>

{{addedFiles[0].name}}
```

**Show image preview**

```html
<file-field ng-model="addedFiles" preview="previews" ng-change="filesAdded()" name="my_files[]">
	<button class="btn btn-default">Add file(s)</button>
</file-field>

<img ng-src="{{previews[0]}}">
```


##Configuration

**Options**

| Name | Values | Description |
|---|---|---|
| ng-model | scope variable | Behaves like ng-model on any other form element. Just binds to the $scope value in the controller. |
| preview | scope variable | Optional. If provided a base64 encoded image url will be provided. (this can be used in the ng-src or an img tag to display a preview |
| name | string | Optional. Set as name attribute to file input |


##Styling

This directive can transclude any html, not only bootstrap button.

##Send to server

For send to server recomended to use [danialfarid/ng-file-upload](https://github.com/danialfarid/ng-file-upload) solution.


