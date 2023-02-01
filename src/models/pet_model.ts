/* eslint-disable no-unused-vars */
// V Haciendo el modelado de datos
type hasId = {
  id: string;
};

export type ProtoPetStructure = {
  name: string;
  breed: string;
  isAdopted: boolean;
  owner: string;
};
export type PetStructure = hasId & ProtoPetStructure;

export class Pet implements PetStructure {
  public id: string;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(
    public name: string,
    public breed: string,
    public isAdopted: boolean,
    public owner: string
  ) {
    // Cuando declaro las propiedades dentro de las llaves del constructor es xq ya les estoy pasando valores.
    this.id = '';
  }
}
