import { Request, Response } from "express";
import { getGuildById } from "../services/guildServices";
import { getAchievementsByGuild } from "../services/achievementsServices";

export function getGuildByIdController(req: Request, res: Response): void {
    const id:number = parseInt(req.params.id);

    const guild = getGuildById(id);
    res.status(200).json(guild);
}

export function getAchievementsByGuildController(req: Request, res:Response): void{
    const id:number = parseInt(req.params.id);

    const guild = getAchievementsByGuild(id);
    res.status(200).json(guild);
}
