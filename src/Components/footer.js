import React from 'react'

export default function Footer() {
    return (
            <footer>
                <div className='container footergrid'>
                    <div>
                        <b>Grupo Ártico</b>
                        <p className='footertext'>Constructora dedicada al desarrollo de trabajos para el sector residencial, obras comerciales, mantenimientos preventivos o correctivos, diseño arquitectónico y remodelaciones.</p>
                    </div>
                    <div>
                        <b>Contáctanos</b>
                        <ul>
                            <li>Av. Pablo Silva García #220 <br/>Villa de Álvarez, Colima.</li>
                            <li>(+52) 312 194 3269</li>
                            <li>ljorchavez@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <b>Síguenos</b>
                        <div className='socialscontainer'>
                            <a href='https://www.facebook.com/GrupoArticonstrucciones'>
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href='https://www.instagram.com/grupoarti.co/'>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href='https://wa.me/523121943269'>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className='container-fluid copyrigthcont'>
                </div>
            </footer>
    )
}
