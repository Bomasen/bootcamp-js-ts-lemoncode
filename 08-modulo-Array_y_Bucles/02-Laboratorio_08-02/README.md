ESTO SON LOS PASOS QUE HE SEGUIDO EN EL EJERCICIO:

*APARTADO 1:*  

a) Se utiliza el método filter() para crear listaPacientesPediatria. Filtra la lista de pacientes, incluyendo solo aquellos cuya especialidad es "Pediatra".
b) Se utiliza nuevamente filter() para crear listaPacientesPediatriaMenor10. Filtra la lista anterior, incluyendo solo aquellos pacientes con una edad menor a 10 años.

*APARTADO 2:*  

Se utiliza el método some() para crear activarProtocoloUrgencia. Retorna true si al menos un paciente tiene una frecuencia cardíaca superior a 100 y una temperatura corporal superior a 39.

*APARTADO 3:*  

Se utiliza el método map() para crear reasignaPacientesAMedicoFamilia. Recorre la lista de pacientes y crea una nueva lista donde los pacientes con especialidad "Pediatra" se han reasignado a "Medico de familia".

*APARTADO 4:*  

Se utiliza some() nuevamente para crear HayPacientesDePediatria. Retorna true si al menos un paciente tiene la especialidad de "Pediatra".

*APARTADO 5:*    

Se utiliza el método reduce() para crear cuentaPacientesPorEspecialidad. Recorre la lista de pacientes y acumula el número de pacientes por especialidad en un objeto.
He tenido que forzar el tipado del objeto que devuelve reduce con as Recorder (Especialidad,number) para que Typescript infiera de forma correcta. (Fuente : chatGPT)






