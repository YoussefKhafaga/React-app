import React from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import App from './Components/app';

const root = document.getElementById('root');
createRoot(root).render(<App/>);