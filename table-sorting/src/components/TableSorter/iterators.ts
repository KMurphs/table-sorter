


export function* arrayIterator(data: any[]) {

  let iterationCount = 0;
  for(let item of data) {
    iterationCount++; 
    yield typeof(item) === "object" ? {...item} : item
  }
  return iterationCount;
}

export function *takeNFromIterator(batchSize: number = 50, iterator: Generator<any, number, unknown>) {

  let batchCount = 0;
  let isDone = false;
  while(!isDone){
    let arr = [];
    batchCount++; 
    for(let i = 0; i < batchSize && !isDone; i++) {
      const {value, done} = iterator.next();
      isDone = done || false;
      !isDone && arr.push(value);
    }
    yield arr;
  }


  return batchCount;
}

const takeBatchFromIterator = (batchSize: number = 50, data: any[]) => {

  const init = (size: number)=>takeNFromIterator(size, arrayIterator(data))
  let it = init(batchSize);
  let isDone = false;

  return {
    reset: (batch?: number) => {
      it = init(batch || batchSize)
    },
    next: () => {
      const { value, done } = it.next();
      isDone = done || false;
      return [...(Array.isArray(value) ? value : [])]
    },
    isDone: () => isDone
  }
  
}
export default takeBatchFromIterator


