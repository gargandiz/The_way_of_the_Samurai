import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props) => {
            return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar state={props.state.sidebar}/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/dialogs/:id?" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/news" element={<Settings/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
