angular.module('cardprofile', [])
	.directive('cardcomponent', function() {
		return {
			restrict: 'A',
			required: '^viewprofilecomponent',
			templateUrl: 'template/cardprofilecomponent/cardprofile.template.html',
			scope: {
				cardimage: '=',
				cardname: '=',
				cardprofession: '='
			},
			link: function(scope, element, attributes, controller) {
				console.log('CARDPROFILE COMPONENT', scope)
			}
		}
	})