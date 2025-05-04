import { Achievement } from "../models/achievement";

const Achievements: Achievement[] = [
    { id: 1, guildId: 1 }, { id: 2, guildId: 2 }, { id: 3, guildId: 3 }, { id: 4, guildId: 1 }
];

export function getAchievementsByGuild(id: number): Achievement[] | undefined {

    const achievements = Achievements.filter((a) => a.guildId === id);

    return achievements;
}
