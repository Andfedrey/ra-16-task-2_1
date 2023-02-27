import Toolbar from "./Toolbar"
import React, {useState} from 'react'


function Portfolio({photos, filterInfo}){
  const [sort, setSort] = useState('All')
  return(
    <>
    <div className='projectWrapper'>
      <Toolbar filterInfo={filterInfo} setSort={setSort}></Toolbar>
      <div className='projectsList'>
        {
        (sort === 'All') ? 
          photos
            .map((el, i) => 
              <img src={el.img} key={`${el.img}-${i}`} alt='#'></img>) :
          photos
            .filter(el => el.category === sort)
            .map((el, i) => 
              <img src={el.img} key={`${el.img}-${i}`} alt='#'></img>
          )
        }
      </div>
    </div>
    </>
  )
}

export default Portfolio;