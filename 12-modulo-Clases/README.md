**Aquí tienes una descripción paso a paso del código implementado**

1. *Importación de módulos y definición de clases base e interfaces*:
   - Se importan los módulos necesarios y se definen las interfaces `Precios` y `Reserva`.
   - Se define la clase base `ReservasHotel` junto con sus propiedades y métodos.

2. *Definición de la clase base `ReservasHotel`*:
   - Se definen propiedades privadas para el IVA, el costo de los desayunos, los precios de las habitaciones, el descuento y el recargo.
   - Se declara una propiedad pública `reservas` para almacenar las reservas de hotel.
   - En el constructor, se inicializan las propiedades privadas y se asignan las reservas proporcionadas.

3. *Métodos setters de la clase base*:
   - Se definen métodos setters para actualizar los precios de las habitaciones (`preciosHabitaciones`), el descuento (`descuento`), y el recargo (`recargo`). Estos métodos permiten ajustar dinámicamente los valores de estas propiedades.

4. *Métodos getters de la clase base*:
   - Se definen métodos getters para calcular el subtotal (`subtotal`) y el total (`total`) de las reservas.
   - El método `mostrarResultados()` devuelve un objeto con el subtotal y el total formateados como cadenas de texto.

5. *Definición de las clases hijas `ReservasParticular` y `ReservasTourOperador`*:
   - Se definen clases hijas que heredan de la clase base `ReservasHotel`.
   - En el constructor de `ReservasParticular`, se establecen los precios de las habitaciones para clientes particulares y el recargo por persona adicional.
   - En el constructor de `ReservasTourOperador`, se establecen los precios de las habitaciones para tour operador y el descuento aplicable.

6. *Creación de instancias de las clases hijas y visualización de resultados*:
   - Se crean instancias de las clases hijas `ReservasParticular` y `ReservasTourOperador`, pasando las reservas como argumento.
   - Se llaman a los métodos `mostrarResultados()` de cada instancia para imprimir en la consola el subtotal y el total de las reservas para cada tipo de cliente.
