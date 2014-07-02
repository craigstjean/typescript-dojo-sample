/// <reference path='../../_all.ts' />
define([
        'dojo/router', 'dojo/topic',
        'app/shared/topics', 'app/shared/routes',
        './viewModels/HomeViewModel'
    ],
    function (router, topic, topics, routes, HomeViewModel) {
        var display = function () {
            // Probably don't want to access the DOM here, but we will for sake of the sample
            // A Stateful model that shared/bootstrap watches can be useful as an alternative
            document.getElementById('contentWrapper').innerHTML = '';
            document.getElementById('contentWrapper').appendChild(new HomeViewModel().domNode);

            topic.publish(topics.route.taken, routes.nodeList);
        };

        router.register(routes.root, display);
    });
