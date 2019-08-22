import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {IntlProvider} from 'react-intl';

ReactDOM.render(<IntlProvider locale="pt"> <App /> </IntlProvider>, document.getElementById('root'));