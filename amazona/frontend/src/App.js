import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductScreen from './ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route
              path="/product/:slug"
              element={<ProductScreen />}
            />
            <Route
              path="/"
              element={<HomeScreen />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
