import { swap, getValue, T, TSorter, TSortEffectCallback } from ".";




const sort: TSorter = (arr, start, end, onMoveCb)=>{

  for(let runner = Math.round(arr.length / 2 - 1); runner >= 0; runner--){
    heapify(arr, arr.length, runner, onMoveCb);
  }

  for(let runner = arr.length - 1; runner > 0; runner--){
    swap(arr, 0, runner);
    onMoveCb && onMoveCb(0, runner, [runner], [], true);
    heapify(arr, runner, 0, onMoveCb);
  }

}


const heapify = (arr: T[] | number[], heapSize: number, parent: number, onMoveCb?: TSortEffectCallback) => {

  const lChild = 2 * parent + 1;
  const rChild = 2 * parent + 2;

  let maxFamily = parent;
  if((lChild < heapSize) && (getValue(arr[maxFamily]) < getValue(arr[lChild]))) maxFamily = lChild;
  if((rChild < heapSize) && (getValue(arr[maxFamily]) < getValue(arr[rChild]))) maxFamily = rChild;
  if(maxFamily === parent) return;

  swap(arr, maxFamily, parent);
  onMoveCb && onMoveCb(maxFamily, parent, [parent], [], true);
  
  heapify(arr, heapSize, maxFamily, onMoveCb);
}






export default sort;

