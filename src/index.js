import React from 'react'
import { render } from 'react-dom'
import App from './app'

function RenderApp(NextApp) {
    return (
        render(
                <NextApp />
            , document.querySelector('[data-js="app"]')
        )
    )
}

RenderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        RenderApp(NextApp)
    })
}
