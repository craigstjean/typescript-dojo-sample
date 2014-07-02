/// <reference path='../_all.ts' />
define([
        'dojo/router', 'dojo/topic',
        './topics', './routes',
        './RouteBootstrap'
    ],
    function (router, topic, topics, routes, RouteBootstrap) {
        var routeToRoot = true;
        topic.subscribe(topics.route.taken, () => {
            routeToRoot = false;
        });

        topic.subscribe(topics.route.startupComplete, () => {
            if (routeToRoot) {
                router.go(routes.root);
            }
        });

        new RouteBootstrap().startup();
    });
