/* jshint strict: true */
/* jslint vars: true */
/* jslint devel: true */
/* globals angular: false */
angular.module("viewprofile", 
	['viewprofileservice', 
	'removeTitle', 
	'list',
	'skillbar',
	'title', 
	'cardprofile'])
	.directive("viewprofilecomponent", 
		['viewprofilesrv', function(viewprofilesrv) {
			return {
				restrict: 'A',
				required: '^viewprofilecomponent',
				templateUrl: './template/viewprofilecomponent/viewprofile-template.html',
				controller: function($scope) {
					//console.log(viewprofilesrv.get.success)

					this.data = viewprofilesrv.get;
				},
				link: function(scope, element, attributes, controllers) {
					//console.log('from the link directive ', controllers.data)
					scope.dados = '';

					controllers.data
						.then(function(response) {
							//console.log(response.data)
							scope.dados = response.data

							console.log('dados ==>', scope.dados)

						})
						.catch(function(error) {
							console.log('error', error)
						})


				}
			}
		}]
	);