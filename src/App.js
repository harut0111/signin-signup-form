import React, { Suspense } from 'react';
import './App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { store } from './redux/store/index';
import LangNav from './components/LangNav';
import './i18n';

function App() {
  return (
    <div className="App">
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