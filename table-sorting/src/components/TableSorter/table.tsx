import './table.css';
import data from "./assets/factbook.json"


export default function Table() {

  console.log(data)

  return (
    <section className="sortable-table__container">
      <input type="checkbox" id="sortable-table__first-column-control" className="hidden"/>
      <table className="sortable-table">
        <tr>
          {
            data && data[0] && Object.keys(data[0]).map((key, idx) => 
              {
                if(idx === 0) { return (
                  <th className="sortable-table__header__item">
                    <label htmlFor="sortable-table__first-column-control">
                      <span>{key}</span>
                      <i className="fas fa-ellipsis-h"></i>
                    </label>
                  </th>
                )} else {
                  return (   
                  <th className="sortable-table__header__item">
                    <span>{key}</span>
                  </th>
                )}
              }
            )
          }
        </tr>
      </table>
    </section>

    
  )

}