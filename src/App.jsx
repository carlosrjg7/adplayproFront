import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/main.css";
import { Home, NotFound, Landing, Dashboard, Admin, Login } from "./pages";
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
