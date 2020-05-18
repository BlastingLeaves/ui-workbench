import React from 'react'
import PropTypes from 'prop-types'
import WindowClose from './window-close'
import UIWBLogo from './uiwb-logo'
import {useOutsideClick} from './helpers'

const MenuWindow = ({menuOpened, menuClose, aboutOpen, children}) => {

    const ref = React.useRef()

    useOutsideClick(ref, () => menuOpened && menuClose())

    return <div ref={ref}
                className="fixed top-0 sm:w-1/2 md:w-1/3 w-full bg-ui-primary text-ui-light h-full"
                style={{
                    left: menuOpened ? 0 : '-110%',
                    transition: 'left .5s',
                    boxShadow: '10px 10px 10px #aaa'
                }}>
        <div style={{borderBottom: '1px solid'}}
            className="flex justify-between items-center p-4 border-ui-light">
            <div className="text-lg flex items-center">
                <UIWBLogo className="w-8 h-8 mr-2"/>
                UI WORKBENCH
            </div>
            <WindowClose close={menuClose}/>
        </div>
        {children}
        <div className="p-4 w-full flex items-center justify-between"
             style={{position: 'absolute', bottom: 0}}>
            <div>&copy; 2020 by bitbrother</div>
            <div
                className="w-6 text-center rounded-full border-ui-light border-2 hover:bg-ui-hover cursor-pointer"
                onClick={aboutOpen}>
                ?
            </div>
        </div>
    </div>
}

MenuWindow.propTypes = {
    menuOpened: PropTypes.bool,
    close: PropTypes.func,
    children: PropTypes.node
}

export default MenuWindow