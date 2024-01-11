import faker from 'faker'

// const cartText = `<div> You Have ${faker.random.number()} item in cart</div>`

// document.querySelector('#dev-cart').innerHTML=cartText

// goal of func is to take reference to html element
const cartMount = (el)=>{
    const cartText = `<div> You Have ${faker.random.number()} item in cart</div>`
    el.innerHTML=cartText
}

// check for dev mode
if(process.env.NODE_ENV=='development'){
    const el = document.querySelector('#dev-cart-isolation');
    // check for isolation run
    if(el){
        cartMount(el)
    }

}
export {cartMount}