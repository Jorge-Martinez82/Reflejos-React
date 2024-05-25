import React from "react";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div>
                    <h3 className="title">ReflejosApp</h3>
                    <nav className="nav">
                        <Link to="/home"><button>Inicio</button></Link>
                        <Link to="/athletes"><button>Atletas</button></Link>
                        <Link to="/about"><button>About</button></Link>
                        <Link to="/logout"><button>Salir</button></Link>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;