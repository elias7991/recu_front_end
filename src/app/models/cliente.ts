export class Cliente {
  ruc: string;
  nombre: string;
  email: string;


  constructor(ruc: string, name: string, email: string) {
    this.ruc = ruc;
    this.nombre = name;
    this.email = email;
  }
}
