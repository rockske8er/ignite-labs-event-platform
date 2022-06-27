import { Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/plataforma" element={<Event />} />
      <Route path="/plataforma/aula/:slug" element={<Event />} />
    </Routes>
  );
};

export { Router };
