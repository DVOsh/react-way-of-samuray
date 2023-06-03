import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const data = {
  dialogsData:
  {
    dialogsMembers: [
      { id: 1, name: "Maks" },
      { id: 2, name: "Aleksey" },
      { id: 3, name: "Kirill" },
      { id: 4, name: "Artem" },
      { id: 5, name: "Sergey" },
      { id: 6, name: "Vlad" },
      { id: 7, name: "Andrew" },
      { id: 8, name: "Nikita" },
    ],
    messagesData: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Bye" },
    ],
  },
  postsData: [
    { id: 1, message: 'Hello', likesCount: 12 },
    { id: 2, message: 'Its my first post', likesCount: 11 },
  ],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
