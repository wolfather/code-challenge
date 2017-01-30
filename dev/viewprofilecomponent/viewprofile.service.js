angular
	.module('viewprofileservice', [])
	.service('viewprofilesrv', ['$http', function($http) {
		this.get = $http
				.get('http://www.mocky.io/v2/587935ac260000420e1c3644')
	}])