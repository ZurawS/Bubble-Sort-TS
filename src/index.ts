import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numberCollection = new NumberCollection([10, 3, -5, 0, 2]);
// console.log(numberCollection);
// numberCollection.sort();
// console.log(numberCollection);

// const charactersCollection = new CharactersCollection("XaatTtT");
// console.log(charactersCollection);
// charactersCollection.sort();
// console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-30);
linkedList.add(4);
linkedList.print();
linkedList.sort();
linkedList.print();
