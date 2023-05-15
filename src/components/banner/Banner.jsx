import { useEffect,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import Typed from 'typed.js';
import ArrowRightCircle from '@mui/icons-material/ArrowCircleRight';
import style from './banner.module.css'
import TrackVisibility from 'react-on-screen';


export default function Banner(){
  const typedJSRef = useRef(null);
const linkContato = (e)=>{
        e.preventDefault()
        window.location.href = "#contatos"

    }
useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: [
        "desenvolvedor front-end",
        "desenvolvedor back-end",
        "desenvolvedor mobile",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);


  return (
    <section className={style["banner"]} id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className={style["tagline"]}>Bem vindo a meu Portfólio</span>
                <h2 className={style['banner-h2']}>Olá eu sou <span className={style['nome']}>Evandro</span> <span className={style["txt-rotate"]} ref={typedJSRef}></span></h2>
                  <p className={style['banner-p']}>Oi, vou te contar mais um pouco sobre minha formação. Sou professor especialista em ensino de matemática, com licenciatura e bacharelado em matemática pela UFRRJ, Graduação em Sistemas para Internet pela UNICESUMAR</p>
                  <button className={style['banner-button']} onClick={linkContato} >Entrar em contato <ArrowRightCircle className={style['banner-button-svg']} size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className={style['banner-img']} src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}