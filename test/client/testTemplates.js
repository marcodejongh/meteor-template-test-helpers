/*global TestTemplates:true*/

TestTemplates = {};

TestTemplates.simpleGreenpath = {};

TestTemplates.simpleGreenpath.onCreated = function() {
  return 'foo';
};

TestTemplates.simpleGreenpath.onRendered = function() {
  return 'bar';
};

TestTemplates.simpleGreenpath.onDestroyed = function() {
  return 'foobar';
};

TestTemplates.simpleGreenpath.helpers = {
  'foo': function() {
    return 'bar';
  },
  'bar': function() {
    return 'foo';
  },
  'helloworld': function() {
    return 'goodbye cruel world!';
  }
};

TestTemplates.simpleGreenpath.events = {
  'click': function() {
    return 'foo';
  }
};

TestTemplates.multipleHandlers = {};

TestTemplates.multipleHandlers.onCreated = [
  function() {
    return 'foo';
  },
  function() {
    return 'bar';
  },
  function() {
    return 'foobar';
  }
];

TestTemplates.multipleEvents = {};

TestTemplates.multipleEvents.events = [{
  'click': function() {
    return 'foo';
  }
},{
  'click': function() {
    return 'bar';
  }
}];

function addHandler(template, which, handler) {
  template[which](handler);
}

function buildHandlers(object, template, which) {
  if (!which) {
    return;
  }

  let handlers = object[which];

  if (_.isArray(handlers)) {
    _.each(handlers, handler => addHandler(template, which, handler));
  } else {
    addHandler(template, which, handlers);
  }
}

function addEvents(eventsObject, template) {
  template.events(eventsObject);
}

function buildEvents(events, template) {
  if (_.isArray(events)) {
    _.each(events, eventObject => addEvents(eventObject, template));
  } else {
    addEvents(events, template);
  }
}

function buildTemplateFromObject(templateObject, templateName) {
  let object = templateObject;
  let template = Template[templateName];

  buildHandlers(object, template, 'onCreated');
  buildHandlers(object, template, 'onRendered');
  buildHandlers(object, template, 'onDestroyed');

  if (object.helpers) {
    template.helpers(object.helpers);
  }

  if (object.events) {
    buildEvents(object.events, template);
  }
}

function buildTestTemplates(templates) {
  _.each(templates, (templateObject, templateName) => buildTemplateFromObject(templateObject, templateName));
}

buildTestTemplates(TestTemplates);
