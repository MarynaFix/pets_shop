import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import AppRouter from "./AppRouter";
function App() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
