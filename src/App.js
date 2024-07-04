 import ConsecutiveSnackbars from './Component/Navbar'
 import Home from './Component/HomeSection'
 import About from './Component/AboutSection'
 import PortfolioSection from './Component/Portfolio'
  // import ContactForm from './Component/Contect'
  import './App.css'
  import CustomFooter from './Component/Footer'
  // import Resume from './Component/Resume'
function App() {
  return (
    <>
       <ConsecutiveSnackbars />
       <Home />
       <About />
       <PortfolioSection  />
       <CustomFooter />
       {/* <ContactForm /> */}
       {/* <Resume /> */}
    </>
  );
}

export default App;
