Template-test-helpers
================================

Template helpers and callbacks can easily be unit tested. 
The only problem is to get to them you have to rely on private properties.
For example to test a onRendered callbacks you'd have to use:

```javascript
let templateInstance = sinon.createStubInstance(Blaze.TemplateInstance);
templateInstance.$ = sinon.spy($);

Template[templateName]._callbacks.onRendered.call(templateInstance);

//Insert assertions here
```

To prevent boilerplate and having to search replace your whole project when MDG changes ```_callbacks``` to ```__callbacks```.
This package was made, when using this package instead you can write:

```javascript
let templateInstance = TemplateTestHelpers.getMockTemplateInstance();
TemplateTestHelpers.getTemplateOnRenderedFunction(templateName).call(templateInstance);

//Insert assertions here
```

## Installing
[Atmosphere](https://atmospherejs.com/mdj/template-test-helpers)

Usually you'd put this package in the api.use of the onTest clause of a package you want to test.

Example:

```
  api.use([
    'ecmascript',
    'mike:mocha-package@0.5.8',
    'practicalmeteor:sinon',
    'practicalmeteor:chai',
    'underscore',
    'mdj:template-test-helpers@0.1.0'
  ]);
```





TODO: I will write more documentation soon. For now just check the code in the client directory.
