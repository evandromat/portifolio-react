import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard  from "../projectcard/ProjectCard";
import projImg1 from "../../assets/img/chat.jpg";
import projImg2 from "../../assets/img/penal.png";
import projImg3 from "../../assets/img/jessica.png";
import projImg4 from "../../assets/img/github.jpg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import style from './projects.module.css'
import TrackVisibility from 'react-on-screen';


export default function Projects(){

  const projects = [
    {
      title: "Incutido Social Chat App",
      description: "Chat App",
      imgUrl: projImg1,
      link:'https://incutido.netlify.app'
    },
    {
      title: "Calculadora de Execução Penal",
      description: "Calculadora para cálculo de data de progreção de regime",
      imgUrl: projImg2,
      link:'https://tjcalcpenal.netlify.app/'
    },
    {
      title: "Tays e Jessica Advocacia",
      description: "Página para advogados",
      imgUrl: projImg3,
      link:'#'
    },
    
  ];

  return (
<section className={style["project"]} id="projetos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className={style['project-h2']}>Projetos</h2>
                <p className={style['project-p']}>Conheça um pouco de meus projetos pessoais</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className={`${style["nav-pills"]} mb-5 justify-content-center align-items-center`} id="pills-tab">
                    <Nav.Item className={style['nav-item']}>
                      <Nav.Link className={style['nav-link']} eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item className={style['nav-item']}>
                      <Nav.Link className={style['nav-link']}  eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                                
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    
                                    />
                                
                              
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row><ProjectCard title='Visite Meu GitHub' description='Conheça meus projetos...' imgUrl={projImg4} link='https://github.com/evandromat'/> 
                    </Row>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className={style["background-image-right"]} src={colorSharp2}></img>
    </section>
  )
}