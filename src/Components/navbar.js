import React from 'react'
import Logo from './Images/articologo.png'

export default function Navbar() {



    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#Home"><img src={Logo} alt='ArticoLogo' width={"30"}/></a>

                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="collapsenavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Projects">Proyectos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#AboutUs">Sobre Nosotros</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}