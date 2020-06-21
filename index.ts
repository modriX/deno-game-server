import Character from './src/models/Character.ts';

const characterModel = new Character('characters');

const inserted = await characterModel.insertOne({ nickname: 'Test' });

console.log(inserted);
