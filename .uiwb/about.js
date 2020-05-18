import React from 'react'
import {useOutsideClick} from './helpers'
import UIWBLogo from './uiwb-logo'
import WindowClose from './window-close'
import Github from './github'

const About = ({aboutClose}) => {

    const ref = React.useRef()

    useOutsideClick(ref, aboutClose)

    return <div
        ref={ref}
        className="fixed m-bg-ui-primary text-ui-light w-full h-full sm:w-1/2 sm:h-64"
        style={{
            left: '50%',
            top: ' 50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '10px 10px 10px #888888',
            background: 'linear-gradient(90deg, #283344 0%, #344a6e 100%)'
        }}>
        <div className="flex justify-end p-4">
            <WindowClose close={aboutClose}/>
        </div>
        <div className="px-8 py-2">
            <div className="flex items-center">
                <UIWBLogo className="w-24 h-24 mr-4"/>
                <span className="text-2xl md:text-4xl">
                <strong>
                    UI WORKBENCH
                </strong>
            </span>
            </div>
            <p className="mt-8">
                Created especially for Alina
            </p>
            <a className="flex items-center cursor-pointer"
               href="https://github.com/vladblindu/ui-workbench">
                <Github className="w-6 h-6 fill-light mr-2"/>
                github repo
            </a>
        </div>
    </div>
}
export default About

