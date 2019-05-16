import cardService from './service/card-service';

export default function(){
    var _players = [];
    var service = {}    
    function setup(users,config){    
        console.log(users);
        
        users.forEach(user => {
           _players.push(user);//create player objects
        });

        var cards = new cardService(config);
        assignCards();        
    }

    function assignCards(){        
        var c = cards.shuffle();
        _players.forEach((player,index) => {
            player.card = c[index];
        })
    }


    service.setup = setup;    

    return service;
}