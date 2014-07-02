/// <reference path='../../_all.ts' />
module Sample {
    export class SampleSingleton implements ISampleSingleton {
        constructor(
            /*
            dependencies go here, e.g.
            private request:dojo.request
             */) {
        }

        /* methods go here */
    }
}

define([
        /* dojo dependencies go here, e.g. dojo/request */
    ],
    function (/* dojo dependencies */) {
        return new Sample.SampleSingleton(/* dojo dependencies */);
    });
