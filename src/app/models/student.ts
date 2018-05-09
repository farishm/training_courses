export class Student {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  addresses: Address[];
  phones: Phone[];
  level: string;
  agreedTerms: string;
}



export interface Address {
  type: string;
  line1: string;
  city: string;
  postcode: string;
  county: string;
}

export interface Phone {
  type: string;
  number: string;
}