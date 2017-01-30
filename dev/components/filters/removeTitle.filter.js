angular.module('removeTitle', [])
	.filter('filterTitle', function() {
		return function(input) {
			var _data = {};

			for(var i in input){ 
				//console.log('==>', i)
				if('title' !== i) {
					//console.log('i val', i)
					_data[i] = input[i]
				}
			}
			//console.log('data ', _data)
			return _data;
		}
	})