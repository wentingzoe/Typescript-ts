// js => ts
//TS unions 
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}
//javascript => typescript
//javascript logic below
function myPick (todo, keys) {
  const obj = {}
  keys.forEach(key => {
    if (key in todo) {
      obj[key] = todo[key]
    }
  })
  return obj
}

//1. JS: returns an object 
//2. JS: foreach key in keys => TS: mapped to object
///// [Mapped Types]: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
//3. JS: todo[key] is the value of the key => TS: indexed
///// [Indexed Access Types]:https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
//4. JS: if key in todo, add it to the new object 
// => TS: keyof lookup
/////[Keyof Lookup]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#keyof-lookup
// => TS: extends 
/////[Extends]: https://www.typescriptlang.org/docs/handbook/advanced-types.html#extends