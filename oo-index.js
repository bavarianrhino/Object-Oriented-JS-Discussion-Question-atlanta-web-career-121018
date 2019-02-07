document.addEventListener('DOMContentLoaded', createUnicorn)

function createUnicorn() {
  const brian = new Unicorn('Brian', 'Magician')
}

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000

    this.eventArea = document.getElementById('event_area')
    this.imageArea = document.getElementById('image_area')

    this.restartButton = document.getElementById('restart').addEventListener("click",()=> this.restart())
    this.attackButton = document.getElementById('attack').addEventListener("click",()=> this.attack())
    this.defendButton = document.getElementById('defend').addEventListener("click",()=> this.defend())
    this.healButton = document.getElementById('heal').addEventListener("click",()=> this.heal())
    this.breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> this.breakdance())
    this.eatButton = document.getElementById('eat').addEventListener("click",()=> this.eatCronut())

  }

  restart() {
    this.eventArea.innerHTML = ""
    const div = document.createElement("div");
    div.appendChild(document.createTextNode('Out on the street, ready to go!'))
    this.eventArea.prepend(div);
    this.imageArea.className = 'new'
  }

  attack() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'attack';
  }

  defend() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'defend';
  }

  heal() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'heal';
  }
  breakdance() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    this.eventArea.prepend(div);
    this.imageArea.className = 'breakdance';
  }
  eatCronut() {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    this.eventArea.prepend(div);
    this.imageArea.className = 'eat';
  }

}

// Vanessa's Solution//
// const eventArea = document.getElementById('event_area')
// const imageArea = document.getElementById('image_area')
// const restartButton = document.getElementById('restart').addEventListener("click",()=> unicorn.restart())
// const attackButton = document.getElementById('attack').addEventListener("click",()=> unicorn.attack())
// const defendButton = document.getElementById('defend').addEventListener("click",()=> unicorn.defend())
// const healButton = document.getElementById('heal').addEventListener("click",()=> unicorn.heal())
// const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> unicorn.breakdance())
// const eatButton = document.getElementById('eat').addEventListener("click",()=> unicorn.eatCronut())
//
//
//
// class Unicorn {
//   constructor(name, occupation) {
//     this.name = name;
//     this.occupation = occupation;
//     // this.name = "Johnny";
//     // this.occupation = "Freelance DJ";
//     this.health = 1000
//   }
//
//   restart() {
//     while (eventArea.hasChildNodes()) {
//         eventArea.removeChild(eventArea.lastChild);
//     }
//     var div = document.createElement("div");
//     div.appendChild(document.createTextNode("Out on the street, ready to go!"));
//     eventArea.prepend(div);
//     imageArea.className = 'new';
//   }
//
//   attack() {
//     var div = document.createElement("div");
//     div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
//     eventArea.prepend(div);
//     imageArea.className = 'attack';
//   }
//
//   defend() {
//     var div = document.createElement("div");
//     div.appendChild(document.createTextNode("You put sunglasses on."));
//     eventArea.prepend(div);
//     imageArea.className = 'defend';
//   }
//
//   heal() {
//     var div = document.createElement("div");
//     div.appendChild(document.createTextNode("You feel refreshed after yoga."));
//     eventArea.prepend(div);
//     imageArea.className = 'heal';
//   }
//
//   breakdance() {
//     var div = document.createElement("div");
//     div.appendChild(document.createTextNode("It's really spinning class"));
//     eventArea.prepend(div);
//     imageArea.className = 'breakdance';
//   }
//
//   eatCronut() {
//     var div = document.createElement("div");
//     div.appendChild(document.createTextNode("You've gained 1000 health points."));
//     eventArea.prepend(div);
//     imageArea.className = 'eat';
//   }
//
// }
//
// var unicorn = new Unicorn()
