import React from 'react'
import ReactDOM from 'react-dom'
import './.uiwb/css/styles.css'
import UiWorkbench from './.uiwb/ui-workbench'
import * as comps from './src/collector/*'


const root = document.getElementById('root')

ReactDOM.render(<UiWorkbench comps={comps}/>, root)