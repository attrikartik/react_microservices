import {mount} from 'productsApp/ProductsIndex'
import {cartMount} from 'cartApp/CartShow'
console.log('container')

mount(document.querySelector('#dev-products'))
cartMount(document.querySelector('#dev-cart'))