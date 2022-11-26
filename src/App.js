import "./styles.css";
import Update from "./Components/Update";
import Delete from "./Components/Delete";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Components/Read";
import Create from "./Components/Create";
import Features from "./Features";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2 style={{ textAlign: "center" }}>Crud Operations</h2>
        <hr />
        <div className="main">
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
        <div>
          {/*   viewing  */}
          <Routes>
            <Route path="/read" element={<Read />} />
          </Routes>
        </div>
        <Routes>
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/delete" element={<Delete />} />
          <Route exact path="/" element={<Create />} />
        </Routes>
      </div>

      <Features />
    </BrowserRouter>
  );
}
