import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {capitalize} from './helpers'
import Favorite from './favorite'

const MenuItem = ({name, selected, select, fav, changeFav}) =>
    <div className={cn(
        "p-2 hover:bg-ui-hover cursor-pointer",
        "flex items-center justify-between",
        {"bg-ui-hover": selected})}
         onClick={select}>
        <div>
            {capitalize(name)}
        </div>
        <Favorite fav={fav} changeFav={changeFav}/>
    </div>

MenuItem.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.bool,
    select: PropTypes.func
}

export default MenuItem