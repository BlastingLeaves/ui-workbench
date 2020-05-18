import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {capitalize} from './helpers'

const MenuItem = ({name, selected, select}) =>
    <div
        className={cn(
            "p-2 hover:bg-ui-hover cursor-pointer",
            {"bg-ui-hover": selected}
        )}
        onClick={select}>
        {capitalize(name)}
    </div>

MenuItem.propTypes = {
    name: PropTypes.string,
    selected: PropTypes.bool,
    select: PropTypes.func
}

export default MenuItem