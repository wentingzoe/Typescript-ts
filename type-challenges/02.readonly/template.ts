type MyReadonly<T> = {
  readonly  [P in keyof T]:T[P]
}
//TS: in == map; keyof == lookup


//js
// 1. JS: return an object {}
// 2. JS: for in loop => TS: 接口
// 3. JS: add 'readonly' to the key
// 4. JS: pass the value of obj[key] to the result

function readonly (obj){
 const result = {} 
 for (const key in obj){
   result['readonly' + key] = obj[key];
 }
 return result;
}
