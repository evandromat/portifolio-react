import style from './skills.module.css'
import circulo from "../../assets/img/circulo.png";
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import CodeOffIcon from '@mui/icons-material/CodeOff';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CountUp from 'react-countup';


export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={style["skill"]} id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`${style["skill-bx"]} wow zoomIn`}>
                        <h2 className={style.skillh2}>Habilidades</h2>
                        <p className={style.skillp}>Veja algumas de minhas habilidades.</p>
                       <TrackVisibility>
                            {({ isVisible }) =>
                                <Carousel responsive={responsive} infinite={true} className={["owl-carousel owl-theme", style["skill-slider"]]}>

                                <div className={style.item}>
                                    <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                    <CountUp className={style.contador} end={ isVisible && 80} suffix="%"  /> 
                                    <h5><span><CodeOffIcon /></span>{' '}HTML</h5> 
                                </div>
                                <div className={style.item}>
                                        <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                        <CountUp className={style.contador} end={isVisible && 70} suffix="%" />                     
                                    <h5><span><CodeOffIcon /></span>{' '}CSS</h5>
                                </div>
                                <div className={style.item}>
                                    <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                    <CountUp className={style.contador} end={isVisible && 90} suffix="%" /> 
                                    <h5><span><CodeOffIcon /></span>{' '}JS</h5>
                                </div>
                                <div className={style.item}>
                                    <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                    <CountUp className={style.contador} end={isVisible && 85} suffix="%" /> 
                                    <h5><span><CodeOffIcon /></span>{' '}ReactJs</h5>
                                </div> 
                                <div className={style.item}>
                                    <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                        <CountUp className={style.contador} end={isVisible && 75} suffix="%" /> 
                                    <h5><span><CodeOffIcon /></span>{' '}NodeJs</h5>
                                </div> 
                                <div className={style.item}>
                                    <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                    <CountUp className={style.contador} end={isVisible && 80} suffix="%" /> 
                                    <h5><span><CodeOffIcon /></span>{' '}Firebase</h5>
                                </div>
                                <div className={style.item}>
                                    <DataUsageIcon sx={{fontSize:250,color:'#6728af'}} />
                                    <CountUp className={style.contador} end={isVisible && 70} suffix="%" /> 
                                    <h5><span><CodeOffIcon /></span>{' '}MySql</h5>
                                </div>
                            </Carousel>
                        }
                    </TrackVisibility>
                            
                        
                       
                    </div>
                </div>
            </div>
        </div>
        <img className={style["background-image-left"]} src={colorSharp} alt="Image" />
    </section>
  )
}