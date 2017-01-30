angular.module('skillbar', [])
	.directive('skillbarcomponent', function() {
		return {
			restrict: 'A',
			required: '^viewprofile',
			templateUrl: 'template/skillcomponent/skills.template.html',
			scope: {
				label: '=',
				value: '='
			},
			link: function(scope, element, attributes, controller) {
				console.log('SKILL COMPONENT', scope)
			}
		}
	})