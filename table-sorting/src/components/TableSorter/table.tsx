import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { TSortKey } from '.';
import { TSorter } from '../Sorters';
import takeBatchFromIterator, { useEffectWhenInView } from './iterators';
import './table.css';
// import data from "./assets/factbook.json"
type Props = {
  onDragStart: (ev: React.DragEvent<HTMLElement>) => void,
  keysToSortBy: TSortKey[],
  sorter: TSorter
}

interface T {
  next: Function
}
export default function Table({onDragStart, keysToSortBy, sorter}: Props) {

  const [data, setData] = useState<any[]>([]);
  const dataBatch = useRef(takeBatchFromIterator(15, []));
  const loadMoreDataFrom = (it: T) => setData(data =>{ 
    const nextBatch = it.next();
    console.log(nextBatch);
    return nextBatch.length === 0 ? data : [...data, ...nextBatch];
  });
  // const loadMoreData = loadMoreDataFrom.bind(null, dataBatch.current);

  console.log(data);


  const keyToID = (key: string) => (key as string).toLowerCase().replace(" ","-");
  const extractKeysFromData = (data: any[]) => data && data[0] ? Object.keys(data[0]) : [];



  const keysFromData = useRef<string[]>(extractKeysFromData(data))
  const keysToSortByAsStrings = keysToSortBy.map(item => item.key)


  const start = new Date().getTime()
  // sorter(data, 0, data.length - 1, (keysToSortBy && keysToSortBy[0]) ? keysToSortBy.map(item => ({key: item.key, inAscending: item.isDirectionUp})) : [{key: keysFromData.current[0],inAscending:true}]);
  React.useMemo(() => sorter(data, 0, data.length - 1, (keysToSortBy && keysToSortBy[0]) ? keysToSortBy.map(item => ({key: item.key, inAscending: item.isDirectionUp})) : [{key: keysFromData.current[0],inAscending:true}]), [keysToSortBy]);
  // const sleeping = React.useMemo(() => sleep(sleepSeconds), [sleepSeconds]);
  console.log("Sort Operation: ", (new Date().getTime() - start));


  const isOnProductionHost = () => /(localhost|127.0.0.1|127.0.0.0|0.0.0.0)/.exec(window.location.origin) === null;
  useEffect(()=>{
    fetch((isOnProductionHost() ? "table-sorter/" : "") +  "factbook.json")
    .then(res => res.json())
    .then(res => {
      keysFromData.current = extractKeysFromData(res);
      dataBatch.current = takeBatchFromIterator(20, res);
      loadMoreDataFrom(dataBatch.current);
    })
  }, [])

  const tableRef = useRef<HTMLElement | null>(null);
  useEffect(()=>{
    // TODO: This is not an ideal solution since it involves scralling the table back up
    // A better alternative would be to load all batches of data above current offset
    dataBatch.current.reset();
    tableRef.current && (tableRef.current.scrollTop = 0);
  }, [keysToSortBy])

  const tableFooterRef = useRef<HTMLTableSectionElement|null>(null);
  useEffectWhenInView(".tableFooter td span", ()=>{ console.log("Loading More..."); loadMoreDataFrom(dataBatch.current)});

  return (
    <section className="sortable-table__container" ref={tableRef}>
      <input type="checkbox" id="sortable-table__first-column-control" className="hidden"/>
      <table className="sortable-table" >
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
                      // React.useMemo()
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
        <tfoot ref={tableFooterRef} className="tableFooter">
          <tr><td colSpan={keysFromData.current.length}><span>Loading More Data...</span></td></tr>
        </tfoot>
      </table>
    </section>

    
  )

}