
const str = prompt('Шоб створити масси чисел, введіть одним числом без пробілів та ком.');

const array = Array.from(str);

alert(`Ви створили массив = [${array.join(',  ')}]`)


array.sort( (a, b) => a - b );

// array.sort(f);
alert(`Ви відсортували массив = [${array.join(',  ')}]`)

console.log(array);

const arrDel = array.splice(1,3 )


alert(`Видалили з массиву з 2 по 4 = [${arrDel.join(',  ')}]`)

alert(`Массив який ми отримали  = [${array.join(',  ')}]`)

console.log(arrDel)