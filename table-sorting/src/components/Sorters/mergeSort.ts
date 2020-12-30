import { getValue, T, TSorter, TSortEffectCallback, sortComparator, TSortParam } from ".";




const sort: TSorter = (arr, start, end, params=[{key: "value", inAscending: true}], onMoveCb)=>{

  const low = start || 0;
  const high = end === undefined || end === null ? arr.length - 1 : end;
  if((low === 0) && (end === arr.length - 1))console.log(arr)

  if(low >= high) return;
  const middle = Math.round((low + high) / 2);

  sort(arr, low, middle - 1, params, onMoveCb);
  sort(arr, middle, high, params, onMoveCb);
  merge(arr, low, middle, high, params, onMoveCb);

  if((low === 0) && (end === arr.length - 1))console.log(arr)

}




const merge = (arr: T[] | number[], low: number, middle: number, high: number, params: TSortParam[], onMoveCb?: TSortEffectCallback)=>{

  const lowArray = arr.slice(low, middle);
  const highArray = arr.slice(middle, high + 1);

  let lowRunner = 0;
  let highRunner = 0;
  let mainRunner = low;

  

  while((lowRunner !== lowArray.length) && (highRunner !== highArray.length)){
    if(sortComparator(highArray[highRunner], lowArray[lowRunner], params)) {
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

