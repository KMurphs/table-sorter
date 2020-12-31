import { useCallback, useEffect, useMemo } from "react";


export function* arrayIterator(data: any[]) {

  let iterationCount = 0;
  for(let item of data) {
    iterationCount++; 
    yield item
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

  return {
    reset: (batch?: number) => {
      it = init(batch || batchSize)
    },
    next: () => {
      const { value } = it.next();
      return [...(Array.isArray(value) ? value : [])]
    }
  }
  
}
export default takeBatchFromIterator



export const useEffectWhenInView = (cssSelector: string, cb: Function)=>{

  useEffect(()=>{

    const el = document.querySelector(cssSelector);
    // const el = document.querySelector(".tableFooter");
    const intObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => cb && (entry.intersectionRatio > 0) && cb(entry))
    }, {threshold: [.9]})

    console.log({el, intObserver})
    el && intObserver.observe(el)

    return el ? () => intObserver.unobserve(el) : ()=>{};

  }, [cssSelector, cb])

}