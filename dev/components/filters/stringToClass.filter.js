angular.module('stringtoclass', [])
	.filter('filterstringtoclass', function() {
		return function(input) {
			var _string = input;
			//console.warn('', _string)
			//return input.replace(/\s/g, '-')
		}
	})