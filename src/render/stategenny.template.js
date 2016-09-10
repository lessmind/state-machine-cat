/* istanbul ignore else */
if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(['../lib/handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['stategenny.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.note || (depth0 != null ? depth0.note : depth0)) != null ? helper : alias2),(options={"name":"note","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.note) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ((stack1 = (helpers.quotifyState || (depth0 && depth0.quotifyState) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"quotifyState","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.activities || (depth0 != null ? depth0.activities : depth0)) != null ? helper : alias2),(options={"name":"activities","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.activities) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.statemachine || (depth0 != null ? depth0.statemachine : depth0)) != null ? helper : alias2),(options={"name":"statemachine","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.statemachine) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = helpers["if"].call(alias1,(data && data.last),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "# "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ": "
    + ((stack1 = (helpers.quotifyActivities || (depth0 && depth0.quotifyActivities) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"quotifyActivities","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " {\n"
    + ((stack1 = container.invokePartial(partials["stategenny.template.hbs"],depth0,{"name":"stategenny.template.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "}";
},"10":function(container,depth0,helpers,partials,data) {
    return ";";
},"12":function(container,depth0,helpers,partials,data) {
    return ",";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = "";

  stack1 = ((helper = (helper = helpers.note || (depth0 != null ? depth0.note : depth0)) != null ? helper : alias2),(options={"name":"note","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.note) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ((stack1 = (helpers.quotifyState || (depth0 && depth0.quotifyState) || alias2).call(alias1,(depth0 != null ? depth0.from : depth0),{"name":"quotifyState","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " => "
    + ((stack1 = (helpers.quotifyState || (depth0 && depth0.quotifyState) || alias2).call(alias1,(depth0 != null ? depth0.to : depth0),{"name":"quotifyState","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(options={"name":"label","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.label) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ";\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ": "
    + ((stack1 = (helpers.quotifyLabel || (depth0 && depth0.quotifyLabel) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"quotifyLabel","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, buffer = 
  ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.states : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
  stack1 = ((helper = (helper = helpers.transitions || (depth0 != null ? depth0.transitions : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"transitions","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!helpers.transitions) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});
});