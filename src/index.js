import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Restaurants } from './pages/Restaurants';
import { restaurants } from "./constants/fixtures";

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <Restaurants restaurants={restaurants}/>
);
