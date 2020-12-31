import { swap, TSorter, sortComparator } from ".";




const sort: TSorter = (arr, start, end, params = [{key: "value", inAscending: true}], onMoveCb)=>{

  for(let position = arr.length - 1; position > 0; position--){
    for(let mover = 0; mover < position; mover++){
      if(sortComparator(arr[mover], arr[mover + 1], params)){
        swap(arr, mover, mover + 1);
        onMoveCb && onMoveCb(mover, mover + 1, [position], [], true);
      }
    }
  }

  return arr;
}






export default sort;

