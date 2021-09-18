import React from 'react';
import { render } from 'react-dom';
import { checkLang } from './tools/system';
import App from './App';

checkLang();

render(<App />, document.getElementById('app'));
