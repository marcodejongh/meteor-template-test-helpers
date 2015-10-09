

<!-- Start client/integration-test-helpers.js -->

global TemplateTestHelpers:false

## isTemplateRendered(templateInstance, assertionFn, [options={}], [options.maxTries=6])

Polls the given templateInstance and executes the given assertionFn when templateInstance.isRendered=true

### Params: 

* **Blaze.TemplateInstance** *templateInstance* 
* **Function** *assertionFn* function containing the assertions
* **Object** *[options={}]* 
* **Number** *[options.maxTries=6]* amount of tries before giving up

<!-- End client/integration-test-helpers.js -->

<!-- Start client/namespace.js -->

global TemplateTestHelpers:true

<!-- End client/namespace.js -->

<!-- Start client/utilities.js -->

## getTemplate()

global TemplateTestHelpers:false, sinon:false

## getTemplateOnCreatedFunction(templateName, [position=0])

Returns the onCreated function of the given templateName

### Params: 

* **String** *templateName* the name of the template to get the onCreated function for
* **Number** *[position=0]* if multiple onCreated functions exists the position of the to be returned onCreated

## getTemplateOnRenderedFunction(templateName, [position=0])

Returns the onRendered function of the given templateName

### Params: 

* **String** *templateName* the name of the template to get the onRendered function for
* **Number** *[position=0]* if multiple onRendered functions exists the position of the to be returned onRendered

## getTemplateOnDestroyedFunction(templateName, [position=0])

Returns the onDestroyed function of the given templateName

### Params: 

* **String** *templateName* the name of the template to get the onDestroyed function for
* **Number** *[position=0]* if multiple onDestroyed functions exists the position of the to be returned onDestroyed

## getTemplateHelper(templateName, helperName)

Returns the given helpername for the given template name

### Params: 

* **String** *templateName* the name of the template for which to return the helper
* **String** *helperName* the name of the helper to return

## getMockTemplateInstance()

Returns a blaze templateInstance with all methods stubbed

Extend default Template.prototype.events so we can keep the raw version of the eventHandler

## getTemplateEventHandler(templateName, eventType, [position=0])

Returns the raw event handler as passed to Template.events.

### Params: 

* **String** *templateName* the name of the template for which to return the eventHandler
* **String** *eventType* selector of the handler to pull out
* **Number** *[position=0]* when multiple calls to Template.events where made the position of that call (0=first call, 1=second call etc)

<!-- End client/utilities.js -->

