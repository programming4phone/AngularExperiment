export class Employee {

    constructor(
        public _firstname?: string,
        public _lastname?: string,
        public _position?: string,
        public _salary?: number
      ) {  }

      public get firstname(): string {
        return this._firstname;
      }

      public set firstname(fname: string) {
        this._firstname = fname;
      }

      public get lastname(): string {
        return this._lastname;
      }

      public set lastname(lname: string) {
        this._lastname = lname;
      }

      public get position(): string {
        return this._position;
      }

      public set position(pos: string) {
        this._position = pos;
      }

      public get salary(): number {
        return this._salary;
      }

      public set salary(sal: number) {
        this._salary = sal;
      }


}
