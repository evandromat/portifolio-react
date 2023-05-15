import './App.css'
import NavBar from './components/navbar/NavBar'
import Banner from './components/banner/Banner'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
export default function App(){
    return(
        <div className='App'>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}