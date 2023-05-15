import { useState ,useRef,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import style from './contacts.module.css'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';


function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export default function Contact(){

const form = useRef();
  const formInitialDetails = {
    firstName_cliente: '',
    lastName_cliente: '',
    email_cliente: '',
    phone_cliente: '',
    message_cliente: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});
  const [open, setOpen] = useState(false);
  const [transition, setTransition] = useState(undefined);
  const [msg,setMsg] = useState('')
  const [msgtype,setmsgType]= useState('')


  const handleClose = () => {
    setOpen(false);
  };
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

 
  const handleSubmit =(e) => {
    e.preventDefault();
    setButtonText("Enviando...");
    

   emailjs.send(
        'service_XXXXXX',
        'template_XXXXXXX',
        formDetails,
        'gisbpXXXXXXXX'
      )
      .then((result) => {
           setStatus({ succes: true});
           setFormDetails(formInitialDetails);
           setButtonText("Enviar");

            setmsgType('success')
            setMsg('Menssagem enviada com sucesso...')
            setTransition(() => TransitionRight);
            setOpen(true);
      }, (error) => {
          setStatus({ succes: false});
          setFormDetails(formInitialDetails);
          setButtonText("Enviar");
          
          setmsgType('error')
          setMsg('Ocorreu um erro temporário, tente mais tarde...')
          setTransition(() => TransitionRight);
          setOpen(true);
      });
     
  };

 

  return (
    <section className={style["contact"]} id="contatos">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={`${isVisible ? "animate__animated animate__zoomIn" : ""} ${style['contact-img']}`} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className={style['contact-h2']}>Envie-me uma menssagem</h2>
                <form onSubmit={handleSubmit} ref={form} >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" className={style['contact-form-input']} value={formDetails.firstName_cliente} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName_cliente', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"className={style['contact-form-input']} value={formDetails.lastName_cliente} placeholder="Segundo Nome" onChange={(e) => onFormUpdate('lastName_cliente', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"className={style['contact-form-input']} value={formDetails.email_cliente} placeholder="Email " onChange={(e) => onFormUpdate('email_cliente', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"className={style['contact-form-input']} value={formDetails.phone_cliente} placeholder="Telefone" onChange={(e) => onFormUpdate('phone_cliente', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea className={style['contact-form-input']} rows="6" value={formDetails.message_cliente} placeholder="Mensagem" onChange={(e) => onFormUpdate('message_cliente', e.target.value)}></textarea>
                      <button className={style['contact-form-button']} type="submit"><span className={style['contact-form-button-span']}>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
       
      </Container>
       <div>
            <Snackbar 
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    
                    key={transition ? transition.name : ''}
                    autoHideDuration={5000}
                    action={
                        <>
                            <Button color="secondary" size="small" onClick={handleClose}>
                            Fechar
                            </Button>
                            <IconButton
                            aria-label="close"
                            color="inherit"
                            sx={{ p: 0.5 }}
                            onClick={handleClose}
                            >
                            <CloseIcon />
                            </IconButton>
                        </>
                    }
            >
                <MuiAlert onClose={handleClose} severity={msgtype} sx={{ width: '100%' }}>
                    {msg}
                </MuiAlert>
            </Snackbar>
                        
        </div>
    </section>
  )
}