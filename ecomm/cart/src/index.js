import faker from 'faker'

const cartText = `<div> You Have ${faker.random.number()} item in cart</div>`

document.querySelector('#dev-cart').innerHTML=cartText