import './App.css';
import Dialogs from './components/Content/Dialogs/Dialogs';
import Profile from './components/Content/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div >
  );
};

export default App;
