import { Participant } from "./participant";

export interface Event {
    idEvent?: number;
    title: string;
    participants: Participant[];
}
