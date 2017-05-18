angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

        $http.defaults.headers.common = {
            "application-id": "4257D567-62E0-857F-FFF3-CA6B403A8500",
            "secret-key": "CD0764F2-8112-8A96-FF46-87A9349A8C00"

        };

            return {

                getPokemons: function() {
                    return $http.get('https://api.backendless.com/v1/data/pokemon');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('https://api.backendless.com/v1/data/pokemon/' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                editPokemon: function(pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId
                    });
                }

            }

        }

    );
