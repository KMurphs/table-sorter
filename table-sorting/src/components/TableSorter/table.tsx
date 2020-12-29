import './table.css';
import data from "./assets/factbook.json"


export default function Table() {

  console.log(data)

  const keys = data && data[0] ? Object.keys(data[0]).filter((entry,idx)=>idx<=10) : []

  return (
    <section className="sortable-table__container">
      <input type="checkbox" id="sortable-table__first-column-control" className="hidden"/>
      <table className="sortable-table">
        <tr>
          {
            keys.map((key, idx) => 
              {
                if(idx === 0) { return (
                  <th className="sortable-table__header__item">
                    <label htmlFor="sortable-table__first-column-control" className="flex items-center">
                      <span>{key}</span>
                      <i className="fas fa-angle-double-left ml-2"></i>
                      <i className="fas fa-angle-double-right"></i>
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

        {
          data && data.filter((entry,idx)=>idx<=50).map(entry => {
            return (
              <tr>
                {
                  keys.map(key => <td><span>{ (entry as any)[key]  || "" }</span></td>)
                }
              </tr>
            )
          })
        }

      </table>
    </section>

    
  )

}