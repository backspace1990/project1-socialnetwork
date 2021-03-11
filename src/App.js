import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/profile"
                       render={() => <Profile/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                {/*<Route path="/settings" component={Settings}/>
                    */}
            </div>
        </div>


    )
};

export default App;