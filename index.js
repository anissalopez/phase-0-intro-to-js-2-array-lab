const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
   cats.push(name)
   return cats
}

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
  return cats;
}

const destructivelyRemoveLastCat = () => {
  return cats.pop();
}

const destructivelyRemoveFirstCat = () => {
  return cats.shift();
}

const appendCat = (name) => {
  let newArray = [...cats, name];
  return newArray;  
}

const prependCat = (name) => {
  let newArray = [name, ...cats]
  return newArray;
}

const removeLastCat = () => {
  return cats.slice(0, cats.length-1);
}

const removeFirstCat = () => {
  return cats.slice(1)
}