import { GlobalStyles } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Home, 
          WhatWeDo, 
          DigitalDivide, 
          GetInvolved, 
          OurNetwork, 
          Insights, 
          Layout } from "./pages";
import data from "./data";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home {...data} />} />
            <Route path="what-we-do" element={<WhatWeDo page={data.whatwedo} />} />
            <Route path="the-digital-divide" element={<DigitalDivide />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="our-network" element={<OurNetwork />} />
            <Route path="insights" element={<Insights />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
