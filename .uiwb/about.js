import React from 'react'
import {useOutsideClick} from './helpers'
import UIWBLogo from './uiwb-logo'

const About = ({aboutClose}) => {

    const ref = React.useRef()

    useOutsideClick(ref, aboutClose)

    return <div
        ref={ref}
        className="p-8 bg-ui-primary text-ui-light"
        style={{
            position: 'fixed',
            width: '400px',
            height: '300px',
            left: 'calc(50% - 200px)',
            top: 'calc(50% - 150px)',
            boxShadow: '10px 10px 10px #888888',
            background: 'linear-gradient(90deg, #283344 0%, #344a6e 100%)'
        }}>
        <div className="flex items-center">
            <UIWBLogo className="w-12 h-12"/>
            <span className="text-2xl">UI WORKBENCH</span>
        </div>
        <p className="mt-8">
            Created especially for Alina
        </p>
    </div>
}
export default About

