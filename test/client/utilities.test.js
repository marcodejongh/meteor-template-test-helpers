describe('TemplateTestHelpers', function() {
  describe('Utilities', function() {
    const greenPathTemplateName = 'simpleGreenpath';
    const multipleHandlers = 'multipleHandlers';
    const multipleEventMaps = 'multipleEvents';

    function commonExceptionAssertions(fnName) {
      describe('When called with a templateName that doesn\'t exist', function() {
        it('Should throw an error', function() {
          expect(function() {
            TemplateTestHelpers[fnName]();
          }).to.throw;
        });
      });
    };

    function resultAssertion(fnName, templateName, handlerName) {
      let expectedReturnValue = TestTemplates[templateName][handlerName];

      describe('When called with a templateName that exists', function() {
        it('Should return the ' + handlerName + ' function', function() {
          expect(TemplateTestHelpers[fnName](templateName)).to.equal(expectedReturnValue);
        });
      });
    }

    function multipleAssertion(fnName, templateName, handlerName) {
      describe('When called on a template that has multiple created handlers', function() {
        it('Should return the first', function() {
          let handlers = TestTemplates[templateName][handlerName];
          expect(TemplateTestHelpers[fnName](templateName)).to.equal(_.first(handlers));
        });

        describe('Called with a position', function() {
          it('Should return the handler at the given position', function() {
            let position = 1;
            let handlers = TestTemplates[templateName][handlerName];
            expect(TemplateTestHelpers[fnName](templateName, position)).to.equal(handlers[position]);
          });

          describe('Given position doesnt exist', function() {
            it('Should throw an error', function() {
              let position = 100;
              expect(function() {
                TemplateTestHelpers[fnName](templateName, position);
              }).to.throw;
            });
          });
        });
      });
    }

    describe('#getTemplateOnCreatedFunction', function() {
      const fnName = 'getTemplateOnCreatedFunction';
      const handlerName = 'onCreated';

      commonExceptionAssertions(fnName);
      resultAssertion(fnName, greenPathTemplateName, handlerName);
      multipleAssertion(fnName, multipleHandlers, handlerName);
    });

    describe('#getTemplateOnRenderedFunction', function() {
      const fnName = 'getTemplateOnRenderedFunction';
      const handlerName = 'onRendered';

      commonExceptionAssertions(greenPathTemplateName);
      resultAssertion(fnName, greenPathTemplateName, handlerName);
    });

    describe('#getTemplateOnDestroyedFunction', function() {
      const fnName = 'getTemplateOnDestroyedFunction';
      const handlerName = 'onDestroyed';

      commonExceptionAssertions(greenPathTemplateName);
      resultAssertion(fnName, greenPathTemplateName, handlerName);
    });

    describe('#getTemplateHelper', function() {
      it('Should return the handler for the given template', function() {
        _.each(TestTemplates[greenPathTemplateName].helpers,
          (fn, name) => expect(TemplateTestHelpers.getTemplateHelper(greenPathTemplateName, name)).to.equal(fn));
      });
    });

    describe('#getTemplateEventHandler', function() {
      //Template['header'].__eventMaps
      it('Should return the events for the given event key', function() {
        let eventKey = 'click';
        expect(TemplateTestHelpers.getTemplateEventHandler(greenPathTemplateName, eventKey)).to.equal(TestTemplates[greenPathTemplateName].events[eventKey]);
      });

      describe('When template has multiple eventMaps', function() {
        it('Should return the events for the given event key at the given position', function() {
          let eventKey = 'click';
          let position = 1;
          expect(TemplateTestHelpers.getTemplateEventHandler(multipleEventMaps, eventKey, position)).to.equal(TestTemplates[multipleEventMaps].events[position][eventKey]);
        });
      });

    });
  });
});
