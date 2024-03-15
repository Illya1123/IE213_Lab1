import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import './App.css';
import Bai1 from "./Bai1.js";
import Bai4 from './Bai4.js';
import Bai5 from './Bai5.js';
import { FormDataProvider as FormDataProvider4 } from './FormDataContext4';
import { FormDataProvider as FormDataProvider5 } from './FormDataContext5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="bai1" element={<Bai1 />} />
          <Route path="bai4" element={<FormDataProvider4><Bai4 /></FormDataProvider4>} />
          <Route path="bai5" element={<FormDataProvider5><Bai5 /></FormDataProvider5>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
