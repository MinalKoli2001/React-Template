import "./App.css";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import "./media.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
