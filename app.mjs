import { connectDB } from "./config/database.mjs";
import {
    insertSuperHero,
    updateSuperHero,
    deleteSuperHero,
    findSuperHeros
} from "./controllers/superHeroController.mjs";

await connectDB();

//await insertSuperHero();
//await updateSuperHero('Ironman 27');
//await deleteSuperHero('Ironman 27');
await findSuperHeros();