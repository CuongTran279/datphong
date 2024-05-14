import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Register, MainContent} from "./containers/public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen bg-primary">
      <Router>
        <Routes>
          <Route path={path.home} element={<Home />}>
            <Route index element={<MainContent />} />
            <Route path={path.login} element={<Login />} />
            <Route path={path.register} element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
