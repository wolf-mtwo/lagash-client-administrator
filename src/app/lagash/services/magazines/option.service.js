export class MagazineOption {

  constructor() {
    'ngInject';
    this.months = [{
      key: 1,
      value: 'Enero'
    }, {
      key: 2,
      value: 'Febrero'
    }, {
      key: 3,
      value: 'Marzo'
    }, {
      key: 4,
      value: 'Abril'
    }, {
      key: 5,
      value: 'Mayo'
    }, {
      key: 6,
      value: 'Junio'
    }, {
      key: 7,
      value: 'Julio'
    }, {
      key: 8,
      value: 'Agosto'
    }, {
      key: 9,
      value: 'Septiembre'
    }, {
      key: 10,
      value: 'Octubre'
    }, {
      key: 11,
      value: 'Noviembre'
    }, {
      key: 12,
      value: 'Diciembre'
    }];

    this.types = [{
      key: 'otros',
      value: 'Otros'
    }, {
      key: 'volumen',
      value: 'Volumen'
    }, {
      key: 'tomo',
      value: 'Tomo'
    }];

    this.covers = [{
      key: 'otros',
      value: 'Otros'
    }, {
      key: 'rustico',
      value: 'Rustico'
    }, {
      key: 'empastado',
      value: 'Empastado'
    }, {
      key: 'anillado',
      value: 'Anillado'
    }];

    this.illustrations = [{
      key: 'otros',
      value: 'Otros'
    }, {
      key: 'cuadros',
      value: 'Cuadros'
    }, {
      key: 'fotos',
      value: 'Fotos'
    }, {
      key: 'tablas',
      value: 'Tablas'
    }, {
      key: 'figuras',
      value: 'Figuras'
    }];

    this.brings = [{
      key: 'otros',
      value: 'Otros'
    }, {
      key: 'cd',
      value: 'CD'
    }];
  }

  getYears() {
    var date = new Date();
    var counter = date.getFullYear();
    counter -= 5;
    var result = [];
    for (var i = 0; i < 10; i++) {
      result.push({
        key: counter,
        value: counter
      });
      counter++;
    }
    return result;
  }

  get_year() {
    var date = new Date();
    return date.getFullYear();
  }
}
