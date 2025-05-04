import { Achievement } from "./achievement";
import { Member } from "./member";

export interface Guild  {
    id:number;
    name:string;
    level:number;
    members:Member[];
}


