/// <reference path='../_all.ts' />
define([
        'dojo/_base/declare', 'dojo/router', 'dojo/topic',
        './topics'
    ],
    function (dojoDeclare, router, topic, topics) {
        return dojoDeclare([], {
            startup: function () {
                require([
                    'app/areas/home/bootstrap'
                ], function () {
                    router.startup();
                    topic.publish(topics.route.startupComplete, true);
                });
            }
        });
    });
