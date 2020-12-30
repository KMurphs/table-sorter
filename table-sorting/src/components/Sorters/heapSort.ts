import { swap, T, TSorter, TSortEffectCallback, sortComparator } from ".";




const sort: TSorter = (arr, start, end, params=[{key: "value", inAscending: true}], onMoveCb)=>{

  for(let runner = Math.round(arr.length / 2 - 1); runner >= 0; runner--){
    heapify(arr, arr.length, runner, params, onMoveCb);
  }

  for(let runner = arr.length - 1; runner > 0; runner--){
    swap(arr, 0, runner);
    onMoveCb && onMoveCb(0, runner, [runner], [], true);
    heapify(arr, runner, 0, params, onMoveCb);
  }

}


const heapify = (arr: T[] | number[], heapSize: number, parent: number, params=[{key: "value", inAscending: true}], onMoveCb?: TSortEffectCallback) => {

  const lChild = 2 * parent + 1;
  const rChild = 2 * parent + 2;

  let maxFamily = parent;
  if((lChild < heapSize) && (sortComparator(arr[lChild], arr[maxFamily], params))) maxFamily = lChild;
  if((rChild < heapSize) && (sortComparator(arr[rChild], arr[maxFamily], params))) maxFamily = rChild;
  if(maxFamily === parent) return;

  swap(arr, maxFamily, parent);
  onMoveCb && onMoveCb(maxFamily, parent, [parent], [], true);
  
  heapify(arr, heapSize, maxFamily, params, onMoveCb);
}






export default sort;

