import {observable, computed, action} from 'mobx'; 

export default class Player {
    ingredientStore; 
    @observable money = 0;
    @observable currentTruck;  
    @observable trucks; 
}