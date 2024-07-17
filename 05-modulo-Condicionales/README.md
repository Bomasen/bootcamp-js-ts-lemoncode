### ESTO SON LOS PASOS QUE HE SEGUIDO EN EL EJERCICIO:

1- He desarrollado la parte del HTML utilizando la estructura ejemplo porporcionada por Lemoncode y dandole mi toque personal.
   He querido añadir varios contenedores DIV para crear los grupos de los botones.

2- En la parte del CSS también he añadido algunos estilos para dar un toque personal, añadiendo fuentes y backgrounds nuevos.


3-Luego he codificado la aplicación con Typescript realizando los siguientes pasos:

1. Inicialización de la Puntuación:
En primer lugar, inicializo mi puntuación en cero (let puntuacion: number = 0;). Este valor se actualiza a medida que juego y sumo puntos.  

2. Generación de Números Aleatorios:
Para obtener cartas aleatorias, utilizo la función numeroAleatorio(), que me proporciona un número entre 1 y 12. Esto simula la extracción de cartas de una baraja.  

3. Mostrar la Puntuación en la Interfaz:
La función mostrarPuntos() actualiza la visualización de mi puntuación en la interfaz, tomando el elemento HTML con el id "puntos" y actualizando su contenido.  

4. Generación y Evaluación de Cartas:
La función numeroCarta() evalúa el número aleatorio que obtengo. Si es 8 o 9, se suma 2 ya que no existen estas cartas; de lo contrario, si está entre 1 y 12, se mantiene igual. Esto simula las reglas del juego en cuanto a la valoración de las cartas.  

5. Sumar Puntos:
Cuando recibo una carta, la función sumarPuntos() evalúa la carta y actualiza mi puntuación. Si la carta es menor o igual a 7, sumo su valor nominal a la puntuación; de lo contrario, sumo 0.5.  

6. Mostrar Carta y Mensajes:
La función mostrarCarta() se encarga de mostrar visualmente la carta en la interfaz, cambiando la imagen y mostrando un mensaje asociado a la carta que recibí donde indico la puntuación sumada.  

7. Manejo de Eventos:
Los botones "Pedir", "Salir", "Nuevo" y "Ver" tienen funciones asociadas que se ejecutan cuando se hace clic en ellos. Por ejemplo, handlePedir() llama a funciones para generar y mostrar una nueva carta, sumar puntos y actualizar la interfaz.  

8. Evento "DOMContentLoaded":
Cuando la página se carga completamente, se ejecuta un bloque de código que inicializa la interfaz mostrando la puntuación, asigna eventos a los botones y muestra un mensaje de inicio.  

9. Cambiar Visualización de Botones:
La función cambiarVistaBotones() oculta los botones de "Pedir" y "Salir" y muestra los de "Nuevo" y "Ver" en ciertas condiciones, lo que refleja cambios en el juego.  

10. Fin de la Partida:
La función gameOver() verifica si mi puntuación supera 7.5 y, en ese caso, cambia la visualización de los botones y muestra una carta especial, indicando el fin de la partida.  

11. Función "Me Planto":
Cuando decido plantarme (mePlanto(puntuacion)), esta función evalúa mi puntuación y muestra un mensaje personalizado según el rango de puntos en el que me encuentre.  

12. Reiniciar el Juego:
EmpezarDeNuevo() simplemente recarga la página, permitiéndome comenzar una nueva partida.  

13. Ver Resultado de una Carta Adicional:
verResultadoSiguiente() genera una nueva carta, la muestra, suma puntos y actualiza la interfaz sin cambiar la visualización de los botones para que el usuario vea que hubiera pasado al continuar.

El botón de ver resultado siguiente solo se muestra si al plantarse la puntuación es menor que 7.5.