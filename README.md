angular-justgage
================

JustGage directive for AngularJS


License: [MIT](http://www.opensource.org/licenses/mit-license.php)

***

## About

__ngJustGage__ A simple Angular directive wrapper for [JustGage](http://justgage.com/)

***

## Usage

```html
<!DOCTYPE html>
<html ng-app="app">
<head>
    <script src="..\libs\angular-1.0.5.js"></script>
    <script src="..\libs\raphael.2.1.0.min.js"></script>
    <script src="..\libs\justgage.1.0.1.js"></script>
    <script src="..\src\ng-justgage.js"></script>
    <script src="..\src\app.js"></script>
</head>
<body ng-controller="myController">
    <just-gage id="test1" min=0 max=100 value=42 title="Test 1"></just-gage>
</body>
</html>
```

## Demo

![angular-justgage](https://raw.github.com/mattlaver/angular-justgage/master/screen.png)
