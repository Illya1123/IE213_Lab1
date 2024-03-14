import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';
import Bai1 from './Bai1.js';
import Bai4 from './Bai4.js';
import Bai5 from './Bai5.js';
import { FormDataProvider } from './FormDataContext5';
import { FormDataProvider4 } from './FormDataContext4';
import styles from './Bai1.css'; 
import stylesBai4 from './Bai4.css'; 
import stylesBai5 from './Bai5.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/bai1" element={<Bai1 className={styles.container} />} />
          <Route path="/bai4" element={<FormDataProvider4><Bai4 className={stylesBai4.container} /></FormDataProvider4>} />
          <Route path="/bai5" element={<FormDataProvider><Bai5 className={stylesBai5.container} /></FormDataProvider>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;