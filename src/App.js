import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import Profile from './components/Content/Profile/Profile';
import Settings from './components/Content/Settings/Settings';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Content/Users/UsersContainer';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs?/:dialogId' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
};

export default App;
