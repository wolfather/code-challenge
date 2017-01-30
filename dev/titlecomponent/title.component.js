angular.module('title', ['stringtoclass'])
	.directive('titlecomponent', function() {
		return {
			restrict: 'A',
			required: '^viewprofile',
			templateUrl: 'template/titlecomponent/title.template.html',
			scope: {
				titletext: '='
			},
			link: function(scope, element, attributes, controller) {
				console.log('TITLE COMPONENT', scope)
			}
		}
	})