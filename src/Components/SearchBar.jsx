import React from 'react'
import { getSearchData } from '../api/mediaAPI'

const SearchBar = () => {
  return (
    <div className='h-screen w-full bg-zinc-700'>
        <button className='bg-purple-300 p-[1rem]'
          onClick={()=>{
            getSearchData('cat');
          }}
        >
            get search data
        </button>
    </div>
  )
}

export default SearchBar