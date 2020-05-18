import React from 'react'
import PropTypes from 'prop-types'
import Widget from './widget'

const UiWorkbench = ({comps = {}}) => {
    const [selected, select] = React.useState(0)
    return <>
        <Widget
            compList={Object.keys(comps)}
            selected={selected}
            select={select}/>
        {selected}
    </>
}

UiWorkbench.propTypes = {
    comps: PropTypes.object,
}

export default UiWorkbench