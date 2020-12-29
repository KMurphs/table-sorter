import { getValue, T, TSorter, TSortEffectCallback } from ".";




const sort: TSorter = (arr, start, end, onMoveCb)=>{

  const low = start || 0;
  const high = end === undefined || end === null ? arr.length - 1 : end;
  if((low === 0) && (end === arr.length - 1))console.log(arr)

  if(low >= high) return;
  const middle = Math.round((low + high) / 2);

  sort(arr, low, middle - 1, onMoveCb);
  sort(arr, middle, high, onMoveCb);
  merge(arr, low, middle, high, onMoveCb);

  if((low === 0) && (end === arr.length - 1))console.log(arr)

}


// const movement = (arr: T[] | number[], partialArr: T[] | number[], partialArrRunnerOffset: number, mainRunner: number, partialArrRunner: number, onMoveCb?: TSortEffectCallback)=> { 
//   arr[mainRunner] = partialArr[partialArrRunner]; 
//   // onMoveCb && onMoveCb(mainRunner, partialArrRunnerOffset + partialArrRunner, [], [], true)
//   onMoveCb && onMoveCb(mainRunner, getValue(partialArr[partialArrRunner]), [], [], false)
//   return [mainRunner + 1, partialArrRunner + 1]; 
// }

const merge = (arr: T[] | number[], low: number, middle: number, high: number, onMoveCb?: TSortEffectCallback)=>{

  const lowArray = arr.slice(low, middle);
  const highArray = arr.slice(middle, high + 1);

  let lowRunner = 0;
  let highRunner = 0;
  let mainRunner = low;

  

  while((lowRunner !== lowArray.length) && (highRunner !== highArray.length)){
    if(getValue(lowArray[lowRunner]) < getValue(highArray[highRunner])) {
      arr[mainRunner] = lowArray[lowRunner]; 
      // onMoveCb && onMoveCb(mainRunner, partialArrRunnerOffset + partialArrRunner, [], [], true);
      onMoveCb && onMoveCb(mainRunner, getValue(arr[mainRunner]), [low + lowRunner, middle + highRunner], [mainRunner], false);
      lowRunner++;
      mainRunner++;
    }
    else {
      arr[mainRunner] = highArray[highRunner]; 
      // onMoveCb && onMoveCb(mainRunner, partialArrRunnerOffset + partialArrRunner, [], [], true);
      onMoveCb && onMoveCb(mainRunner, getValue(arr[mainRunner]), [low + lowRunner, middle + highRunner], [mainRunner], false);
      highRunner++;
      mainRunner++;
    }
  }

  while(lowRunner !== lowArray.length){
    arr[mainRunner] = lowArray[lowRunner]; 
    onMoveCb && onMoveCb(mainRunner, getValue(arr[mainRunner]), [low + lowRunner, high], [mainRunner], false);
    lowRunner++;
    mainRunner++;
  }
  while(highRunner !== highArray.length){
    arr[mainRunner] = highArray[highRunner]; 
    onMoveCb && onMoveCb(mainRunner, getValue(arr[mainRunner]), [middle - 1, middle + highRunner], [mainRunner], false);
    highRunner++;
    mainRunner++;
  }
}









export default sort;

