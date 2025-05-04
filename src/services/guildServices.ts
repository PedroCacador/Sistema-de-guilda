import { Achievement } from "../models/achievement";
import { Guild } from "../models/guild";

const Guilds: Guild[] = [
    { id: 1, name: "Atherium", level: 5, members: []},
    { id: 2, name: "Shadow Order", level: 1, members: []},
    { id: 3, name: "Escarlation", level: 2, members: []}
];

export function getGuildById(id: number): Guild | undefined {

    const guild = Guilds.find((g) => id === g.id);

    return guild;
}

