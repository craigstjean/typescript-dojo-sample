/// <reference path='../../_all.ts' />
var __extends = function (d, b) {
    if (d && b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }

        __.prototype = b.prototype;
        d.prototype = new __();
    }
};

module Sample.Base {
    window['dojo'] = { };
    window['dijit'] = {
        _WidgetBase: function () {

        }
    };

    export class BaseViewModel extends dijit._WidgetBase {
        public static getPrototype(deps:any) {
            for (var i in deps) {
                this.prototype[i] = deps[i];
            }

            return this.prototype;
        }
    }
}

define([], function () {

});
