const cats = ["Milo", "Otis", "Garfield"]

function  destructivelyAppendCat(name){
   cats.push(name);
   return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
   return cats;

}

function destructivelyRemoveLastCat (){
    cats.splice(-1)
    return cats;
   
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1)
    return cats
}

function appendCat(name){
    let newCats = [...cats, name]
    return newCats
  }

  function prependCat(name){
    let newCats = [name, ...cats]
    return newCats
  }

  function removeLastCat() {
    let newCatArray = cats.slice(0,-1)
    return newCatArray
  }

  function removeFirstCat() {
    let newCats = cats.slice(1)
    return newCats
  }