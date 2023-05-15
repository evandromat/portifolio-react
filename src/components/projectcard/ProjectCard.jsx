import { Col } from "react-bootstrap";
import CallMadeIcon from '@mui/icons-material/CallMade';
import Link from '@mui/material/Link';
import style from './projectCard.module.css'

export default function  ProjectCard({ title, description, imgUrl,link }){
 
  return (
    <Col size={12} sm={6} md={4}>
      <div className={style["proj-imgbx"]}>
        <img src={imgUrl} />
        <div className={style["proj-txtx"]}>
          <h4 className={style['proj-txtx-h4']}>{title}</h4>
          <span className={style['proj-txtx-span']}>{description}</span>
          {` `}<Link href={link} target="_blank"><CallMadeIcon sx={{color:'#fff',fontSize:32,fontWeight:700}}/></Link>
        </div>
        
      </div>
    </Col>
  )
}