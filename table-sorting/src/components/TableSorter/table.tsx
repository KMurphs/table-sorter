import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { TSortKey } from '.';
import { TSorter } from '../Sorters';
import './table.css';
// import data from "./assets/factbook.json"
type Props = {
  onDragStart: (ev: React.DragEvent<HTMLElement>) => void,
  keysToSortBy: TSortKey[],
  sorter: TSorter
}

export default function Table({onDragStart, keysToSortBy, sorter}: Props) {

  const [data, setData] = useState<any[]>([{}])
  // const [data, setData] = useState<any[]>([
  //   {key1: "value11",key2: "value21",key3: "value34"},
  //   {key1: "value12",key2: "value22",key3: "value33"},
  //   {key1: "value13",key2: "value23",key3: "value32"},
  //   {key1: "value14",key2: "value24",key3: "value31"},
  // ]);
  const keyToID = (key: string) => (key as string).toLowerCase().replace(" ","-");
  const extractKeysFromData = (data: any[]) => data && data[0] ? Object.keys(data[0]) : [];



  const keysFromData = useRef<string[]>(extractKeysFromData(data))
  const keysToSortByAsStrings = keysToSortBy.map(item => item.key)


  const start = new Date().getTime()
  // sorter(data, 0, data.length - 1, (keysToSortBy && keysToSortBy[0]) ? keysToSortBy.map(item => ({key: item.key, inAscending: item.isDirectionUp})) : [{key: keysFromData.current[0],inAscending:true}]);
  React.useMemo(() => sorter(data, 0, data.length - 1, (keysToSortBy && keysToSortBy[0]) ? keysToSortBy.map(item => ({key: item.key, inAscending: item.isDirectionUp})) : [{key: keysFromData.current[0],inAscending:true}]), [keysToSortBy]);
  // const sleeping = React.useMemo(() => sleep(sleepSeconds), [sleepSeconds]);
  console.log("Sort Operation: ", (new Date().getTime() - start));


  const isOnProductionHost = ()=> /(localhost|127.0.0.0|0.0.0.0)/.exec(window.location.origin)?.length === 0;

  useEffect(()=>{
    fetch((isOnProductionHost() ? "table-sorter/" : "")+ "factbook.json")
    .then(res => res.json())
    .then(res => {
      keysFromData.current = extractKeysFromData(res);
      setData(res);
    })
  }, [])

  return (
    <section className="sortable-table__container">
      <input type="checkbox" id="sortable-table__first-column-control" className="hidden"/>
      <table className="sortable-table">
        <thead>
          <tr>
            {
              keysFromData.current.map((key, idx) => {
                const id = keyToID(key);
                const isKeyToSortBy = keysToSortByAsStrings.includes(key);
                if(idx === 0) { return (
                  <th key={idx} id={id} draggable={!isKeyToSortBy} className={`sortable-table__header__item ${isKeyToSortBy ? "disabled": ""}`} onDragStart={onDragStart}>
                    <label htmlFor="sortable-table__first-column-control" className="flex items-center justify-end">
                      <span>{key}</span>
                      <i className="fas fa-angle-double-left ml-2"></i>
                      <i className="fas fa-angle-double-right"></i>
                    </label>
                  </th>
                )} else {
                  return (   
                  <th key={idx} id={id} draggable={!isKeyToSortBy} className={`sortable-table__header__item ${isKeyToSortBy ? "disabled": ""}`} onDragStart={onDragStart}>
                    <span>{key}</span>
                  </th>
                )}
              })
            }
          </tr>

        </thead>
        <tbody>
          {
            data && data.map((entry, idx) => {
              return (
                <tr key={idx + 1}>
                  {
                    keysFromData.current.map((key, idx_) => (
                      <td key={idx_} className={`${keyToID(key)} ${keysToSortByAsStrings.includes(key) ? "isSorted" : ""}`}>
                        <span>{ (entry as any)[key]  || "" }</span>
                      </td>
                    ))
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </section>

    
  )

}