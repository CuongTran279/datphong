import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Header } from "./containers/public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="h-screen bg-primary">
      <div className='h-[60px] px-2'>
        <Header />
      </div>
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
