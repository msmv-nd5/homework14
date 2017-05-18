'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, PokemonsService, BerriesService, $q) {

    $scope.pokemonListLoaded = false;
    $scope.berriesListLoaded = false;

    // PokemonsService.getPokemons().then(function(response) {
    //     $scope.pokemons = response.data.results;
    // });
    //
    // BerriesService.getBerries().then(function(response) {
    //     $scope.berries = response.data.results;
    // });

   /* PokemonsService.getPokemons().then(function(response) {
        $scope.pokemons = response.data.data;
        $scope.pokemonListLoaded = true;
        return BerriesService.getBerries()
    }).then(function(response) {
        $scope.berriesListLoaded = true;
        $scope.berries = response.data.data;
    });
    */
        $q.all({
            obj1: PokemonsService.getPokemons(),
            obj2: BerriesService.getBerries()
        }).then(function(values){
            $scope.pokemons = values.obj1.data.data;
            $scope.berries = values.obj2.data.data;
            $scope.pokemonListLoaded = true;
            $scope.berriesListLoaded = true;

        });


});
