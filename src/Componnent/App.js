
import '../Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import About from '../Componnent/About'
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Layout>
    </Router>)

}

export default App;
