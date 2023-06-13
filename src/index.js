import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import state, { addPost, sendMessage, subscribe, updateMessageInput, updatePostInput } from './redux/state';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App data={state}
					addPost={addPost}
					updatePostInput={updatePostInput}
					sendMessage={sendMessage}
					updateMessageInput={updateMessageInput} />
			</BrowserRouter>
		</React.StrictMode>
	);
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();