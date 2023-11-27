import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicExample from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/HeadNav';
import './App.css';
import CreatePostPage from './components/Create';
import HomePage from './components/Update';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <ColorSchemesExample/>
      <Routes>
        <Route path="/" element={<BasicExample />} />
        <Route path="/create" element={<CreatePostPage/>} />
        <Route path="/update" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
