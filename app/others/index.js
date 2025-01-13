"use client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chapter1 from "./pages/Chapter_1";
import Chapter2 from "./pages/Chapter_2";
import Chapter3 from "./pages/Chapter_3";
import Encyclopedia from "./pages/Encyclopedia";
import Recollection from "./pages/Recollection";

export default function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chapter1 />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Chapter1" element={<Chapter1 />} />
          <Route path="Chapter2" element={<Chapter2 />} />
          <Route path="Chapter3" element={<Chapter3 />} />
          <Route path="Encyoclopedia" element={<Encyclopedia />} />
          <Route path="Recollection" element={<Recollection />} />
          {/* <Route path="*" element={<layout />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <HomePage />
//   </StrictMode>
// );

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
