/// <reference path='../../../_all.ts' />
module Sample.Home.ViewModels {
    export class HomeViewModel extends Sample.Base.EventedViewModel implements IHomeViewModel {
        private templateString:string;
        private res:any;

        public postCreate() {
            // Setup events, etc. here
        }
    }
}

define([
        'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
        /* inject other dependencies from dojo, e.g. on, request, etc. here */
        'dojo/text!../templates/HomeTemplate.html',
        'dojo/i18n!app/shared/nls/resources'
    ],
    function (dojoDeclare, _WidgetBase, _TemplatedMixin, template, res) {
        return dojoDeclare([_WidgetBase, _TemplatedMixin], Sample.Home.ViewModels.HomeViewModel.getPrototype({
            templateString: template,
            res: res
            /*
             declare other dependencies from dojo, e.g. on, request, etc. go here

             on: on,
             request: request
             */
        }));
    });
