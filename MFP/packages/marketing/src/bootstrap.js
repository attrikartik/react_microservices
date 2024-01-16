import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// mount func to start app

const mount = (el)=>{
   ReactDOM.render(<App/>,el)
}
/**
 *  if we are running in dev and isolation call mount() immediately else
 *  export mount() to be called from conatiner
 */

// check for development
if(process.env.NODE_ENV==='development'){
    const devRoot = document.querySelector('#_dev-root-marketing')

    // if el exists it means we are running marketing app in isolation
    if(devRoot){
        mount(devRoot)
    }
}

// export, we are runnig app through container
export {mount}