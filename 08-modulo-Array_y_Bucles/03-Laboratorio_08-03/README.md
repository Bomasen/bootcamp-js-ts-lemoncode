Este código es parte de un juego de memoria en el que el jugador debe encontrar parejas de cartas. A continuación, se explica cada función paso a paso:

***MOTOR***

1. **`barajarCartas`**: Esta función recibe un array de cartas y las baraja utilizando el algoritmo de Fisher-Yates. Baraja aleatoriamente las cartas en el array.

2. **`sePuedeVoltearCarta`**: Verifica si una carta en el tablero puede ser volteada. Devuelve `true` si la carta no está volteada, de lo contrario, devuelve `false`.

3. **`asignarIndiceCartasVolteadas`**: Asigna los índices de las cartas que han sido volteadas al tablero. Si ya hay dos cartas volteadas, asigna el segundo índice; de lo contrario, asigna el primer índice.

4. **`comprobarNumeroCartasVolteadas`**: Comprueba si hay dos cartas volteadas en el tablero. Devuelve `true` si ambos índices están definidos, lo que indica que se han volteado dos cartas.

5. **`sonPareja`**: Compara las cartas volteadas para determinar si son una pareja. Devuelve `true` si las cartas tienen el mismo identificador de foto (`idFoto`), indicando que son una pareja.

6. **`parejaEncontrada`**: Marca las cartas como encontradas si forman una pareja y restablece los índices de cartas volteadas a `undefined`.

7. **`parejaNoEncontrada`**: Voltea las cartas de nuevo si no forman una pareja y restablece los índices de cartas volteadas a `undefined`.

8. **`sumarIntentos`**: Incrementa el contador de intentos. Utiliza una variable global llamada `intentos` y una función `setIntentos` para actualizar el número de intentos.

9. **`esPartidaCompleta`**: Verifica si todas las cartas en el tablero han sido encontradas y volteadas. Si es así, cambia el estado de la partida a "PartidaCompleta".

10. **`resetCartas`**: Recibe un array de cartas y las reinicia marcándolas como no encontradas y no volteadas.

11. **`resetTablero`**: Reinicia el estado del tablero, incluyendo el estado de las cartas, el estado de la partida, y los intentos. Utiliza la función `resetCartas` para reiniciar las cartas en el tablero.



***UI***

1. **Funciones de Tipo**: Las funciones `esElementoDiv` y `esElementoImagen` son funciones de tipo que verifican si un elemento es un `<div>` o `<img>`, respectivamente.

2. **Funciones de Cambio de Displays**:
   - `cambioDisplaysPartidaCompleta`: Oculta las imágenes de las cartas y muestra un mensaje cuando se completa la partida.
   - `cambioDisplaysPartidaIniciada`: Muestra las imágenes de las cartas al iniciar la partida.

3. **`mensajePartida`**: Actualiza el mensaje en la interfaz de usuario según el estado de la partida.

4. **`mensajeErrorCarta`**: Muestra un mensaje de error si no se puede voltear una carta.

5. **`mostrarIntentos`**: Actualiza el número de intentos en la interfaz de usuario.

6. **`voltearCarta`**: Voltea una carta en la interfaz de usuario y actualiza el estado del tablero.

7. **`atenuarCartas` y `cartasBocaAbajo`**: Aplican efectos visuales cuando se encuentran o no se encuentran parejas de cartas.

8. **`resetDivsCartas`**: Reinicia las imágenes y estilos de las cartas en la interfaz.

9. **`gestionCartasVolteadas`**: Gestiona las acciones cuando se encuentran o no se encuentran parejas de cartas.

10. **`efectoGiroCarta`**: Aplica un efecto visual de giro a una carta.

11. **Manejo de Eventos**:
    - `handleInicio`: Inicia la partida, baraja las cartas y muestra el mensaje de inicio.
    - `handleCarta`: Maneja la lógica cuando se hace clic en una carta.

12. **`eventos`**: Asigna eventos a los botones y cartas en la interfaz de usuario.
