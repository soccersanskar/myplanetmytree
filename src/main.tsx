import React from 'react'
import ReactDOM from 'react-dom/client'
import reactToWebComponent from "react-to-webcomponent"
import App from './App.tsx'
import './index.css'

// Convert the App to a Web Component
const MyPlanetApp = reactToWebComponent(App, React, ReactDOM);

// Register the element with a hyphenated name
customElements.define('my-planet-app', MyPlanetApp);
