import { Footer, Blog, Possibility, Features, Gpt, Header } from './container';
import { CTA, Brand, Navbar } from './components';
import './app.css'
function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Gpt />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  );
}

export default App;
