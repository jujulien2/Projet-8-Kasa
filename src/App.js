import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
import About from './Pages/About'
import Layout from './Componnent/Layout/Layout';
import CardOpenned from './Pages/Logement';
import ErrorUrl from './Pages/Error';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Projet-8-Kasa/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/CardOpenned/:id" element={<CardOpenned />} />
          <Route path="*" element={<ErrorUrl />} />
        </Routes>
      </Layout>
    </Router>)

}

export default App;
