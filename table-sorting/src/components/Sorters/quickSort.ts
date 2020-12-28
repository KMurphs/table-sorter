import { swap, getValue, T, TSorter, TSortEffectCallback } from ".";


const sort: TSorter = (arr, start, end, onMoveCb)=>{

  const low = start || 0;
  const high = end === undefined || end === null ? arr.length - 1 : end;

  if(low >= high) return;

  const pivot = partition(arr, low, high, onMoveCb);
  sort(arr, low, pivot - 1, onMoveCb);
  sort(arr, pivot + 1, high, onMoveCb);
}


const partition = (arr: T[] | number[], low: number, high: number, onMoveCb?: TSortEffectCallback) => {

  const pivot = getValue(arr[high])
  let cache = low - 1;
  for(let i = low; i <= high; i++){
    if(getValue(arr[i]) <= pivot) {
      cache++;
      swap(arr, cache, i);
      cache !== i && onMoveCb && onMoveCb(cache, i, [low, high], [], true);
    }
  }
  return cache;

}


export default sort;


// export { swap }