import React, {useContext} from 'react';
import vanGo from '../../assets/vanGothPortiarit.svg'
import './style/App.scss';
import {SharingContext} from "../store/canvas/Canvas";

export const Home = () => {
  const renderingContext = useContext(SharingContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={vanGo}  alt="Vincent Willem van Gogh"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
};
