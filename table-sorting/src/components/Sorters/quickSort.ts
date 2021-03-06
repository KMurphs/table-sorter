import { swap, T, TSorter, TSortEffectCallback, sortComparator, TSortParam } from ".";


const sort: TSorter = (arr, start, end, params = [{key: "value", inAscending: true}], onMoveCb)=>{

  const low = start || 0;
  const high = end === undefined || end === null ? arr.length - 1 : end;

  if(low >= high) return arr;

  const pivot = partition(arr, low, high, params, onMoveCb);
  sort(arr, low, pivot - 1, params, onMoveCb);
  sort(arr, pivot + 1, high, params, onMoveCb);

  return arr;
}


const partition = (arr: T[] | number[], low: number, high: number, params: TSortParam[] = [{key: "value", inAscending: true}], onMoveCb?: TSortEffectCallback) => {

  // const pivot = getValue(arr[high])
  let cache = low - 1;
  for(let i = low; i <= high; i++){
    if(sortComparator(arr[high], arr[i], params)) {
      cache++;
      swap(arr, cache, i);
      cache !== i && onMoveCb && onMoveCb(cache, i, [low, high], [], true);
    }
  }
  return cache;

}


export default sort;


// export { swap }