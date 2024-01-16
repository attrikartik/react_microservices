import React from 'react'
import { useRef, useEffect } from 'react'
import {mount} from 'marketingApp/Marketing'

const Marketing = () => {
    const ref = useRef(null)

    useEffect(()=>{
        mount(ref.current)
    },[])
    return (
        <div ref={ref}/>
    )
}

export default Marketing