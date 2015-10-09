/* global TemplateTestHelpers:false, sinon:false*/

function getTemplate(templateName) {
  let template = Template[templateName];
  if (!template) {
    throw new Meteor.Error('Error: Template ' + templateName + ' not found');
  }
  return template;
}

function getTemplateCallback(templateName, which, position=0) {
  let callbacks = getTemplate(templateName)._callbacks[which];

  if (!callbacks[position]) {
    throw new Meteor.Error('Error: No handler found at position ' + position);
  }

  return callbacks[position];
}

/**
 * Returns the onCreated function of the given templateName
 *
 * @param {String} templateName the name of the template to get the onCreated function for
 * @param {Number} [position=0] if multiple onCreated functions exists the position of the to be returned onCreated
 * @returns {Function}
 */
TemplateTestHelpers.getTemplateOnCreatedFunction = function(templateName, position=0) {
  return getTemplateCallback(templateName, 'created', position);
};

/**
 * Returns the onRendered function of the given templateName
 *
 * @param {String} templateName the name of the template to get the onRendered function for
 * @param {Number} [position=0] if multiple onRendered functions exists the position of the to be returned onRendered
 * @returns {Function}
 */
TemplateTestHelpers.getTemplateOnRenderedFunction = function(templateName, position=0) {
  return getTemplateCallback(templateName, 'rendered', position);
};

/**
 * Returns the onDestroyed function of the given templateName
 *
 * @param {String} templateName the name of the template to get the onDestroyed function for
 * @param {Number} [position=0] if multiple onDestroyed functions exists the position of the to be returned onDestroyed
 * @returns {Function}
 */
TemplateTestHelpers.getTemplateOnDestroyedFunction = function(templateName, position=0) {
  return getTemplateCallback(templateName, 'destroyed', position);
};

/**
 * Returns the given helpername for the given template name
 *
 * @param {String} templateName the name of the template for which to return the helper
 * @param {String} helperName the name of the helper to return
 * @returns {Function} the helper
 */
TemplateTestHelpers.getTemplateHelper = function(templateName, helperName) {
  return getTemplate(templateName).__helpers.get(helperName);
};

/**
 * Returns a blaze templateInstance with all methods stubbed
 *
 * @returns {Object}
 */
TemplateTestHelpers.getMockTemplateInstance = function() {
  let templateInstance = sinon.createStubInstance(Blaze.TemplateInstance);
  templateInstance.$ = sinon.spy($);

  return templateInstance;
};
