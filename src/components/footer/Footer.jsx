import { Container, Row, Col } from "react-bootstrap";
import  Newsletter  from "../newsltter/Newsletter";
import logo from '../../assets/img/logo2.png'
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import style from './footer.module.css'
export default function Footer(){
  return (
    <footer className={style["footer"]}>
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img className={style['footer-img']} src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className={style["social-icon"]}>
              <a className={style['social-icon-a']} href="#"><img className={style['social-icon-a-icon']} src={navIcon1} alt="Icon" /></a>
              <a className={style['social-icon-a']} href="#"><img className={style['social-icon-a-icon']} src={navIcon2} alt="Icon" /></a>
              <a className={style['social-icon-a']} href="#"><img className={style['social-icon-a-icon']} src={navIcon3} alt="Icon" /></a>
            </div>
            <p className={style['footer-p']}>Copyright 2023.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
