import "./styles.css";

import { HtmlForm } from "./form/HtmlForm";
import { MuiForm } from "./form/MuiForm";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";

export default function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/htmlform" element={<HtmlForm />} />
        <Route path="/muiform" element={<MuiForm />} />
      </Routes>
    </>
  );
}
