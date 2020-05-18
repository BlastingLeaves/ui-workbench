import React from 'react'

const MenuControl = ({menuOpened, menuOpen}) =>
    <div className="bg-ui-primary text-5xl text-ui-light hover:text-white cursor-pointer"
         style={{
             position: 'fixed',
             bottom: menuOpened ? -60 : 0,
             right: '5%',
             width: '50px',
             height: '60px',
             borderTopLeftRadius: 25,
             borderTopRightRadius: 25,
             boxShadow: "5px 5px 5px #9E9E9E",
             textAlign: 'center',
             transition: 'bottom .5s'
         }}
         onClick={menuOpen}>
        <svg className="w-5 h-5 fill-current mx-auto mt-4"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
    </div>

export default MenuControl