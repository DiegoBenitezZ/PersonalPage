import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLayerGroup, faUserGraduate, faBriefcase, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

library.add({faLayerGroup, faUserGraduate, faBriefcase, faPeopleGroup})

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
