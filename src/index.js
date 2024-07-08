import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/home.js';
import About from './about/abt.js';
import Gallery from './gallery/gal.js';
import Soc from './socaff/soc.js';
import Membership from './membership/mem.js';
import Blog from './blog/blog.js';
import Events from './events/events.js';
import NoPage from './nopage/nopg.js';
import Regmember from './membership/regmem.js';



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './App.js';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="socaff" element={<Soc />} />
          <Route path="membership" element={<Membership />} />
          <Route path="blog" element={<Blog />} />
          <Route path="regmem" element={<Regmember />} />
          <Route path="*" element={<NoPage />} />  
        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}

function Mobile(){
let details = navigator.userAgent; 

let regexp = /android|iphone|kindle|ipad/i; 


let isMobileDevice = regexp.test(details); 

if (isMobileDevice) { 
	alert("This Website is not responsive to Mobile Phones and tablets. Please Use a Desktop to access the services") 
}
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Mobile/>
    <App/>
  </>
);