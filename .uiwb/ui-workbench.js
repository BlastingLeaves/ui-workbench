import React from 'react'
import PropTypes from 'prop-types'
import Widget from './widget'

const UiWorkbench = ({comps = {}}) => {

    const keys = Object.keys(comps)

    let favorite = parseInt(localStorage.getItem('favorite'))
    if (!favorite || favorite > keys.length) favorite = 0

    const [selected, select] = React.useState(favorite)

    const currentComp = keys.length
        ? Object.values(comps)[selected]
        : <div/>

    return <>
        <Widget
            compList={keys}
            selected={selected}
            select={select}/>
        {React.createElement(currentComp)}
    </>
}

UiWorkbench.propTypes = {
    comps: PropTypes.object
}

export default UiWorkbench