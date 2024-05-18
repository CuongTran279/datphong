import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, MainContent} from "./containers/public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen bg-primary">
      <Router>
        <Routes>
          <Route path={path.home} element={<Home />}>
            <Route index element={<MainContent />} />
            <Route path={path.login} element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
