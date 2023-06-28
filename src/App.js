import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import Profile from './components/Content/Profile/Profile';
import Settings from './components/Content/Settings/Settings';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavContainer store={props.store} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile store={props.store} />} />
          <Route path='/dialogs?/:dialogId' element={<DialogsContainer store={props.store} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
};

export default App;
