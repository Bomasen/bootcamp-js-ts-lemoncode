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

const listaPacientesPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  const listaPacientesPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      listaPacientesPediatria.push(pacientes[i]);
    }
  }
  return listaPacientesPediatria;
};

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const listaPacientesPediatriaMenor10 = (pacientes: Pacientes[]): Pacientes[] => {
  const listaPacientesPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      listaPacientesPediatria.push(pacientes[i]);
    }
  }
  return listaPacientesPediatria;
};

//APARTADO 2

//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.
//Es decir, crear una función que devuelve true/false dependiendo si se da la condición.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProctolo = true;
      break;
    }
  }
  return activarProctolo;
};

//APARTADO 3
//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let nuevaListaPacientes: Pacientes[] = [...pacientes];
  for (let i = 0; i < nuevaListaPacientes.length; i++) {
    if (nuevaListaPacientes[i].especialidad === "Pediatra") {
      const pacientesReasignados: Pacientes = {
        ...nuevaListaPacientes[i],
        especialidad: "Medico de familia",
      };
      nuevaListaPacientes = [
        ...nuevaListaPacientes.slice(0, i),
        pacientesReasignados,
        ...nuevaListaPacientes.slice(i + 1),
      ];
    }
  }
  return nuevaListaPacientes;
};

//APARTADO 4
//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados),
//comprobar si en la lista hay algún paciente asignado a pediatría

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatriaSinPacientes: boolean = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pediatriaSinPacientes = true;
      break;
    }
  }
  return pediatriaSinPacientes;
};

//APARTADO 5
//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  const numeroPacientesPorEspecialidad: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      numeroPacientesPorEspecialidad.medicoDeFamilia += 1;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      numeroPacientesPorEspecialidad.pediatria += 1;
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      numeroPacientesPorEspecialidad.cardiologia += 1;
    }
  }
  return numeroPacientesPorEspecialidad;
};

//VISUALIZACION DATOS EN CONSOLA
const iniciarConsola = (): void => {
  console.log("LISTA ORIGINAL:", pacientes);
  console.log("LISTA PACIENTES PEDIATRÍA:", listaPacientesPediatria(pacientes));
  console.log(
    "LISTA PACIENTES PEDIATRÍA MENORES DE 10 AÑOS:",
    listaPacientesPediatriaMenor10(pacientes)
  );
  console.log("ESTADO PROTOCOLO DE URGENCIA:", activarProtocoloUrgencia(pacientes));
  console.log(
    "NUEVA LISTA CON PACIENTES DE PEDIATRIA REASIGNADOS:",
    reasignaPacientesAMedicoFamilia(pacientes)
  );
  console.log("EXISTENCIA PACIENTES PARA PEDIATRÍA:", HayPacientesDePediatria(pacientes));
  console.log("TOTAL PACIENTES POR ESPECIALIDAD:", cuentaPacientesPorEspecialidad(pacientes));
};
addEventListener("DOMContentLoaded", iniciarConsola);
