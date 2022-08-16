import './App.scss';
import { Routes, Route } from "react-router-dom";
import {Resume} from './Views/Resume'

function App() {
  


  return (
    <main className="main-app">
          <Routes>
             <Route path="/resume/:name" element={<Resume />} />
          </Routes>
    </main>
  );
}

export default App;
