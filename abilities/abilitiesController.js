var app = angular.module("site");

app.controller("AbilitiesController",
['$scope','NgTableParams','AbilitiesService',
 function($scope, NgTableParams, AbilitiesService){

  this.priorityChange = priorityChange;
  this.selectAbility = selectAbility;
  this.getPriorityPts = getPriorityPts;

  this.abilityPriorities = getAbilityPriorities();
  function getAbilityPriorities(){
    return AbilitiesService.abilityPriorities;
  };

  this.abilitiesPage = getAbilitiesPage();
  function getAbilitiesPage(){
    return AbilitiesService.abilitiesPage;
  };

  this.selectedPriorities = getSelectedPriorities();
  function getSelectedPriorities(){
    return AbilitiesService.selectedPriorities;
  };

  this.alertness =  AbilitiesService.alertness;
  this.athletics = AbilitiesService.athletics;
  this.awareness = AbilitiesService.awareness;
  this.brawl = AbilitiesService.brawl;
  this.empathy = AbilitiesService.empathy;
  this.expression = AbilitiesService.expression;
  this.intimidation = AbilitiesService.intimidation;
  this.leadership = AbilitiesService.leadership;
  this.streetwise = AbilitiesService.streetwise;
  this.subterfuge = AbilitiesService.subterfuge;
  this.animalken = AbilitiesService.animalken;
  this.crafts = AbilitiesService.crafts;
  this.drive = AbilitiesService.drive;
  this.etiquette = AbilitiesService.etiquette;
  this.firearms = AbilitiesService.firearms;
  this.larceny = AbilitiesService.larceny;
  this.melee = AbilitiesService.melee;
  this.performance = AbilitiesService.performance;
  this.stealth = AbilitiesService.stealth;
  this.survival = AbilitiesService.survival;
  this.academics = AbilitiesService.academics;
  this.computer = AbilitiesService.computer;
  this.finance = AbilitiesService.finance;
  this.investigation = AbilitiesService.investigation;
  this.law = AbilitiesService.law;
  this.medicine = AbilitiesService.medicine;
  this.occult = AbilitiesService.occult;
  this.politics = AbilitiesService.politics;
  this.science = AbilitiesService.science;
  this.technology = AbilitiesService.technology;

  this.abilityCategories = getAbilityCategories();
  function getAbilityCategories(){
    return AbilitiesService.abilityCategories;
  };

  this.abCatRows = getAbCatRows();
  function getAbCatRows(){
    return AbilitiesService.abCatRows;
  };

  function getPriorityPts(index){
    return AbilitiesService.getPriorityPts(index);
  };

  function selectAbility(ability, index){
    AbilitiesService.selectAbility(ability, index);
  };

  function priorityChange(changedPriority, id, prevPriority){
    AbilitiesService.priorityChange(changedPriority, id, prevPriority);
  };

  var self = this;
  $scope.$on('loadCharacter', function(){
    self.selectedPriorities = getSelectedPriorities();
    self.alertness =  AbilitiesService.alertness;
    self.athletics = AbilitiesService.athletics;
    self.awareness = AbilitiesService.awareness;
    self.brawl = AbilitiesService.brawl;
    self.empathy = AbilitiesService.empathy;
    self.expression = AbilitiesService.expression;
    self.intimidation = AbilitiesService.intimidation;
    self.leadership = AbilitiesService.leadership;
    self.streetwise = AbilitiesService.streetwise;
    self.subterfuge = AbilitiesService.subterfuge;
    self.animalken = AbilitiesService.animalken;
    self.crafts = AbilitiesService.crafts;
    self.drive = AbilitiesService.drive;
    self.etiquette = AbilitiesService.etiquette;
    self.firearms = AbilitiesService.firearms;
    self.larceny = AbilitiesService.larceny;
    self.melee = AbilitiesService.melee;
    self.performance = AbilitiesService.performance;
    self.stealth = AbilitiesService.stealth;
    self.survival = AbilitiesService.survival;
    self.academics = AbilitiesService.academics;
    self.computer = AbilitiesService.computer;
    self.finance = AbilitiesService.finance;
    self.investigation = AbilitiesService.investigation;
    self.law = AbilitiesService.law;
    self.medicine = AbilitiesService.medicine;
    self.occult = AbilitiesService.occult;
    self.politics = AbilitiesService.politics;
    self.science = AbilitiesService.science;
    self.technology = AbilitiesService.technology;
    $scope.$apply();
  });


  this.dataSet = function(){
    var data = [];
    for(var i = 0; i < 10; i++){
      data.push({col1: this.abilityCategories[0].abilities[i],
                 col2: this.abilityCategories[1].abilities[i],
                 col3: this.abilityCategories[2].abilities[i] });
    }
    return data;
  }

  //TODO TODO TODO TODO TODO REMOVE NG TABLE STUFF TODO TODO TODO TODO TODO
  this.tableParams = new NgTableParams({count: 10},
                      { dataset: this.dataSet(), counts: [] });
}]);
