import { swap, getValue, TSorter } from ".";




const sort: TSorter = (arr, start, end, onMoveCb)=>{


  for(let position = 0; position < arr.length - 1; position++){
    let minVal = position;
    for(let mover = position + 1; mover <= arr.length - 1; mover++){
      if(getValue(arr[minVal]) > getValue(arr[mover])){
        minVal = mover;
      }
    }
    if(minVal !== position){
      swap(arr, position, minVal);
      onMoveCb && onMoveCb(position, minVal, [position, minVal], [], true);
    }
  }

}






export default sort;

