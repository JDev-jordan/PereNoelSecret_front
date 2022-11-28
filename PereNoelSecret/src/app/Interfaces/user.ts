import { Role } from "../Intefaces/role";

export interface User {
    id? : number;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    roles : Role[];
}
