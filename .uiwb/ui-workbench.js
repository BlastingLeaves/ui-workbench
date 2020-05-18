import React from 'react'
import PropTypes from 'prop-types'
import Widget from './widget'

const UiWorkbench = ({comps = {}}) => {
    const [selected, select] = React.useState(0)

    const currentComp = Object.values(comps)[selected]
    return <>
        <Widget
            compList={Object.keys(comps)}
            selected={selected}
            select={select}/>
        {React.createElement(currentComp)}
    </>
}

UiWorkbench.propTypes = {
    comps: PropTypes.object,
}

export default UiWorkbench