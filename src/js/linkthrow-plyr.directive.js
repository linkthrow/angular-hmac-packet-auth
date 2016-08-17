(function() {
    'use strict';

    angular
        .module('linkthrow.angular-plyr', []);

})();

(function() {
    'use strict';
    angular.module('linkthrow.angular-plyr').directive('plyr', function () {
        return {
            template: '<div data-type="youtube" data-video-id="bTqVqk7FSmY"></div>',
            link: function(scope, element, attrs) {
                var player = plyr.setup(element, { debug: true });
            }
        }
    });
})();