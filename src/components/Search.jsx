import { useState } from "react";

const Search = ({resData, onSearch}) => {

  const [searchText, setSearchText] = useState("")

    return (
      <div className='search'>
        <div className='search-box'>
          <input
           type="text" 
           value={searchText}
           onChange={(e) => {
            setSearchText(e.target.value)
           }}
           
           />
        </div>
        <div className='search-button'>
          <button 
          onClick={() => {
            const filteredReastaurant = resData.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
            );
            console.log(filteredReastaurant)
            onSearch(filteredReastaurant)
          }}
          >Search</button>
        </div>
      </div>
    )
  }

export default Search;