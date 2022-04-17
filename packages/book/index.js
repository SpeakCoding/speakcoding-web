import React from 'react';
import { createRoot } from 'react-dom/client';
import { checkLang } from './tools/system';
import App from './App';

checkLang();

const root = createRoot(document.getElementById('app'));

root.render(<App />);
