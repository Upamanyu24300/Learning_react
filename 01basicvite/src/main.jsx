import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const AnotherElement = (
    <a href='https://www.google.com' target='_blank'>visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'http://www.google.com', target: '_blank'},
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    <App />
)
