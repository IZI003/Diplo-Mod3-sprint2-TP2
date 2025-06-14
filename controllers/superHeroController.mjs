import { SuperHero } from "../models/SuperHero.mjs";

export async function insertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe: 'Ironman 27',
        nombreReal: 'Tony Stark',
        edad: 45,
        planetaOrigen: 'Tierra',
        debilidad: 'Dependiente de la tecnología',
        poderes: ['Armadura blindada', 'Volar', 'Láseres'],
        aliados: ['Spiderman'],
        enemigos: ['Mandarín'],
        creador: 'Ezequiel Miranda'
    });
    await hero.save();
    console.log('✅ Superhéroe creado:', hero);
}

export async function updateSuperHero(nombre) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombre },//el registro con este nombre
        { $set: { edad: 47 } }// modifica este campo
    );
    console.log('📝 Resultado de la actualización:', result);
}

export async function deleteSuperHero(nombre) {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombre });
    console.log('🗑️ Superhéroe eliminado:', result);
}

export async function findSuperHeros() {
    const heroes = await SuperHero.find({ planetaOrigen: 'ASGARD' });// es key sensitive
    console.log('🔍 Superhéroes encontrados:', heroes);
}
