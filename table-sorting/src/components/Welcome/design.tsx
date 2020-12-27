import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { useForceRerender } from "../../custom-hooks/useForceRerender";
import sort, { swap } from "./qSort";

type Bar = {value: number; handleNo: number; fc: (props: {position: number, height: number}) => JSX.Element}
export default function DesignElement() {

  console.log("Design Element: Rendering");



  // const [, setDummy] = useState<boolean>(true);
  // const forceRerender = ()=>setDummy(dummy=>!dummy)

  const forceRerender = useForceRerender();


  const withKeyID = (Component: (props: BarProps) => JSX.Element, key: number): (props: {position: number, height: number}) => JSX.Element=>{ 
    return (props) => <Component key={key} id={key} {...props}/>
  }
  const getRandomHeight = () => 5 + Math.round(Math.random() * 20) * 5;
  const bars = useRef<Bar[]>(
    Array(6)
    .fill(0)
    .map(getRandomHeight)
    .map((height, idx) => ({
      value: height, 
      handleNo: idx,
      fc: withKeyID(DesignElementBar, idx)
    }))
  )



  const barEffects = useRef<{f: Function, timeout: number}[]>([])
  const [counter, setCounter] = useState<number>(0);
  useEffect(()=>{
    

    if(barEffects.current.length === 0) {

      new Promise((resolve) => setTimeout(resolve, 1500)).then(()=>{
        bars.current.forEach(bar=> bar.value = getRandomHeight())
        barEffects.current.push({f: ()=>{}, timeout: 1500});
        sort(
          bars.current.map(curr=>curr.value), 
          0, 
          bars.current.length - 1, 
          (initial: number, final: number)=>barEffects.current.push({f: ()=>swap(bars.current, initial, final), timeout: barEffects.current.length === 0 ? 1500 : 300})
        );
        setCounter(c => c + 1);
      })





    }else{

      // Extract first effect
      const [first, ...rest] = barEffects.current;
      
      // If it's not undefined, wait for timeout, then run the effect and force and re-render
      first && new Promise((resolve) => setTimeout(resolve, first.timeout)).then(()=>{
        first.f();
        barEffects.current = rest;
        setCounter(c => c + 1);
      })

    }


  }, [counter])












  return (
    <div className="design-element-container hidden md:flex absolute" style={{"--count": bars.current.length * 2} as CSSProperties}>
      {
        bars
          .current
          .map((_, idx) => { 
            const position = bars.current.findIndex(bar => bar.handleNo === idx); 
            return position >= 0 ? bars.current[position].fc({position, height: bars.current[position].value }) : <div/>
          })
          .reduce(
            (acc, curr, idx) => [...acc, curr, <div key={bars.current.length + idx}/>], 
            [<div/>]
          )
          .slice(1)
      }
    </div>
  )
}




type BarProps = {
  height: number,
  id: number,
  position: number
}
function DesignElementBar({height, position, id}:BarProps){
  return (
    <div style={{height: height + "%", left: `calc(${position} * 2 * var(--width))`}} id={`design-element-bar-${id}`}></div>
  )
}