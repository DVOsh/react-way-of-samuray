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
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' Component={() => <Profile data={props.data.profileData} />} />
          <Route path='/dialogs' Component={() => <Dialogs data={props.data.dialogsData} />} />
          <Route path='/news' Component={() => <News />} />
          <Route path='/music' Component={() => <Music />} />
          <Route path='/settings' Component={() => <Settings />} />
        </Routes>
      </div>
    </div >
  );
};

export default App;
