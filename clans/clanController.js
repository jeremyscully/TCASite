var app = angular.module("site");

app.controller("ClanController",
 ['$scope', 'UglyService', 'TermIndexService', 'ClanService', 'DisciplineService',
 function($scope, UglyService, TermIndexService, ClanService, DisciplineService) {

    this.clanPage = "./clans/clan.html";
    this.filterClans = filterClans;

    this.clanFilters = getClanFilters();
    function getClanFilters(){
      return ClanService.clanFilters;
    }

    this.setClan = setClan;
    function setClan(charClan){
      ClanService.selectedClan = charClan;
    }

    this.clanList = getClanList();
    function getClanList(){
      return ClanService.clanList;
    }

    this.selectedClan = getSelectedClan();
    function getSelectedClan(){
      return ClanService.selectedClan;
    }

    this.selectedClanFilter = getSelectedClanFilter();
    function getSelectedClanFilter(){
      return ClanService.selectedClanFilter;
    }

    this.filteredClanList = getFilteredClanList();
    function getFilteredClanList(){
      return ClanService.filteredClanList;
    }

    function filterClans(filter){
      this.filteredClanList = ClanService.filterClans(filter);
      this.selectedClan = this.filteredClanList[0];
    }

    //Will change font size in clan selection box based on length.
    $scope.setUClan = function(clan) {
      // var textLength = $('#clanSelect option:selected').text().length;
      // if(textLength > 19)
      //   $('#clanSelect').css('font-size', '86%');
      // else
      //   $('#clanSelect').css('font-size', '100%');

      UglyService.setClan(clan);
      DisciplineService.setClan(clan);
    }

    $scope.setTerm = function(term) {
      TermIndexService.setTerm(term);
    }

    var self = this;
    $scope.$on('loadCharacter', function(){
      self.selectedClan = ClanService.selectedClan;
      $scope.$apply();
    });

  }
]);
