import React, { Component } from 'react';

import './styles.css'

function Header(){
    return(
        <header className="cabecalho" id="cabecalho">
            <div className="titulos">
                <h1>StuffCounters!</h1>
                <h2>Um site que gera contadores</h2>
            </div>
        </header>
    )
}

export default Header;