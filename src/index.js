import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import RecipeListSlice from './Store/RecipeListSlice';
import SaveData from './Store/SaveData';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



const myStore = configureStore({
  reducer: {
    RecipeList: RecipeListSlice,
    Login:SaveData,
  
}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={myStore}>
      <BrowserRouter>
      
    <App />
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
