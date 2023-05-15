import { useState, } from "react";
import { Col, Row } from "react-bootstrap";
import style from './newslatter.module.css'

export default function Newsletter(){
  const [email, setEmail] = useState('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    window.open(`https://substack.com/sign-in?redirect=%2Faccount&for_pub=evandrorocha&email=${email}&with_password=&change_user=false&justTrying=`, '_blank');
    setEmail('');
  }

 

  return (
      <Col lg={12}>
        <div className={`${style["newsletter-bx"]} "wow slideInUp"}`}>
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3 className={style['newsletter-bx-h3']}>Increva-se em minha newslatter <br></br>e saiba sempre que eu criar um novo projeto</h3>
              
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className={style["new-email-bx"]}>
                  <input className={style['new-email-bx-input']} value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de Email" required />
                  <button className={style['new-email-bx-button']} type="submit">Incrição</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
