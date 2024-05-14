import React, { useEffect } from 'react';
import './App.css';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Routers from './Routers/Routers';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./Components/Layout/Header/UserOptions";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user} =useSelector((state)=> state.user);
  useEffect(()=>{
    // WebFont.load({
    //   google: {
    //     families:["Roboto","Droid Sans","Chilanka"],
    //   },
    // });

    store.dispatch(loadUser());
}, [])
  return (
    <div className="App">
      <Header />
      
  {isAuthenticated && <UserOptions user={user} />}
        <div>
          <Routers />
        </div>
      <Footer />
    </div>
  );
}

export default App;
