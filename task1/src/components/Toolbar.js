export default function Toolbar({filterInfo, setSort}){
  return(
    <>
    <ul className="componentsList">
      {filterInfo.map((el, i) => 
        <li key={i} className="component">
          <button className='categoryBtn' onClick={(e) => setSort(e.target.innerText)}>{el}</button>
        </li>)}
    </ul>
    </>
  )  
}