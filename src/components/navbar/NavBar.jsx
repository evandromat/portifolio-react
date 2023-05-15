import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo2.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Link from '@mui/material/Link';
import style from  './navbar.module.css'

export default function NavBar() {
    const [activelink,setActivelink] = useState('home')
    const [scroled,setScroled] = useState(false)



    const linkContato = (e)=>{
        e.preventDefault()
        window.location.href = "#contatos"

    }
    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScroled(true)
            }else{
                setScroled(false)
            }
        }
        window.addEventListener('scroll',onScroll)

        return ()=> window.removeEventListener('scroll',onScroll)
    },[])
    const onupdateActiveLink = (value)=>{
        setActivelink(value)
    }
  return (
    <Navbar  expand="lg" className={scroled?'scrolled':''}>
      <Container>
        <Navbar.Brand href="#home" >
            <img className={style['logo']} src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <DehazeIcon sx={{color:'#fff'}}  />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activelink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=>onupdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activelink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={()=>onupdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#projetos" className={activelink === 'projetos' ? 'active navbar-link':'navbar-link'} onClick={()=>onupdateActiveLink('projetos')}>Projetos</Nav.Link>
          </Nav>
          <span className={style['navbar-text']}>
            <div className={style['social-icon']}>
                <a className={style['social-icon-a']} href='https://br.linkedin.com/in/evandro-souza-rocha-b1596410a' target='_blank'><LinkedInIcon sx={{color: '#fff',
                        width: '100%',
                        fontSize: 'xx-large',
                        zIndex: 1,
                        transition: '0.3s ease-in-out'}} className={style['social-icon-a-icon']}/>
                </a>
                <a className={style['social-icon-a']} href='https://facebook.com/seduc.evandro' target='_blank'><FacebookIcon sx={{color: '#fff',
                        width: '100%',
                        fontSize: 'xx-large',
                        zIndex: 1,
                        transition: '0.3s ease-in-out'}} className={style['social-icon-a-icon']}/>
                </a>
                <a className={style['social-icon-a']} href='https://www.instagram.com/evandromat' target='_blank'><InstagramIcon sx={{color: '#fff',
                        width: '100%',
                        fontSize: 'xx-large',
                        zIndex: 1,
                        transition: '0.3s ease-in-out'}} className={style['social-icon-a-icon']}/>
                </a>
            </div>
            <Link component="button" onClick={linkContato} className={style['vvd']} ><span>Entrar em contato</span></Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
