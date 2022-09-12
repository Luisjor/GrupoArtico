import React from 'react'
import LogoBlancoHrz from './Images/logohorizontalblanco.png'
import Mision from './Images/misionimg.jpg'
import Vision from './Images/visionimg.jpg'
import Valores from './Images/valoresimg.jpg'

export default function Main() {
    return (
        <section className="container-fluid projects" id='AboutUs'>
            <div className="container-fluid imgaboutus">
                <img src={LogoBlancoHrz} alt='White Logo' className="horizontallogo"/>
            </div>
            <div className="container">
                <br/>
                <h2>SOBRE NOSOTROS</h2>
                <p>Grupo Ártico es una constructora dedicada al desarrollo de trabajos para el sector residencial, obras comerciales, mantenimientos preventivos o correctivos, diseño arquitectónico y remodelaciones. Ofrecemos al mercado una amplia variedad de servicios y productos basados en la habilidad y experiencia del personal que la conforma.<br/>

                La atención al cliente y satisfacción de sus necesidades técnicas a través de un servicio de calidad, son nuestro objetivo.</p>
            </div>
            <div className="container gridaabout">
                <img src={Mision} alt='Mision'/>
                <div className='aboutus--text'>
                    <h2>MISIÓN</h2>
                    <p>Construir con integridad y excelencia, respaldados de una trayectoria de servicio y calidad.<br/>
                    Crecer responsablemente, con respeto a la comunidad y al medio ambiente.<br/>
                    Trabajar día a día poniendo el patrimonio de nuestros clientes como principal responsabilidad, entregando trabajos en tiempo y forma.</p>
                </div>


                <img src={Vision} alt='Vision'/>
                <div className='aboutus--text'>
                    <h2>VISIÓN</h2>
                    <p>Ser una constructora líder e innovadora en el mercado inmobiliario, entregando el mejor servicio en todos los proyectos.<br/>

                    Destacarnos por la confianza que nos brindan nuestros socios, clientes y colaboradores, y la pasión por lo que hacemos.</p>
                </div>
                
                <img src={Valores} alt='Valores'/>
                <div className='aboutus--text'>
                    <h2>VALORES</h2>
                    <p>Compromiso con nuestros clientes y socios.<br/>
                        Innovación en procesos constructivos.<br/>
                        Transparencia en nuestras relaciones.<br/>
                        Respeto por la comunidad y el medio ambiente.<br/>
                        Excelencia en el trabajo.</p>
                </div>
                
                

            </div>
            <br/>
        </section>

    )
}
