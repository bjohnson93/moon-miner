//alias out doc elements to variables

const cheeseTotalElem = document.getElementById('cheese-total')

const pickaxePriceElem = document.getElementById('pick-axe-price')
const pickaxeTotalElem = document.getElementById('pick-axe-total')
const pickaxeMultiplierElem = document.getElementById('pick-axe-multiplier')

const hammerPriceElem = document.getElementById('hammer-price')
const hammerTotalElem = document.getElementById('hammer-total')
const hammerMultiplierElem = document.getElementById('hammer-multiplier')

const catPriceElem = document.getElementById('cat-price')
const catTotalElem = document.getElementById('cat-total')
const catMultiplierElem = document.getElementById('hungry-cat-multiplier')

const puppyPriceElem = document.getElementById('puppy-price')
const puppyTotalElem = document.getElementById('puppy-total')
const puppyMultiplierElem = document.getElementById('hungry-puppy-multiplier')

const clickTotalElem = document.getElementById('click-upgrades-total')

const autoTotalElem = document.getElementById('auto-upgrades-total')


//single responsibility function to update the DOM
function update() {
  // @ts-ignore
  cheeseTotalElem.innerText = cheese

  // @ts-ignore
  pickaxePriceElem.innerText = clickUpgrades[0].price
  // @ts-ignore
  pickaxeTotalElem.innerText = clickUpgrades[0].quantity
  // @ts-ignore
  pickaxeMultiplierElem.innerText = clickUpgrades[0].multiplier

  // @ts-ignore
  hammerPriceElem.innerText = clickUpgrades[1].price
  // @ts-ignore
  hammerTotalElem.innerText = clickUpgrades[1].quantity
  // @ts-ignore
  hammerMultiplierElem.innerText = clickUpgrades[1].multiplier

  // @ts-ignore
  catPriceElem.innerText = automaticUpgrades[0].price
  // @ts-ignore
  catTotalElem.innerText = automaticUpgrades[0].quantity
  // @ts-ignore
  catMultiplierElem.innerText = automaticUpgrades[0].multiplier

  // @ts-ignore
  puppyPriceElem.innerText = automaticUpgrades[1].price
  // @ts-ignore
  puppyTotalElem.innerText = automaticUpgrades[1].quantity
  // @ts-ignore
  puppyMultiplierElem.innerText = automaticUpgrades[1].multiplier

  drawTotalAutoUpgrades()
}

//SECTION - variables
let cheese = 500;

//upgrades

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'hammer',
    price: 200,
    quantity: 0,
    multiplier: 2
  }
];

let automaticUpgrades = [
  {
    name: 'cat',
    price: 600,
    quantity: 0,
    multiplier: 20
  },
  {
    name: 'puppy',
    price: 950,
    quantity: 0,
    multiplier: 70
  }
];


//SECTION - functions

function mine() {

  //TODO - ✅increase cheese count by 1
  cheese++
  // console.log('cheese is at ', cheese);
  //TODO - ✅have the function alert(cheese)
  //✅ window.alert('Yay! Your cheese total is up 🧀')
  clickUpgrades.forEach(c => {
    // debugger
    if (c.quantity >= 1) {
      let addition = c.multiplier * c.quantity
      cheese += addition
      // cheese += c.quantity
      // cheese += ((axe.quantity) * (axe.multiplier))
      // console.log('this is how much my cheese is decreasing', c.multiplier);
    }
  })
  drawTotalClickUpgrades()
  update()
}

function mineAutoMagically() {
  automaticUpgrades.forEach(a => {
    if (a.quantity >= 1) {
      // console.log('this is your quantity', a.quantity);
      cheese += (a.multiplier * a.quantity)
      console.log(a.multiplier);
    }
    update()
  })
}


// function mineWithPickAxe() {
//   //TODO  ,determine pickaxe quantity, if 1+, increment cheese by one click by amount of pickaxes in quantity
//   let axe = clickUpgrades[0]
//   console.log(axe);
//   if (axe.quantity > 0) {
//     (cheese++) + ((axe.quantity) * (axe.multiplier))
//     // (axe.multiplier += 1)
//     // axe.multiplier * (cheese++)
//     console.log('you have ', axe.quantity, ' pick axes in your possession')

//   }
//   update()
// }

// function buyPickAxe() {
//   //TODO - ✅check to see if user has resources to purchase, if they do.. 
//   let axes = clickUpgrades.find(click => click.name == 'pickaxe')

//   if (cheese >= 100) {
//     //TODO - ✅increase pickaxe purchase quantity
//     axes.quantity++
//     // console.log('your axe quantity is at ', axes);
//     //TODO - -✅decrease cheese resources by the price of the item
//     cheese -= axes.price
//     // console.log('your cheese price is at ', cheese);
//     //TODO - increase price of axe after axe is purchased
//     axes.price += 50
//     axes.multiplier++
//     console.log(axes);
//   } else window.alert("You don't have enough cheese!")
//   update()
// }

function buyClickUpgrade(clickUpgradeName) {
  let click = clickUpgrades.find(c => c.name == clickUpgradeName)

  // @ts-ignore
  if (cheese >= click.price) {
    // @ts-ignore
    click.quantity++
    // @ts-ignore
    cheese -= click.price
    // @ts-ignore
    click.price += 50
    // @ts-ignore
    // click.multiplier++
  } else window.alert("You don't have enough cheese bud!")

  drawTotalClickUpgrades()
  update()
}

function buyAutoUpgrade(autoUpgradeName) {
  let auto = automaticUpgrades.find(a => a.name == autoUpgradeName)

  // @ts-ignore
  if (cheese >= auto.price) {
    console.log('you have enough cheese for a helpful animal');
    // @ts-ignore
    auto.quantity++
    // @ts-ignore
    cheese -= auto.price
    // @ts-ignore
    auto.price += 100
    update()
    // cheese * auto.multiplier++
  } else window.alert('You need more cheese for a puppy or a cat! ')
  drawTotalAutoUpgrades()
  update()
}

function drawTotalClickUpgrades() {

  let upgrades = 0

  clickUpgrades.forEach(c => {
    upgrades += (c.quantity * c.multiplier)
    console.log(upgrades);
  })
  // @ts-ignore
  clickTotalElem.innerHTML = upgrades
}

function drawTotalAutoUpgrades() {
  let upgrades = 0

  automaticUpgrades.forEach(a => {
    upgrades += (a.quantity * a.multiplier)
  })

  // @ts-ignore
  autoTotalElem.innerHTML = upgrades
}

setInterval(mineAutoMagically, 2000)
//!SECTION invoke functions
update()
