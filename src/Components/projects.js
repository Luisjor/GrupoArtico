import React from 'react'
import LogoBlancoHrz from './Images/logohorizontalblanco.png'
import CasaJCL from './Images/Proyectos/casajcl.jpg'
import HornoBarro from './Images/Proyectos/hornobarro.jpg'
import RemodBano from './Images/Proyectos/remodbano.jpg'
import TerrazaBar from './Images/Proyectos/terrazabar.jpg'
import TerrazaCampestre from './Images/Proyectos/terrazacampestre.jpg'

export default function Main() {
    return (
        <section className="container-fluid projects" id='Projects'>
            <div className="container-fluid imgprojects">
                <img src={LogoBlancoHrz} alt='White Logo' className="horizontallogo"/>
            </div>
<br/>
            <div className="container gridaprojects">
                <img src={CasaJCL} alt='CasaJCL'/>
                <div className='aboutus--text'>
                    <h2>CASA JCL</h2>
                    <p>Diseño y Construcción de casa Habitación de dos niveles hecha con estructura metálica, losacero y demás elementos estructurales y arquitectónicos que hicieron de esta casa un proyecto único.</p>
                </div>


                
                <div className='aboutus--text'>
                    <h2>RANCHO CHIVATOTE</h2>
                    <p>Ampliación de zona de baños y construcción de terraza destinada para cocinar alimentos en horno de barro hecho artesanalmente.
                    <br/>
                    El proyecto también incluyó construcción de un muro de contención de piedra, relleno y afine de terraplen de más de 500.00 m2</p>
                </div>
                <img src={HornoBarro} alt='HornoBarro'/>
                
                <img src={RemodBano} alt='RemodBano'/>
                <div className='aboutus--text'>
                    <h2>CASA GC</h2>
                    <p>Remodelación de diversas áreas de casa habitación de dos plantas.<br/>

                        Las áreas eran:<br/>

                        1. Baño Principal.<br/>

                        2. Clóset Principal.<br/>

                        3. Jardín Posterior.<br/>

                        4. Cocina.<br/>

                        5. Plafones.</p>
                </div>
                
                <div className='aboutus--text'>
                    <h2>TERRAZA BAR</h2>
                    <p>Diseño y Construcción de terraza con alberca, baños con vestidor, cuarto de máquinas y cochera incluídos.</p>
                </div>
                <img src={TerrazaBar} alt='TerrazaBar'/>
                

                <img src={TerrazaCampestre} alt='TerrazaCampestre'/>
                <div className='aboutus--text'>
                    <h2>TERRAZA CAMPESTRE</h2>
                    <p>Construcción de terraza campestre a base de perfiles metálicos y lámina de fibrocemento en comunidad del Estado de Colima.<br/>

                    El proyecto incluyó firme listo para en un futuro recibir vitropiso, muros bajos perimetrales y una barra de concreto.</p>
                </div>

            </div>
            <br/>
        </section>

    )
}
