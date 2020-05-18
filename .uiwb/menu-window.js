import React from 'react'
import PropTypes from 'prop-types'
import WindowClose from './window-close'
import UIWBLogo from './uiwb-logo'
import {useOutsideClick} from './helpers'

const MenuWindow = ({menuOpened, menuClose, aboutOpen, children}) => {

    const ref = React.useRef()

    useOutsideClick(ref, () => menuOpened && menuClose())

    return <div ref={ref}
                className="sm:w-1/2 md:w-1/3 w-full bg-ui-primary text-ui-light "
                style={{
                    position: 'fixed',
                    top: 0,
                    left: menuOpened ? 0 : '-100%',
                    height: '100%',
                    boxShadow: "5px 5px 5px #9E9E9E",
                    transition: 'left .5s'
                }}>
        <div className="flex justify-between items-center p-4">
            <div className="text-lg flex items-center">
                <UIWBLogo className="w-6 h-6 mr-2"/>
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