import React from "react";
import { HospitalContext } from "../../Context";
import './HacerPedido.css';


function HacerPedido(){

  const {
    usuarioLoggeado,
    medicinas,
  } = React.useContext(HospitalContext);

  console.log('medicinas222:', medicinas);
  console.log('usuarioLoggeado:', usuarioLoggeado);

  const [panadol, omeprazol, paracetamol, ramipril, aspirina, salbutamol] = medicinas;

  return(
    <section id="hacerPedidoSection" className="hacer-pedido">
      <h1>UHospital - Hacer Pedido</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{panadol.nombre}</td>
            <td>${panadol.precio}</td>
            <td><span className="cantidad">{panadol.cantidad}</span></td>
            <td>$0.00</td>
            <td><button className="agregar">+</button></td>
            <td><button className="eliminar">-</button></td>
          </tr>
          <tr>
            <td>{omeprazol.nombre}</td>
            <td>${omeprazol.precio}</td>
            <td><span className="cantidad">{omeprazol.cantidad}</span></td>
            <td>$0.00</td>
            <td><button className="agregar">+</button></td>
            <td><button className="eliminar">-</button></td>
          </tr>
          <tr>
            <td>{paracetamol.nombre}</td>
            <td>${paracetamol.precio}</td>
            <td><span className="cantidad">{paracetamol.cantidad}</span></td>
            <td>$0.00</td>
            <td><button className="agregar">+</button></td>
            <td><button className="eliminar">-</button></td>
          </tr>
          <tr>
            <td>{ramipril.nombre}</td>
            <td>${ramipril.precio}</td>
            <td><span className="cantidad">{ramipril.cantidad}</span></td>
            <td>$0.00</td>
            <td><button className="agregar">+</button></td>
            <td><button className="eliminar">-</button></td>
          </tr>
          <tr>
            <td>{aspirina.nombre}</td>
            <td>${aspirina.precio}</td>
            <td><span className="cantidad">{aspirina.cantidad}</span></td>
            <td>$0.00</td>
            <td><button className="agregar">+</button></td>
            <td><button className="eliminar">-</button></td>
          </tr>
          <tr>
            <td>{salbutamol.nombre}</td>
            <td>${salbutamol.precio}</td>
            <td><span className="cantidad">{salbutamol.cantidad}</span></td>
            <td>$0.00</td>
            <td><button className="agregar">+</button></td>
            <td><button className="eliminar">-</button></td>
          </tr>
        </tbody>
      </table>
      <button className="realizar-pedido cancelar-pedido">Cancelar Pedido</button>
      <button className="realizar-pedido">Realizar Pedido</button>
    </section>
  )
}

export { HacerPedido };