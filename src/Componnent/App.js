import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../Componnent/Pages/Main'
import About from '../Componnent/Pages/About'
import Layout from './Layout';
import CardOpenned from '../Componnent/Pages/CardOpenned';
import ErrorUrl from '../Componnent/Pages/ErrorUrl';
import Caroussel from './Caroussel';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Caroussel />} />
          <Route path="/About" element={<About />} />
          <Route path="/CardOpenned/:id" element={<CardOpenned />} />
          <Route path="*" element={<ErrorUrl />} />
        </Routes>
      </Layout>
    </Router>)

}

export default App;
