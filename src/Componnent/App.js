
import '../Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import About from '../Componnent/About'
import Layout from './Layout';
import CardOpenned from './CardOpenned';
import ErrorUrl from './ErrorUrl';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/CardOpenned/:id" element={<CardOpenned />} />
          <Route path="*" element={<ErrorUrl />} />
        </Routes>
      </Layout>
    </Router>)

}

export default App;
