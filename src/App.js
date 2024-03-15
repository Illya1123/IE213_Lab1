// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import './App.css';
// import Bai_1 from "./Bai_1.js";

// function App() {
//   return (
//   <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Layout />}>
//      <Route index element={<Bai_1 />} />
//     </Route>
//     </Routes>
//   </BrowserRouter>
//   );
// }
// export default App;

import React from 'react';
import Bai_5 from './Bai_5.js';
import { FormDataProvider } from './FormDataContext5.js';

function App() {
  return (
    <FormDataProvider>
      <Bai_5/>
    </FormDataProvider>
  );
}

export default App;