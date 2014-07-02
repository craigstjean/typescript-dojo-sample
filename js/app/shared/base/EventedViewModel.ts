/// <reference path='../../_all.ts' />
module Sample.Base {
    window['dojo'].Evented = function () {

    };

    // NOTE: IntelliJ thinks dojo.Evented is an error because it is a class, but TypeScript seems fine with it.
    export class EventedViewModel extends BaseViewModel implements dojo.Evented {
        emit(type:any, event:any):any {

        }

        on(type:any, listener:any):any {

        }
    }
}

define([], function () {
    // no
});
