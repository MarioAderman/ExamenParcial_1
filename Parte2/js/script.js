      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */
let btn = document.getElementById("btn_mayusculas").addEventListener("click", capturaElementos);

function capturaElementos(e){
  e.preventDefault();
  let nombres = document.getElementById("txt_may");
  console.log(nombres)
  let nombresArray = nombres.split(',');
  console.log(nombresArray)
}



      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */
let btn_2 = document.getElementById("btn_añoshumano").addEventListener("click", convertir)

function convertir(e){
  e.preventDefault();
  let edad_humano = parseInt(document.getElementById("edad_humano").value) * 7;
  document.getElementById("edad_perro").value = edad_humano;
}


      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */
       let btn_3 = document.getElementById("btn_muestra").addEventListener("click", ponerPokemones)

       function ponerPokemones(e){
         e.preventDefault();
        document.getElementById("nombre_poke1").value = this.nombre;
        document.getElementById("especie_poke1").value = this.especie;
        document.getElementById("ataque_poke1").value = this.ataque;
        document.getElementById("defensa_poke1").value = this.defensa;
        document.getElementById("nombre_poke2").value = this.nombre;
        document.getElementById("especie_poke2").value = this.especie;
        document.getElementById("ataque_poke2").value = this.ataque;
        document.getElementById("defensa_poke2").value = this.defensa;
       }

       function displayPokemon(){
        console.log(`${this.nombre} ${this.especie} ${this.ataque} ${this.defensa}`);
        /*document.getElementById("nombre_poke1").value = this.nombre;
        document.getElementById("especie_poke1").value = this.especie;
        document.getElementById("ataque_poke1").value = this.ataque;
        document.getElementById("defensa_poke1").value = this.defensa;*/
      }
      
      function Pokemon(nombre, especie, ataque, defensa){
        this.nombre = nombre;
        this.especie = especie;
        this.ataque = ataque;
        this.defensa = defensa;
        this.displayPokemon = displayPokemon;
      }
      
      let Poke1 = new Pokemon('Charizard', 'Fuego', '100', '70')
      let Poke2 = new Pokemon('Blastoise', 'Agua', '70', '100')
      
      Poke1.displayPokemon()
      Poke2.displayPokemon()