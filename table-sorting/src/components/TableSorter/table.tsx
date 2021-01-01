import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TSortKey } from '.';
import { useEffectWhenInView } from '../../custom-hooks/useEffectWhenInView';
import { CSSLoaderDualRing } from '../CSSLoaders';
import { TSorter } from '../Sorters';
import takeBatchFromIterator from './iterators';
import './table.css';


type Props = {
  onDragStart: (ev: React.DragEvent<HTMLElement>) => void,
  keysToSortBy: TSortKey[],
  sorter: TSorter
}


const keyToID = (key: string) => (key as string).toLowerCase().replace(" ","-");
const extractKeysFromData = (data: any[]) => data && data[0] ? Object.keys(data[0]) : [];
// const isOnProductionHost = () => /(localhost|127.0.0.1|127.0.0.0|0.0.0.0)/.exec(window.location.origin) === null;




export default function Table({onDragStart, keysToSortBy, sorter}: Props) {


  const [srcData, setSrcData] = useState<any[]>([]);
  useEffect(()=>{
    fetch("table-sorter/factbook.json")
    .then(res => res.json())
    .then(res => {
      sorter(
        res, 0, res.length - 1, 
        (keysToSortBy && keysToSortBy[0]) 
          ? keysToSortBy.map(item => ({key: item.key, inAscending: item.isDirectionUp})) 
          : [{key: "Country Name", inAscending: true}]
      )
      batchIterator.current = takeBatchFromIterator(batchSize, res);
      setSrcData(res);
    })
  }, [1])




  const [uiData, setUiData] = useState<any[]>([]);
  const [hasNoMoreData, setHasNoMoreData] = useState(false);
  const batchSize = 20;
  const batchIterator = useRef(takeBatchFromIterator(batchSize, srcData));
  const loadMore = ()=>{
    const nextBatch = batchIterator.current.next();
    setHasNoMoreData(batchIterator.current.isDone());
    (nextBatch.length !== 0) && setUiData(data => [...data, ...nextBatch]);
  }
  useEffectWhenInView("tfoot td span", ()=>loadMore());




  const keysFromData = useMemo(()=>extractKeysFromData(srcData), [srcData])
  const keysFromProps = useMemo(()=>keysToSortBy.map(item => item.key), [keysToSortBy])
  const tableRef = useRef<HTMLElement | null>(null);
  useEffect(()=>{
    const srcCopy = srcData.map(item => ({...item}))
    sorter(
      srcCopy, 0, srcCopy.length - 1, 
      (keysToSortBy && keysToSortBy[0]) 
        ? keysToSortBy.map(item => ({key: item.key, inAscending: item.isDirectionUp})) 
        : [{key: "Country Name", inAscending: true}]
    )
    batchIterator.current = takeBatchFromIterator(batchSize, srcCopy);
    setUiData([]);
    tableRef.current && (tableRef.current.scrollTop = 0);
  }, [keysToSortBy, sorter, srcData])






  return (

    <section className="sortable-table__container" ref={tableRef}>
      <input type="checkbox" id="sortable-table__first-column-control" className="hidden"/>
      <table className="sortable-table" >
        <thead>
          <tr>
            {
              keysFromData.map((key, idx) => {
                const id = keyToID(key);
                const isKeyToSortBy = keysFromProps.includes(key);
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
            uiData.map((entry, idx) => {
              return (
                <tr key={idx + 1}>
                  {
                    keysFromData.map((key, idx_) => {
                      const quartileMark = entry.quartileMark ? entry.quartileMark[key] : "";
                      return (
                        <td key={idx_} className={`${keyToID(key)} ${quartileMark} ${keysFromProps.includes(key) ? "isSorted" : ""}`}>
                          <span>{ (entry as any)[key]  || "" }</span>
                        </td>
                      )}
                    )
                  }
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td colSpan={keysFromData.length}>
              {
                hasNoMoreData
                  ? <span></span> 
                  : <span><CSSLoaderDualRing/> Loading More Data...</span>
              }
            </td>
          </tr>
        </tfoot>
      </table>
    </section>

  )

}