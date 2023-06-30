import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main'
import About from './About'
import Layout from '../Layout/Layout';
import CardOpenned from './Logement';
import ErrorUrl from './ErrorUrl';
import Caroussel from '../Logements/Caroussel';


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
