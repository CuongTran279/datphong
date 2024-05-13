import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login } from "./containers/public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Router>
        <Routes>
          <Route path={path.home} element={<Home />} />
          <Route path={path.login} element={<Login />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
