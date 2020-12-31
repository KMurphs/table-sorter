import { swap, TSorter, sortComparator } from ".";




const sort: TSorter = (arr, start, end, params = [{key: "value", inAscending: true}], onMoveCb)=>{


  for(let position = 0; position < arr.length - 1; position++){
    let minVal = position;
    for(let mover = position + 1; mover <= arr.length - 1; mover++){
      if(!sortComparator(arr[mover], arr[minVal], params)){
        minVal = mover;
      }
    }
    if(minVal !== position){
      swap(arr, position, minVal);
      onMoveCb && onMoveCb(position, minVal, [position, minVal], [], true);
    }
  }

  return arr;
}






export default sort;

