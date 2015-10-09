Template-test-helpers
================================

Template helpers and callbacks can easily be unit tested. 
The only problem is for getting to them you have to rely on private properties.
For example to test a onRendered callbacks you'd have to use:

```javascript
let templateInstance = sinon.createStubInstance(Blaze.TemplateInstance);
templateInstance.$ = sinon.spy($);

Template[templateName]._callbacks.onRendered.call(templateInstance);

//Insert assertions here
```

To prevent boilerplate and from having to search replace your whole project when MDG changes ```_callbacks``` to ```__callbacks```.
This package was made, when using this package instead you can write:

```javascript
let templateInstance = TemplateTestHelpers.getMockTemplateInstance();
TemplateTestHelpers.getTemplateOnRenderedFunction(templateName).call(templateInstance);

//Insert assertions here
```
