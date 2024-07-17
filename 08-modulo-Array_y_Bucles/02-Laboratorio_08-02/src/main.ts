type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1

//a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const listaPacientesPediatria: Pacientes[] = pacientes.filter(
  (paciente) => paciente.especialidad === "Pediatra"
);

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const listaPacientesPediatriaMenor10: Pacientes[] = pacientes.filter(
  (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
);

//APARTADO 2

//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
//Es decir, crear una función que devuelve true/false dependiendo si se da la condición.

const activarProtocoloUrgencia: boolean = pacientes.some(
  (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
);
//APARTADO 3
//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia: Pacientes[] = pacientes.map((paciente) =>
  paciente.especialidad === "Pediatra"
    ? { ...paciente, especialidad: "Medico de familia" }
    : paciente
);

//APARTADO 4
//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados),
//comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria: boolean = pacientes.some(
  (paciente) => paciente.especialidad === "Pediatra"
);

//APARTADO 5
//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}
const totalSumaPacientesPorEspecialidad = (pacientes: Pacientes[], especialidad: Especialidad) =>  pacientes.reduce(
    (total, paciente) => paciente.especialidad === especialidad ? ++total : total,0);

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => ({
  cardiologia: totalSumaPacientesPorEspecialidad(pacientes,"Cardiólogo"),
  medicoDeFamilia: totalSumaPacientesPorEspecialidad(pacientes,"Medico de familia"),
  pediatria: totalSumaPacientesPorEspecialidad(pacientes,"Pediatra"),
});

/*const cuentaPacientesPorEspecialidad = pacientes.reduce((acumulador, paciente) => {
  !acumulador[paciente.especialidad]
    ? (acumulador[paciente.especialidad] = 1)
    : acumulador[paciente.especialidad]++;
  return acumulador;
}, {} as Record<Especialidad, number>);
*/

//VISUALIZACION DATOS EN CONSOLA
const iniciarConsola = (): void => {
  console.log("LISTA ORIGINAL:", pacientes);
  console.log("LISTA PACIENTES PEDIATRÍA:", listaPacientesPediatria);
  console.log("LISTA PACIENTES PEDIATRÍA MENORES DE 10 AÑOS:", listaPacientesPediatriaMenor10);
  console.log("ESTADO PROTOCOLO DE URGENCIA:", activarProtocoloUrgencia);
  console.log("NUEVA LISTA PACIENTES DE PEDIATRIA REASIGNADOS:", reasignaPacientesAMedicoFamilia);
  console.log("EXISTENCIA PACIENTES PARA PEDIATRÍA:", HayPacientesDePediatria);
  console.log("TOTAL PACIENTES POR ESPECIALIDAD:", cuentaPacientesPorEspecialidad(pacientes));
};
addEventListener("DOMContentLoaded", iniciarConsola);
