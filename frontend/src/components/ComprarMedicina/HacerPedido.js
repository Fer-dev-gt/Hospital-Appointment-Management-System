import React from "react";
import { HospitalContext } from "../../Context";
import usuarioServicio from "../../services/usuarioServicio";
import './HacerPedido.css';


function HacerPedido(){

  const {
    usuarioLoggeado,
    setHacerPedido,
    medicinas,
    getReporteMedicinas,
    medicinasReportes,
  } = React.useContext(HospitalContext);

  React.useEffect(() => {
    console.log('Reporte de medinians en MedicinasMasVendidas.bin');
    getReporteMedicinas();
  }, [])

  console.log('Inventario de medicinas:', medicinas);
  console.log('usuarioLoggeado:', usuarioLoggeado);

  const [panadol, omeprazol, paracetamol, ramipril, aspirina, salbutamol] = medicinas;
  const [panadolReporte, omeprazolReporte, paracetamolReporte, ramiprilReporte, aspirinaReporte, salbutamolReporte] = medicinasReportes;

  const [cantidadPanadolPedido, setCantidadPanadolPedido] = React.useState(0);
  const [cantidadOmeprazolPedido, setCantidadOmeprazolPedido] = React.useState(0);
  const [cantidadParacetamolPedido, setCantidadParacetamolPedido] = React.useState(0);
  const [cantidadRamiprilPedido, setCantidadRamiprilPedido] = React.useState(0);
  const [cantidadAspirinaPedido, setCantidadAspirinaPedido] = React.useState(0);
  const [cantidadSalbutamolPedido, setCantidadSalbutamolPedido] = React.useState(0);

  const[cantidadPanadolPedidoReporte, setCantidadPanadolPedidoReporte] = React.useState(0);
  const[cantidadOmeprazolPedidoReporte, setCantidadOmeprazolPedidoReporte] = React.useState(0);
  const[cantidadParacetamolPedidoReporte, setCantidadParacetamolPedidoReporte] = React.useState(0);
  const[cantidadRamiprilPedidoReporte, setCantidadRamiprilPedidoReporte] = React.useState(0);
  const[cantidadAspirinaPedidoReporte, setCantidadAspirinaPedidoReporte] = React.useState(0);
  const[cantidadSalbutamolPedidoReporte, setCantidadSalbutamolPedidoReporte] = React.useState(0);


  const agregarPanadolPedido = () => { cantidadPanadolPedido < panadol.cantidad ? setCantidadPanadolPedido(cantidadPanadolPedido + 1) : alert('Ha superado el limite de unidades del medicamento')}
  const agregarOmeprazolPedido = () => { cantidadOmeprazolPedido < omeprazol.cantidad ? setCantidadOmeprazolPedido(cantidadOmeprazolPedido + 1) : alert('Ha superado el limite de unidades del medicamento')}
  const agregarParacetamolPedido = () => { cantidadParacetamolPedido < paracetamol.cantidad ? setCantidadParacetamolPedido(cantidadParacetamolPedido + 1) : alert('Ha superado el limite de unidades del medicamento')}
  const agregarRamiprilPedido = () => { cantidadRamiprilPedido < ramipril.cantidad ? setCantidadRamiprilPedido(cantidadRamiprilPedido + 1) : alert('Ha superado el limite de unidades del medicamento')}
  const agregarAspirinaPedido = () => { cantidadAspirinaPedido < aspirina.cantidad ? setCantidadAspirinaPedido(cantidadAspirinaPedido + 1) : alert('Ha superado el limite de unidades del medicamento')}
  const agregarSalbutamolPedido = () => { cantidadSalbutamolPedido < salbutamol.cantidad ? setCantidadSalbutamolPedido(cantidadSalbutamolPedido + 1) : alert('Ha superado el limite de unidades del medicamento')}

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


  const actualizarInvetarioMedicina = async (idMedicina) => {
    const medicinaToUpdate = medicinas.find(medicina => medicina.id === idMedicina);
    console.log('Guardando inventario medicina actualizada:', medicinaToUpdate);
    
    await usuarioServicio.actualizarMedicina(idMedicina, medicinaToUpdate);
    console.log('Datos de medicinas actualizadas', medicinas);
  }

  const actualizarReporteMedicina = async (idMedicina) => {
    const medicinaReporteToUpdate = medicinasReportes.find(medicinaReporte => medicinaReporte.id === idMedicina);
    console.log('Guardando reporte medicina actualizada:', medicinaReporteToUpdate);

    await usuarioServicio.actualizarMedicinasMasVendidas(idMedicina, medicinaReporteToUpdate);
    console.log('Datos de medicinas actualizadas', medicinasReportes);
  }

  
  const Total = () => cantidadPanadolPedido * panadol.precio + cantidadOmeprazolPedido * omeprazol.precio + cantidadParacetamolPedido * paracetamol.precio + cantidadRamiprilPedido * ramipril.precio + cantidadAspirinaPedido * aspirina.precio + cantidadSalbutamolPedido * salbutamol.precio;

  const realizarCompra = () => {
    panadol.cantidad -= cantidadPanadolPedido;
    setCantidadPanadolPedido(0);
    omeprazol.cantidad -= cantidadOmeprazolPedido;
    setCantidadOmeprazolPedido(0);
    paracetamol.cantidad -= cantidadParacetamolPedido;
    setCantidadParacetamolPedido(0);
    ramipril.cantidad -= cantidadRamiprilPedido;
    setCantidadRamiprilPedido(0);
    aspirina.cantidad -= cantidadAspirinaPedido;
    setCantidadAspirinaPedido(0);
    salbutamol.cantidad -= cantidadSalbutamolPedido;
    setCantidadSalbutamolPedido(0);

    panadolReporte.cantidadVendidas += cantidadPanadolPedido;
    setCantidadPanadolPedidoReporte(cantidadPanadolPedidoReporte + cantidadPanadolPedido);
    omeprazolReporte.cantidadVendidas += cantidadOmeprazolPedido;
    setCantidadOmeprazolPedidoReporte(cantidadOmeprazolPedidoReporte + cantidadOmeprazolPedido);
    paracetamolReporte.cantidadVendidas += cantidadParacetamolPedido;
    setCantidadParacetamolPedidoReporte(cantidadParacetamolPedidoReporte + cantidadParacetamolPedido);
    ramiprilReporte.cantidadVendidas += cantidadRamiprilPedido;
    setCantidadRamiprilPedidoReporte(cantidadRamiprilPedidoReporte + cantidadRamiprilPedido);
    aspirinaReporte.cantidadVendidas += cantidadAspirinaPedido;
    setCantidadAspirinaPedidoReporte(cantidadAspirinaPedidoReporte + cantidadAspirinaPedido);
    salbutamolReporte.cantidadVendidas += cantidadSalbutamolPedido;
    setCantidadSalbutamolPedidoReporte(cantidadSalbutamolPedidoReporte + cantidadSalbutamolPedido);

    medicinas[0] = panadol;
    medicinas[1] = omeprazol;
    medicinas[2] = paracetamol;
    medicinas[3] = ramipril;
    medicinas[4] = aspirina;
    medicinas[5] = salbutamol;

    medicinasReportes[0] = panadolReporte;
    medicinasReportes[1] = omeprazolReporte;
    medicinasReportes[2] = paracetamolReporte;
    medicinasReportes[3] = ramiprilReporte;
    medicinasReportes[4] = aspirinaReporte;
    medicinasReportes[5] = salbutamolReporte;
  
    console.log('Inventario de medicinas actualizado:', medicinas);
    console.log('Compra realizada exitosamente');
    console.log('Reporte de medicinas actualizado:', medicinasReportes);

    actualizarInvetarioMedicina(panadol.id);
    actualizarInvetarioMedicina(omeprazol.id);
    actualizarInvetarioMedicina(paracetamol.id);
    actualizarInvetarioMedicina(ramipril.id);
    actualizarInvetarioMedicina(aspirina.id);
    actualizarInvetarioMedicina(salbutamol.id);

    actualizarReporteMedicina(panadolReporte.id);
    actualizarReporteMedicina(omeprazolReporte.id);
    actualizarReporteMedicina(paracetamolReporte.id);
    actualizarReporteMedicina(ramiprilReporte.id);
    actualizarReporteMedicina(aspirinaReporte.id);
    actualizarReporteMedicina(salbutamolReporte.id);
  }
  
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
            <th>Agregar</th>
            <th>Quitar</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            {panadol.cantidad > 0 && (
              <>
                <td>{panadol.nombre}</td>
                <td>Q {panadol.precio}.00</td>
                <td><span className="cantidad">{panadol.cantidad}</span></td>
                <td>Q {subTotal(panadol.precio, cantidadPanadolPedido)}.00</td>
                <td><button onClick={agregarPanadolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarPanadolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {omeprazol.cantidad > 0 && (
              <>
                <td>{omeprazol.nombre}</td>
                <td>Q {omeprazol.precio}.00</td>
                <td><span className="cantidad">{omeprazol.cantidad}</span></td>
                <td>Q {subTotal(omeprazol.precio, cantidadOmeprazolPedido)}.00</td>
                <td><button onClick={agregarOmeprazolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarOmeprazolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {paracetamol.cantidad > 0 && (
              <>
                <td>{paracetamol.nombre}</td>
                <td>Q {paracetamol.precio}.00</td>
                <td><span className="cantidad">{paracetamol.cantidad}</span></td>
                <td>Q {subTotal(paracetamol.precio, cantidadParacetamolPedido)}.00</td>
                <td><button onClick={agregarParacetamolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarParacetamolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {ramipril.cantidad > 0 && (
              <>
                <td>{ramipril.nombre}</td>
                <td>Q {ramipril.precio}.00</td>
                <td><span className="cantidad">{ramipril.cantidad}</span></td>
                <td>Q {subTotal(ramipril.precio, cantidadRamiprilPedido)}.00</td>
                <td><button onClick={agregarRamiprilPedido} className="agregar">+</button></td>
                <td><button onClick={quitarRamiprilPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {aspirina.cantidad > 0 && (
              <>
                <td>{aspirina.nombre}</td>
                <td>Q {aspirina.precio}.00</td>
                <td><span className="cantidad">{aspirina.cantidad}</span></td>
                <td>Q {subTotal(aspirina.precio, cantidadAspirinaPedido)}.00</td>
                <td><button onClick={agregarAspirinaPedido} className="agregar">+</button></td>
                <td><button onClick={quitarAspirinaPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            {salbutamol.cantidad > 0 && (
              <>
                <td>{salbutamol.nombre}</td>
                <td>Q {salbutamol.precio}.00</td>
                <td><span className="cantidad">{salbutamol.cantidad}</span></td>
                <td>Q {subTotal(salbutamol.precio, cantidadSalbutamolPedido)}.00</td>
                <td><button onClick={agregarSalbutamolPedido} className="agregar">+</button></td>
                <td><button onClick={quitarSalbutamolPedido} className="eliminar">-</button></td>
              </>
            )}
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Total: Q {Total()}.00</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="botones-ordenes">
        <button onClick={()=>{setHacerPedido(false)}}className="realizar-pedido cancelar-pedido">Cancelar Pedido</button>
        <button onClick={()=>{realizarCompra()}} className="realizar-pedido">Realizar Pedido</button>
      </div>
    </section>
  )
}
          

export { HacerPedido };