import CharacterService from './src/services/CharacterService.ts';

const characterService = new CharacterService();

const inserted = await characterService.addNew('Test');

console.log(inserted);
