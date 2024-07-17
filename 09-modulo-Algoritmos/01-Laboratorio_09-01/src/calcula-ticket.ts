import {
  calculaSumaTotalPorTipoIva,
  calculaTicket,
  calculaTicketTotal,
  productos,
  TicketFinal,
  LineaTicket,
} from "./index";

const calculaTicketFinal = (ticket: LineaTicket[]): TicketFinal => {
  const lineas = calculaTicket(ticket);
  const total = calculaTicketTotal(lineas);
  const desgloseIva = calculaSumaTotalPorTipoIva(lineas);
  return { lineas, total, desgloseIva };
};

addEventListener("DOMContentLoaded", () => console.log(calculaTicketFinal(productos)));
