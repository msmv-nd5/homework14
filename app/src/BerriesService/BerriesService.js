angular
    .module('PokemonApp')
    .factory('BerriesService', function($http) {
        $http.defaults.headers.common = {
            "application-id": "4257D567-62E0-857F-FFF3-CA6B403A8500",
            "secret-key": "CD0764F2-8112-8A96-FF46-87A9349A8C00"

        };
            return {

                getBerries: function() {
                    return $http.get('https://api.backendless.com/v1/data/berry');
                }

            }

        }

    );
