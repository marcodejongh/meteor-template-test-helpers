/* global TemplateTestHelpers:false*/

const isTemplateRenderedDefaults = {
  maxTries: 6,
  interval: 250
};

/**
 * Polls the given templateInstance and executes the given assertionFn when templateInstance.isRendered=true
 *
 * @param {Blaze.TemplateInstance} templateInstance
 * @param {Function} assertionFn function containing the assertions
 * @param {Object} [options={}]
 * @param {Number} [options.maxTries=6] amount of tries before giving up
 */
TemplateTestHelpers.isTemplateRendered = function(templateInstance, assertionFn, options={}) {
  _.defaults(options, isTemplateRenderedDefaults);

  let tryCount = 0;
  let interval = Meteor.setInterval(function() {
    if (templateInstance.isRendered || tryCount === options.maxTries) {
      Meteor.clearInterval(interval);
      assertionFn(templateInstance);
    }
    tryCount ++;
  }, options.interval);
};
