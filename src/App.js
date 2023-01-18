import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Reset, GlobalStyle } from "./common/GlobalStyle";
import LoginPage from "./pages/loginPage";
import RegisterPage from './pages/registerPage';

import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <Reset/>
      <GlobalStyle/>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

/*function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to='/' />;
  }

  return <>
    {children}
  </>;
}*/

export default App;
