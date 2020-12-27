interface T {
  value: number
}
const sort = (arr: T[] | number[], start: number, end: number, onMoveCb?: Function)=>{

  const low = start || 0;
  const high = end === undefined ? arr.length - 1 : end;

  if(low >= high) return;

  const pivot = partition(arr, low, high, onMoveCb);
  sort(arr, low, pivot - 1, onMoveCb);
  sort(arr, pivot + 1, high, onMoveCb);
}

const swap = (arr: T[] | number[], low: number, high: number) => { 
  const tmp = arr[high]; 
  arr[high] = arr[low]; 
  arr[low] = tmp; 
}

const getValue = (el: T | number) => typeof(el) === "number" ? el as number : (el as T).value ;

const partition = (arr: T[] | number[], low: number, high: number, onMoveCb?: Function) => {

  const pivot = getValue(arr[high])
  let cache = low - 1;
  for(let i = low; i <= high; i++){
    if(getValue(arr[i]) <= pivot) {
      cache++;
      swap(arr, cache, i);
      cache !== i && onMoveCb && onMoveCb(cache, i);
    }
  }
  return cache;

}


export default sort;

export { swap }