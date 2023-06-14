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
      <Nav data={props.store.getState().sideBarData} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile store={props.store} />} />
          <Route path='/dialogs?/:dialogId' element={<Dialogs store={props.store} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div >
  );
};

export default App;
