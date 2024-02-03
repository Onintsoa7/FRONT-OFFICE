import React, {useEffect} from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../animations'
function Preloader() {
    useEffect(() => {
        preLoaderAnim()
    }, [])

    return (
        <div className='preloader flex'>
            <div className='texts-container flex'>
                <span className='text-6xl'>
                    Votre&nbsp;
                </span>
                <span className='text-6xl'>
                    revendeur&nbsp;
                </span>
                <span className='text-6xl'>
                    préféré&nbsp;
                </span>
            </div>
        </div>
    )
}

export default Preloader