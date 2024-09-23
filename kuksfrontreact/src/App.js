import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import React from "react";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/BoardWrite";
import BoardUpdate from "./routes/BoardUpdate";
import 'bootstrap/dist/css/bootstrap.min.css';
import SsoKakao from "./sso/SsoKakao";
import KuksProfile from "./profile/KuksProfile";
import Calculator from "./calc/Calculator";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/board" element={<BoardWrite/>}/>
            <Route path="/board/:idx" element={<BoardDetail/>}/>
            <Route path="/update/:idx" element={<BoardUpdate/>}/>
            <Route path="/auth" element={<SsoKakao/>}/>
            <Route path="/profile" element={<KuksProfile/>}/>
            <Route path="/calc" element={<Calculator/>}/>
        </Routes>
    );
}

export default App;