import React from "react";
import { HospitalContext } from "../../Context";
import './HacerPedido.css';


function HacerPedido(){

  const {
    usuarioLoggeado,
    medicinas,
  } = React.useContext(HospitalContext);

  console.log('Inventario de medicinas:', medicinas);
  console.log('usuarioLoggeado:', usuarioLoggeado);

  const [panadol, omeprazol, paracetamol, ramipril, aspirina, salbutamol] = medicinas;

  const [cantidadPanadolPedido, setCantidadPanadolPedido] = React.useState(0);
  const [cantidadOmeprazolPedido, setCantidadOmeprazolPedido] = React.useState(0);
  const [cantidadParacetamolPedido, setCantidadParacetamolPedido] = React.useState(0);
  const [cantidadRamiprilPedido, setCantidadRamiprilPedido] = React.useState(0);
  const [cantidadAspirinaPedido, setCantidadAspirinaPedido] = React.useState(0);
  const [cantidadSalbutamolPedido, setCantidadSalbutamolPedido] = React.useState(0);

  const agregarPanadolPedido = () => { if(cantidadPanadolPedido < panadol.cantidad) setCantidadPanadolPedido(cantidadPanadolPedido + 1)}
  const agregarOmeprazolPedido = () => { if(cantidadOmeprazolPedido < omeprazol.cantidad) setCantidadOmeprazolPedido(cantidadOmeprazolPedido + 1)}
  const agregarParacetamolPedido = () => { if(cantidadParacetamolPedido < paracetamol.cantidad) setCantidadParacetamolPedido(cantidadParacetamolPedido + 1)}
  const agregarRamiprilPedido = () => { if(cantidadRamiprilPedido < ramipril.cantidad) setCantidadRamiprilPedido(cantidadRamiprilPedido + 1)}
  const agregarAspirinaPedido = () => { if(cantidadAspirinaPedido < aspirina.cantidad) setCantidadAspirinaPedido(cantidadAspirinaPedido + 1)}
  const agregarSalbutamolPedido = () => { if(cantidadSalbutamolPedido < salbutamol.cantidad) setCantidadSalbutamolPedido(cantidadSalbutamolPedido + 1)}

  const quitarPanadolPedido = () => { if (cantidadPanadolPedido > 0) setCantidadPanadolPedido(cantidadPanadolPedido - 1);};
  const quitarOmeprazolPedido = () => { if (cantidadOmeprazolPedido > 0) setCantidadOmeprazolPedido(cantidadOmeprazolPedido - 1);};
  const quitarParacetamolPedido = () => { if (cantidadParacetamolPedido > 0) setCantidadParacetamolPedido(cantidadParacetamolPedido - 1);};
  const quitarRamiprilPedido = () => { if (cantidadRamiprilPedido > 0) setCantidadRamiprilPedido(cantidadRamiprilPedido - 1);};
  const quitarAspirinaPedido = () => { if (cantidadAspirinaPedido > 0) setCantidadAspirinaPedido(cantidadAspirinaPedido - 1);};
  const quitarSalbutamolPedido = () => { if (cantidadSalbutamolPedido > 0) setCantidadSalbutamolPedido(cantidadSalbutamolPedido - 1);};

  
  const subTotal = (precioMedicina, cantidad) => {
    if (cantidad <= 0) return 0;
    return precioMedicina * cantidad;
  }
  
  const Total = () => cantidadPanadolPedido * panadol.precio + cantidadOmeprazolPedido * omeprazol.precio + cantidadParacetamolPedido * paracetamol.precio + cantidadRamiprilPedido * ramipril.precio + cantidadAspirinaPedido * aspirina.precio + cantidadSalbutamolPedido * salbutamol.precio;
  
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
            {panadol.cantidad > 0 && (
              <>
                <td>{panadol.nombre}</td>
                <td>${panadol.precio}</td>
                <td><span className="cantidad">{panadol.cantidad}</span></td>
                <td>${subTotal(panadol.precio, cantidadPanadolPedido)}</td>
                <td><button onClick={agregarPanadolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarPanadolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {omeprazol.cantidad > 0 && (
              <>
                <td>{omeprazol.nombre}</td>
                <td>${omeprazol.precio}</td>
                <td><span className="cantidad">{omeprazol.cantidad}</span></td>
                <td>${subTotal(omeprazol.precio, cantidadOmeprazolPedido)}</td>
                <td><button onClick={agregarOmeprazolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarOmeprazolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {paracetamol.cantidad > 0 && (
              <>
                <td>{paracetamol.nombre}</td>
                <td>${paracetamol.precio}</td>
                <td><span className="cantidad">{paracetamol.cantidad}</span></td>
                <td>${subTotal(paracetamol.precio, cantidadParacetamolPedido)}</td>
                <td><button onClick={agregarParacetamolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarParacetamolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {ramipril.cantidad > 0 && (
              <>
                <td>{ramipril.nombre}</td>
                <td>${ramipril.precio}</td>
                <td><span className="cantidad">{ramipril.cantidad}</span></td>
                <td>${subTotal(ramipril.precio, cantidadRamiprilPedido)}</td>
                <td><button onClick={agregarRamiprilPedido} className="agregar">+</button></td>
                <td><button onClick={quitarRamiprilPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {aspirina.cantidad > 0 && (
              <>
                <td>{aspirina.nombre}</td>
                <td>${aspirina.precio}</td>
                <td><span className="cantidad">{aspirina.cantidad}</span></td>
                <td>${subTotal(aspirina.precio, cantidadAspirinaPedido)}</td>
                <td><button onClick={agregarAspirinaPedido} className="agregar">+</button></td>
                <td><button onClick={quitarAspirinaPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {salbutamol.cantidad > 0 && (
              <>
                <td>{salbutamol.nombre}</td>
                <td>${salbutamol.precio}</td>
                <td><span className="cantidad">{salbutamol.cantidad}</span></td>
                <td>${subTotal(salbutamol.precio, cantidadSalbutamolPedido)}</td>
                <td><button onClick={agregarSalbutamolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarSalbutamolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Total: ${Total()}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button className="realizar-pedido cancelar-pedido">Cancelar Pedido</button>
      <button className="realizar-pedido">Realizar Pedido</button>
    </section>
  )
}
          

export { HacerPedido };