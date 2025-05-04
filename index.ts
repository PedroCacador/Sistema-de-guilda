import cors from "cors";
import express from "express";
import { getAchievementsByGuildController, getGuildByIdController } from "./src/controllers/guildController";

const app = express();

app.use(express.json());
app.use(cors());


const PORT = 3000;
app.get("/guild/:id",getGuildByIdController);
app.get("/guild/:id/achievements",getAchievementsByGuildController);


app.listen(PORT,()=>{
    console.log("Servidor iniciado...")
})