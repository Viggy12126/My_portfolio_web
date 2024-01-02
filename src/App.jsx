import styles from "./App.module.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Experience from "./components/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
       <Navbar />
       <Banner />
       <About />
       <Experience />
       <Projects />
      </div>
      )
}

export default App
