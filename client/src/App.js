import React from 'react';
import SignIn from "./components/auth/Signin";
import Cloudinary from './components/Cloudinary';

function App() {
  return (
    <>
    App.js
    <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
      <SignIn/>
      <Cloudinary />
    </div>
    </>
  )
}

export default App;
