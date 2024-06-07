import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#464646]">
        <Navbar />
        <main className="flex-grow">
          <Pages />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
