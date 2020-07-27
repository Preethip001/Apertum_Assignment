

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './src/App';



function bootstrap() {

    var content = document.querySelector('#app-content');
    ReactDOM.render(<App />, content);
}


document.addEventListener("DOMContentLoaded", bootstrap);