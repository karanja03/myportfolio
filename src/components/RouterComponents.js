import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import MyProjects from "./MyProjects";
import Contact from "./Contact";
function RouterComponents(){
    return(
        <div>

            <Router>
                <Routes>
                    <Route path="/aboutme" element={<About/>}/>
                    <Route path="/myprojects" element={<MyProjects/>}/>
                    <Route path="/contactme" element={<Contact/>}/>
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/" element={<HomePage/>}/>


                </Routes>
            </Router>
        </div>
    )
}

export default RouterComponents