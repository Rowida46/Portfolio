import logo from './logo.svg';
import './App.css';
import './Components/style.css'
import CustomButton from './Components/CutomButton';
import CustomTitle from './Components/CustomTitle';
import CustomParagraph from './Components/CustomParagraph';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSections';
import SkillsSection from './Sections/skillsSecion';
import CustomProgress from './Components/CustomProgress';
import PortfolioSection from './Sections/PortfolioSection';
import FooterSection from './Sections/FooterSecion';
import jsPDF from 'jspdf';
import Login from './Forms/Login';
import RegisterForm from './Forms/RegisterForm';


function App() {
  return (
    <div className="App">
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
     <HeroSection/>
     <AboutSection/>
     <SkillsSection/>
     <PortfolioSection/>
     
     <FooterSection/>

     {/* <RegisterForm/> */}

    {/*  <RegisterForm/> */}


    </div>
  );
}

export default App;
