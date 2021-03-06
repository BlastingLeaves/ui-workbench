import React from 'react'
import PropTypes from 'prop-types'
import MenuWindow from './menu-window'
import MenuItem from './menu-item'
import MenuControl from './menu-control'
import About from './about'

const Widget = ({compList, selected, select}) => {

    const [menuOpened, setMenu] = React.useState(false)
    const [aboutOpened, setAbout] = React.useState(false)
    const [fav, changeFav] = React.useState(selected)

    const menuOpen = () => {
        setMenu(true)
    }
    const menuClose = () => {
        setMenu(false)
    }

    const aboutOpen = () => {
        setMenu(false)
        setAbout(true)
    }

    const aboutClose = () => {
        setAbout(false)
    }

    return <>
        <MenuWindow
            menuOpened={menuOpened}
            menuClose={menuClose}
            aboutOpen={aboutOpen}>
            <div className="p-4">
                {compList.map((comp, idx) =>
                    <MenuItem
                        key={idx}
                        name={comp}
                        selected={selected === idx}
                        fav={fav === idx}
                        select={() => {
                            select(idx)
                            menuClose()
                        }}
                        changeFav={() =>{
                            changeFav(idx)
                            localStorage.setItem('favorite', idx)
                        }}/>
                )}
            </div>
        </MenuWindow>
        <MenuControl menuOpened={menuOpened} menuOpen={menuOpen}/>
        {aboutOpened && <About aboutClose={aboutClose}/> }
    </>
}

Widget.propTypes = {
    compList: PropTypes.array,
    selected: PropTypes.number,
    select: PropTypes.func
}

export default Widget