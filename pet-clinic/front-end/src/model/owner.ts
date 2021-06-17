import { Pet } from "./pet";

export interface Owner {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    phone: string;
    pets: [Pet];
}