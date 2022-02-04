import "./Input.css";
import React, { useState } from "react";

export default (props) => {
    const [valor, setValor] = useState("Inicial");

    function quandoMudar(e) {
        setValor(e.target.value)
    }
/**Componente controlado esta amarrado a um determinado estado, modificando o estado o reflexo da mudança e reflito visualmente*/
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly />
                <input value={undefined} /> {/**Componente não controlado, não fica assosiado a nenhum estado */}
            </div>
        </div>
    );
};