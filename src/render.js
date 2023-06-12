import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, sendMessage, updateMessageInput, updatePostInput } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
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