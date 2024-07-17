export interface CodigosIBAN {
  nombreBanco: string ;
  codigoOficina: string;
  codigoControl: string;
  numeroCuenta: string;
}

export interface InformacionIBAN{
    ibanBienFormado: boolean,
    ibanValido:boolean,
    codigosIban?:CodigosIBAN
}

export const bancos = [
    { codigo: '2080', nombre: 'Abanca Corporación Bancaria' },
    { codigo: '0061', nombre: 'Banca March' },
    { codigo: '0188', nombre: 'Banco Alcalá' },
    { codigo: '0182', nombre: 'Banco Bilbao Vizcaya Argentaria' },
    { codigo: '0130', nombre: 'Banco Caixa Geral' },
    { codigo: '0234', nombre: 'Banco Caminos' },
    { codigo: '2105', nombre: 'Banco Castilla-La Mancha' },
    { codigo: '0240', nombre: 'Banco de Crédito Social Cooperativo' },
    { codigo: '0081', nombre: 'Banco de Sabadell' },
    { codigo: '0487', nombre: 'Banco Mare Nostrum' },
    { codigo: '0186', nombre: 'Banco Mediolanum' },
    { codigo: '0238', nombre: 'Banco Pastor' },
    { codigo: '0075', nombre: 'Banco Popular Español' },
    { codigo: '0049', nombre: 'Banco Santander' },
    { codigo: '3873', nombre: 'Banco Santander Totta' },
    { codigo: '2038', nombre: 'Bankia' },
    { codigo: '0128', nombre: 'Bankinter' },
    { codigo: '0138', nombre: 'Bankoa' },
    { codigo: '0152', nombre: 'Barclays Bank PLC' },
    { codigo: '3842', nombre: 'BNP Paribas Paris' },
    { codigo: '3025', nombre: 'Caixa de Credit del Enginyers' },
    { codigo: '2100', nombre: 'Caixabank' },
    { codigo: '2045', nombre: 'Caja de Ahorros y Monte de Piedad de Ontinyent' },
    { codigo: '3035', nombre: 'Caja Laboral Popular CC' },
    { codigo: '3081', nombre: 'Caja Rural Castilla-La Mancha' },
    { codigo: '3058', nombre: 'Cajamar Caja Rural' },
    { codigo: '2000', nombre: 'Cecabank' },
    { codigo: '1474', nombre: 'Citibank Europe PLC' },
    { codigo: '3821', nombre: 'Commerzbank AG' },
    { codigo: '3877', nombre: 'Danske Bank A/S' },
    { codigo: '0019', nombre: 'Deutsche Bank SAE' },
    { codigo: '0239', nombre: 'EVO Banco' },
    { codigo: '2085', nombre: 'Ibercaja Banco' },
    { codigo: '1465', nombre: 'ING Bank NV' },
    { codigo: '2095', nombre: 'Kutxabank' },
    { codigo: '2048', nombre: 'Liberbank' },
    { codigo: '0131', nombre: 'Novo Banco' },
    { codigo: '0073', nombre: 'Open Bank' },
    { codigo: '0108', nombre: 'Société Générale' },
    { codigo: '2103', nombre: 'Unicaja Banco' }
  ];
  
