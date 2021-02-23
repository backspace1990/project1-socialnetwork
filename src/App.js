import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='site-wrapper'>
                <Header/>
                <Navbar/>
                <div className='site-wrapper-content'>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    {/*<Route path="/settings" component={Settings}/>
                    */}
                </div>
            </div>
        </BrowserRouter>

    )
};

export default App;
