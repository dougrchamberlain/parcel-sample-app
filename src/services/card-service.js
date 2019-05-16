class Character {

    constructor(name) {
        this.name = name;
    }

    revealTo(character){
                
        return null;
    }

}

class Dexter extends Character {
    constructor(name) {
        super(name, 'dexter');
    }
}

class Sinister extends Character {
    constructor(name) {
        super(name, 'sinister');
    }

}

class Duke extends Dexter {
    constructor() {
        super('The Duke');
        //win condition is blue wins
    }
            revealTo(character){
                if(character instanceof SupportManager){
                    console.log(JSON.stringify(this));
                    return super.revealTo(character);
                }
            }
}

class SupportManager extends Dexter {
    constructor() {
        super('Support Manager');
    }
}

class ChickenParm extends Dexter {
    constructor() {
        super('Chicken Parm');         
    }

    revealTo(character){
        if(character instanceof Duke || character instanceof Sinister){
            console.log(JSON.stringify(this));
            return super.revealTo(character);
        }
    }
}

class ScrumLord extends Dexter {
    constructor() {
        super('ScrumLord');        
    }
}

class Intellewater extends Dexter {
    constructor() {
        super('Intellewater');        
    }
}


class RemoteDevDerrick extends Dexter {
    constructor() {
        super('Remote Dev Derrick');        
    }
}

class RemoteDevDan extends Dexter {
    constructor() {
        super('Remote Dev Dan');        
    }
}


class Level3Dev extends Dexter {
    constructor() {
        super('Level III Dev');        
    }
}


class DexterBilly extends Dexter {
    constructor() {
        super('Billy');        
    }
}

class SinisterBilly extends Sinister {
    constructor() {
        super('Billy');        
    }
}




class VillageIdiot extends Dexter {
    //duke sees village idiot as sinister
    constructor() {
        super('Village Idiot');   
        //approve reject option
        //always reports sinister
        //win condition is blue wins on 5
    }

    revealTo(character){
        if(character instanceof Duke){
            console.log(JSON.stringify(this));      
            return super.revealTo(character);
        }
    }
}




class Nerlin extends Sinister {
    constructor() {
        super('Nerlin');
        //intern knows nerlin during nightphase
       //no one can see but intern
       //shows to other sinister spies and knows sinsister spies
    }

    revealTo(character){
        if(character instanceof Intern){
            console.log(JSON.stringify(this));      
            return super.revealTo(character);
        }
    }

}

class Intern extends Sinister {
    constructor() {
        super('Intern');
        //intern knows nerlin during nightphase
        //no one can see but nerlin
    }

    revealTo(character){
        if(character instanceof Nerlin || character instanceof Duke){
            console.log(JSON.stringify(this));      
            return super.revealTo(character);
        }
    }
}

export class Sniper extends Sinister {
    constructor() {
        super('The Sniper');
        //identifying duke Sinister Wins on Dexter Win
    }

}


export class DevSlayer extends Sinister {
    constructor() {
        super('DevSlayer');
        //shows to support manager
    }

    revealTo(character){
        if(character instanceof SupportManager){
            console.log(JSON.stringify(this));      
            return super.revealTo(character);
        }
    }

}

export class RemoteDevMarc extends Sinister {
    constructor() {
        super('Remote Dev Marc');    
    }

}

export class MaxLevelDev extends Sinister {
    constructor() {
        super('Max Level Dev');    
    }

}


export class Level2Dev extends Sinister {
    constructor() {
        super('Level II Dev');    
    }
 
}




    var characters = []


    //all sinister
    var nerlin = new Nerlin();
    var devSlayer = new DevSlayer();
    var sniper = new Sniper();
    var intern = new Intern();
    var villageIdiot = new VillageIdiot();

    characters.push(nerlin);
    characters.push(devSlayer);
    characters.push(sniper);
    characters.push(new RemoteDevMarc());
    characters.push(new MaxLevelDev());
    characters.push(new Level2Dev());
    characters.push(new SinisterBilly());
    characters.push(villageIdiot);
    characters.push(intern);

    //all dexter
    var duke = new Duke();
    var supportManager = new SupportManager();
    var chickenParm = new ChickenParm();
    var scrumLord = new ScrumLord();

    characters.push(duke);
    characters.push(supportManager);
    characters.push(chickenParm);
    characters.push(scrumLord);
    characters.push(new Intellewater());
    characters.push(new RemoteDevDerrick());
    characters.push(new RemoteDevDan());
    characters.push(new Level3Dev());
    characters.push(new DexterBilly());


    console.log('spies reveal')
    var sinister = characters.filter((c) => {        
        return c instanceof Sinister && !(c instanceof VillageIdiot || c instanceof Intern)
    } )
    
    sinister.forEach((c) =>{
        console.log(JSON.stringify(c));
    })

    console.log("reveal to intern");
    characters.forEach((character) => {       
        character.revealTo(intern);
    })


    console.log("reveal to nerlin");
    characters.forEach((character) => {
        character.revealTo(nerlin);
    })



    console.log("reveal to Support Manager");
    characters.forEach((character) => {
        character.revealTo(supportManager);
    })


    console.log('reveal to duke')
    var sinister = characters.filter((c) => {        
        return c instanceof Sinister && !(c instanceof Nerlin) || (c instanceof VillageIdiot || c instanceof Intern)
    } )
    
    sinister.forEach((c) =>{
        console.log(JSON.stringify(c));
    })
    

    



export default function () {
    var cards = [];
    var service = {};

    service.setup = function (cardsInGameType) {
        cardsInGameType.forEach(function (card) {
            cards.push(card);
        });
    }

    service.shuffle = function () {
        var currentIndex = cards.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = cards[currentIndex];
            cards[currentIndex] = cards[randomIndex];
            cards[randomIndex] = temporaryValue;
        }

        return cards;
    }

    return service;
}