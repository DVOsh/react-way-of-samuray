import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Profile from './components/Content/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav data={props.data.sideBarData} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile data={props.data.profileData}
            addPost={props.addPost}
            updatePostInput={props.updatePostInput} />} />
          <Route path='/dialogs?/:dialogId' element={<Dialogs data={props.data.dialogsData}
            sendMessage={props.sendMessage}
            updateMessageInput={props.updateMessageInput} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
};

export default App;
