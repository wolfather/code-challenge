angular.module('list', [])
	.directive('listcomponent', function() {
		return {
			restrict: 'A',
			required: '^viewprofile',
			templateUrl: 'template/listcomponent/list.template.html',
			scope: {
				month: '=',
				year: '=',
				name: '=',
				subname: '=',
				description: '='
			},
			link: function(scope, element, attributes, controller) {
				console.log('LIST COMPONENT', scope)
			}
		}
	})