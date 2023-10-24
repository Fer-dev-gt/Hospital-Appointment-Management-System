import React from "react";
import { HospitalContext } from "../../Context";
import { HacerPedido } from "./HacerPedido";
import "./ComprarMedicina.css";

function ComprarMedicina() {
  React.useEffect(() => {
    console.log('Inventario de medicinas en Medicinas.bin');
    getMedicinas();
  }, [])

  const {
    irHacerPedidoPage,    
    hacerPedido,
    getMedicinas,
  } = React.useContext(HospitalContext);


  return(
    <section id="medicamentosSection" className="medicamentos">
      <h1>UHospital - Medicamentos</h1>
      <div className="medicamentos-container">
        <div className="medicamento">
          <h2>Panadol</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="precio">$10.00</button>
        </div>
        <div className="medicamento">
          <h2>Omeprazol</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="precio">$15.00</button>
        </div>
        <div className="medicamento">
          <h2>Paracetamol</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="precio">$20.00</button>
        </div>
        <div className="medicamento">
          <h2>Ramipril</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="precio">$25.00</button>
        </div>
        <div className="medicamento">
          <h2>Aspirina</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="precio">$30.00</button>
        </div>
        <div className="medicamento">
          <h2>Salbutamol</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="precio">$35.00</button>
        </div>
      </div>
    <button onClick={irHacerPedidoPage} id="SiguienteBtn">Hacer Pedido</button>

    {!!hacerPedido && <HacerPedido />}
  </section>
  )
}

export { ComprarMedicina };