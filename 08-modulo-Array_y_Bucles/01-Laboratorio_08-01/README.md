ESTO SON LOS PASOS QUE HE SEGUIDO EN EL EJERCICIO:

*APARTADO 1:*  

Extracción de Pacientes por Especialidad y Edad

a) listaPacientesPediatria: Esta función toma una lista de pacientes y devuelve una nueva lista que contiene solo aquellos pacientes asignados a la especialidad de Pediatría.

b) listaPacientesPediatriaMenor10: Similar a la anterior, pero esta función filtra aún más, incluyendo solo los pacientes de Pediatría que tienen menos de 10 años.

*APARTADO 2:*  

Activación del Protocolo de Urgencia

activarProtocoloUrgencia: Esta función verifica si alguno de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados. Devuelve true si se cumple la condición para activar el protocolo de urgencia, de lo contrario, devuelve false.

*APARTADO 3:*  

Reasignación de Pacientes a Médico de Familia

reasignaPacientesAMedicoFamilia: Esta función reasigna a los pacientes de la especialidad de Pediatría a la especialidad de Médico de Familia, creando una nueva lista de pacientes.

*APARTADO 4:*  

Verificación de Pacientes de Pediatría

HayPacientesDePediatria: Verifica si hay pacientes asignados a la especialidad de Pediatría. Devuelve true si hay al menos un paciente, de lo contrario, devuelve false.

*APARTADO 5:*    

Conteo de Pacientes por Especialidad

cuentaPacientesPorEspecialidad: Esta función calcula el número total de pacientes asignados a las especialidades de Médico de Familia, Pediatría y Cardiología. Devuelve un objeto con los recuentos para cada especialidad.

VISUALIZACIÓN DE DATOS EN CONSOLA:

iniciarConsola: Esta función imprime en la consola la lista original de pacientes, la lista de pacientes de Pediatría, la lista de pacientes de Pediatría menores de 10 años, el estado del protocolo de urgencia, la nueva lista de pacientes con reasignación a Médico de Familia, la existencia de pacientes de Pediatría y el total de pacientes por especialidad. Además, se inicia cuando el contenido del DOM está cargado.






