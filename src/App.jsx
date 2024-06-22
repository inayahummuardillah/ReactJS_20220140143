import gambar from "./assets/Dikta.jpg"
import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="centered">
        <h1>PRADIKTA WICAKSONO</h1>
        <p>Penyanyi dan Aktor berkebangsaan Indonesia, Lahir 10 Januari 1986, 
          Dikta merupakan mantan vokalis grup musik Yovie & Nuno dari tahun 2007 hingga 2022.</p>
          <img src={gambar} alt="Pradikta Wicaksono" className="large-image" />
      </div>
    </>
  );
}

export default App;


