### ESTO SON LOS PASOS QUE HE SEGUIDO EN EL EJERCICIO:

1- He desarrollado la parte del HTML utilizando la estructura ejemplo porporcionada por Lemoncode y dandole mi toque personal.
   He querido añadir varios contenedores DIV para crear los grupos de los botones y para el ingreso del turno manual.

2- En la parte del CSS también he añadido algunos estilos para dar un toque personal, añadiendo fuentes y backgrounds nuevos.


3-Luego he codificado la aplicación con Typescript realizando los siguientes pasos:

1. Primero, busco el elemento HTML con el id "numero-turno" y lo guardo en la variable "numeroTurno".

2. Luego, declaro una variable llamada "operador" de tipo número.

3. Si "numeroTurno" es un elemento HTML válido:
   - Compruebo si el contenido de texto de "numeroTurno" no es nulo.
   - Si no es nulo, convierto ese contenido de texto a un número entero y lo asigno a la variable "operador".

4. Después, busco los elementos HTML con los ids "siguiente", "anterior", "reset" e "ingresar" y los guardo en las variables correspondientes.

5. Si "numeroTurno" no es nulo:
   * Y SI "siguiente" es un botón HTML válido:
     - Añado un event listener para cuando se haga clic en el botón "siguiente".
     - Incremento la variable "operador" en uno.
     - Actualizo el contenido de texto de "numeroTurno" con el valor de "operador" convertido a cadena y con ceros adicionales si es necesario.

    * Y SI "anterior" es un botón HTML válido      
     - Añado un event listener para cuando se haga clic en el botón "anterior".
     -Y  Si el valor de "operador" es mayor o igual a 1:
     - Decremento la variable "operador" en uno.
     - Actualizo el contenido de texto de "numeroTurno" con el valor de "operador" convertido a cadena y con ceros adicionales si es necesario.

    * Y SI "reset" es un botón HTML válido   
    - Añado un event listener para cuando se haga clic en el botón "reset".
    - Establezco el valor de la variable "operador" a 0.
    - Actualizo el contenido de texto de "numeroTurno" con el valor de "operador" convertido a cadena y con ceros adicionales si es necesario.

    * Y SI "ingresar" es un botón HTML válido   
   - Añado un event listener para cuando se haga clic en el botón "ingresar".
   - Busco el elemento HTML con el id "turno-manual" y lo guardo en la variable "turnoManual".
   * Y Si "turnoManual" es un campo de entrada válido:
     * Y Si "turnoManual" no es nulo:
       - Convierto el valor de "turnoManual" a un número entero y lo asigno a la variable "operador".
       - Actualizo el contenido de texto de "numeroTurno" con el valor de "operador" convertido a cadena y con ceros adicionales si es necesario.