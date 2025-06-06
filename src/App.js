import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import ProductForm from './components/ProductForm';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/edit/:productId" element={<ProductForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
