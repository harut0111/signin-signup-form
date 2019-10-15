import './App.css';
import React, { Suspense } from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import LangNav from './components/LangNav';
import './i18n';

function App() {
  return (
    <div className="App">
      <div className='appDescription'>
        <p>App Description</p>
        <p>A simple signin signup react app which has an ability to detect</p>
        <ul>
          <li>browser default language</li>
          <li>switch the whole app language</li>
        </ul>
          <p>To implement mock request, it's used Redux /Redux Saga</p>
      </div>
      <Provider store={store} >
        <LangNav />
        <Suspense fallback={<h1>Loading</h1>}>
          <Main />
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;