type TupleToObject<T extends readonly (string|symbol|number)[]> = {
  [P in T[number]]: P;
};
//TS [ P in keyof T] ->keyof array to index

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const; 
type r = TupleToObject<typeof tuple>;


//JS
function tupleToObj(arr){
  const obj= {}; 
  arr.forEach((val) => {
    obj[val] = val;
  });
  return obj;
}
