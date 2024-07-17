import {
  IVA_GENERAL,
  IVA_REDUCIDO,
  IVA_SUPERREDUCIDO_A,
  IVA_SUPERREDUCIDO_B,
  IVA_SUPERREDUCIDO_C,
  LineaTicket,
  ResultadoLineaTicket,
  IVA_SIN,
  ResultadoTotalTicket,
  TipoIva,
  TotalPorTipoIva,
} from "./index";
const porcentajeTipoIva = (tipoIva: TipoIva) => {
  switch (tipoIva) {
    case "general":
      return IVA_GENERAL;
    case "reducido":
      return IVA_REDUCIDO;
    case "superreducidoA":
      return IVA_SUPERREDUCIDO_A;
    case "superreducidoB":
      return IVA_SUPERREDUCIDO_B;
    case "superreducidoC":
      return IVA_SUPERREDUCIDO_C;
    case "sinIva":
      return IVA_SIN;
    default:
      return NaN;
  }
};

const calculaPrecioTotalSinIva = (precio: number, cantidad: number): number =>
  Number((precio * cantidad).toFixed(2));



const calculaImporteIva = (tipoIva: TipoIva, precio: number, cantidad: number): number => {
  const tipoIvaProducto = porcentajeTipoIva(tipoIva);
  return cantidad
    ? Number((tipoIvaProducto * precio * cantidad).toFixed(2))
    : Number((tipoIvaProducto * precio).toFixed(2));
};

const calculaPrecioTotalConIva = (tipolIva: TipoIva, precio: number, cantidad: number): number => {
  const precioProductoSinIva = calculaPrecioTotalSinIva(precio, cantidad);
  const importeIva = calculaImporteIva(tipolIva, precio, cantidad);
  const precioProductoConIva = precioProductoSinIva + importeIva;

  return Number(precioProductoConIva.toFixed(2));
};

export const calculaTicket = (lineasTicket: LineaTicket[]): ResultadoLineaTicket[] => {
  const ticketFinal: ResultadoLineaTicket[] = lineasTicket.map((ticket) => {
    return {
      nombre: ticket.producto.nombre,
      cantidad: ticket.cantidad,
      precionSinIva: calculaPrecioTotalSinIva(ticket.producto.precio, ticket.cantidad),
      tipoIva: ticket.producto.tipoIva,
      precioConIva: calculaPrecioTotalConIva(
        ticket.producto.tipoIva,
        ticket.producto.precio,
        ticket.cantidad
      ),
    };
  });
  return ticketFinal;
};

export const calculaTicketTotal = (
  resultadoLineasTicket: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  const resultadoTicketTotal: ResultadoTotalTicket = resultadoLineasTicket.reduce(
    (acc: ResultadoTotalTicket, ticket: ResultadoLineaTicket) => {
      const totalSinIva = acc.totalSinIva + ticket.precionSinIva;
      const totalConIva = acc.totalConIva + ticket.precioConIva;
      const totalIva = acc.totalIva + (ticket.precioConIva - ticket.precionSinIva);
      return {
        totalSinIva: Number(totalSinIva.toFixed(2)),
        totalConIva: Number(totalConIva.toFixed(2)),
        totalIva: Number(totalIva.toFixed(2)),
      };
    },
    { totalSinIva: 0, totalConIva: 0, totalIva: 0 }
  );

  return resultadoTicketTotal;
};

const calculaTotalPorTipoIva = (
  resultadoLineasTicket: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const resultado: TotalPorTipoIva[] = resultadoLineasTicket.map((ticket) => {
    return {
      tipoIva: ticket.tipoIva,
      cuantia: ticket.precioConIva-ticket.precionSinIva
    };
  });
  return resultado;
};

export const calculaSumaTotalPorTipoIva = (
  resultadoLineasTicket: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const totalPorTipoIva: TotalPorTipoIva[] = calculaTotalPorTipoIva(resultadoLineasTicket);
  const totalSumaTotalPorTipoIva: TotalPorTipoIva[] = [];

  for (let i = 0; i < totalPorTipoIva.length; i++) {
    const existeTipo = totalSumaTotalPorTipoIva.find(
      (tipo) => tipo.tipoIva === totalPorTipoIva[i].tipoIva
    );

    existeTipo
      ? (existeTipo.cuantia += totalPorTipoIva[i].cuantia)
      : totalSumaTotalPorTipoIva.push({
          tipoIva: totalPorTipoIva[i].tipoIva,
          cuantia: totalPorTipoIva[i].cuantia,
        });
  }

  return totalSumaTotalPorTipoIva;
};
