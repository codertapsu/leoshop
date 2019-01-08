import React, { Component } from 'react';
import './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo, faKey, faEnvelope, faArrowDown, faChevronDown, faMobile, faMobileAlt, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Guest from "./layouts/Guest";
library.add(faIgloo, faKey, faEnvelope, faArrowDown, faChevronDown, faMobile, faMobileAlt, faUser, faShoppingCart);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Guest />
            </div>
        );
    }
}

export default App;
