class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
  }

  addname() {
    return this.nombre;
  }

  showStats() {
    const nombre = this.nombre;
    const fuerza_ninja = this.fuerza;
    const velo_ninja = this.velocidad;
    const salud_ninja = this.salud;
    console.log(
      "->",
      "Nombre: " + nombre,
      "Salud: " + salud_ninja,
      "Velocidad: " + velo_ninja,
      "Fuerza: " + fuerza_ninja
    );
  }
  drinkSake() {
    console.log(
      "-> Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses"
    );
  }
}

class Sensei extends Ninja {
  constructor(nombre, salud, velocidad, fuerza) {
    super(nombre, salud, velocidad, fuerza);
    this.sabiduaria = 10;
  }

  speakWisdom() {
    let showspeakWisdom_padre = super.drinkSake();
    return showspeakWisdom_padre;
  }

  showStats() {
    let showStats_padre = super.showStats();

    return showStats_padre;
  }
}

const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();
superSensei.showStats();
