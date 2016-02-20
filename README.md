# mdComponentDialog

Extends angular materials dialog service with .showAbrisComponentDialog(). 
This method takes the name of a directiva as a parameter and will inject that directive into the dialog. 
This can be useful when you don't want to create a template and controller for a dialog when all that you want is to show a directive in it.
The service uses ngIncludeComponent in to dynamically inject the directive into the dialog template.

## Install

```
bower install md-component-dialog --save
```

```
var app = angular.module('app', ['abrissirba.mdComponentDialog']);
```

## Example


```javascript
$mdDialog.showAbrisComponentDialog({
    componentName: 'userComponent',
    title: 'User',
    params: {
        user: {
            name: 'Marcus Abrahamsson',
            city: 'Linköping',
            country: 'Sweden'
        }
    },
    clickOutsideToClose: true
}).then(function(res){
    
});
```

```javascript
angular
    .module('angularMdComponentDialog')
    .directive('userComponent', function User() {
    
        return {
             scope: {
              user: '=',
              onOk: '=?',
              onCancel: '=?',
          },
          templateUrl: 'app/components/user.html',
          link: function (scope) {
              scope.ok = function () {
                  $log.log("ok");
                  if(scope.onOk){
                      scope.onOk();
                  }
              }
          }
        }
    }
```

```html
<div>
    {{user | json}}
</div>
<md-button ng-click="onCancel()">Cancel</md-button>
<md-button ng-click="ok()">ok</md-button>
```

## API - Service

mdComponentDialog uses the same options as the regular .show() method plus the following

### componentName

Type `String`

The name of the directive that should be used within the dialog. The name should be in camelCase;

### title

Type `String`

The title that should be used in the dialog toolbar

### params

Type `any`

An object that holds the parameters that should be injected into the directive scope. 

## API - Directive

mdComponentDialog will provide two callback methods to the directive it injects into its template. These should be called if you want to close the dialog and resolve the dialog promise.

### onOk

Call this if you want to resolve the dialog promise

### onCancel

Call this if you want to reject the dialog promise
