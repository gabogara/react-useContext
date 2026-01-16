import { Routes, Route } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard";
import Articles from "./components/Articles";
import Login from "./components/Login";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  return (
    <>
      <NavBar />
      <section className="content">
        <h1>Hello world</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
