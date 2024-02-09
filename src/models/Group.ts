import { Participant } from "./Participant";

export type Group = {
    id: number;
    name: string;
    participants: Participant[];
}