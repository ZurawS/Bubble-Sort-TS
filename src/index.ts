import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollection = new NumberCollection([10, 3, -5, 0, 2]);
const charactersCollection = new CharactersCollection("XaatTtT");
const sorter = new Sorter(charactersCollection);

// console.log(numberCollection);
// sorter.sort();
// console.log(numberCollection);

console.log(charactersCollection);
sorter.sort();
console.log(charactersCollection);
