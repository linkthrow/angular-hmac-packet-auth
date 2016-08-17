angular-plyr
=================
Angular Plyr is an angular wrapper for the Plyr plugin(https://github.com/Selz/plyr)


Demo
----
Check out the demo [here](https://plyr.io/).


How to Use
----------
Include `angular-plyr.(js|css)` in your project (you can do so via `bower install angular-plyr`).

Load the directive after loading `angular.js`

```
<script src="<path to angular.js>"></script>
<script src="<path to angular-plyr.js>"></script>
```

Specify angular-plyr as a dependency of your Angular module.

```
var app = angular.module('ngApp', [
  'linkthrow.angular-plyr'
]);
```

Use it in your project.

```
<html ng-app="ngApp">
...
<body>
  <plyr type="youtube" id="9OBh4CyplCU">Play Video!</plyr>.
  ...
</body>
</html>
```
