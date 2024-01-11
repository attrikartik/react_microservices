import faker from 'faker';


// goal of func is to take reference to html element
const mount = (el)=>{
    let products =''
    for(let i=0;i<5;i++){
       const name = faker.commerce.productName()
       products+=`<div>${name}</div>`
    }
    
    el.innerHTML=products
}
/** 
 *  we have to handle below 2 situations:-
 * 
 *  situation 1. we are running file in isolation we our ussing local index.html which
 *               has element with id #dev-products and render our app in that element
 * 
 *  situation 2. we are running app in development through container app, then
 *               there is no gurantee that an element with id #dev-products exists,then
 *               we don't want to try to immediately render the app 
 * 
 *  To handle above situations we create moount(), and putting all code inside it to render
 */

// below condition is to handle situation 1, first if-else checks for dev mode
if(process.env.NODE_ENV=='development'){
    /**
     *  this if checks whether app is running in isolation mode or not
     *  for that we have unique identifier in index.html file
     */
    const el= document.querySelector('#dev-products-isolation')

    // if el. is present then render
    if(el){
        mount(el)
    }
}
export {mount}// can be imported by container app for situation 2