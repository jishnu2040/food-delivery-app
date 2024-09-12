import { useEffect, useState } from "react";
import Search from "./Search";
import Restaurant from "./card/Restaurant";
import Filter from "./Filter";
import ShimmerRestaurant from "./ShimmerRestaurant";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true); 

  // Fetching data from the API
  const fetchData = async () => {
    setLoading(true); 
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.934926602466566&lng=77.62423159259032&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const json = await response.json();

      // Accessing restaurant data from the response
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setData(restaurants);
        setFilteredData(restaurants);
      } else {
        console.error("Restaurants data not found.");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };

  // Filtering top-rated restaurants
  const handleFilter = () => {
    const topRated = data.filter((resData) => resData.info.avgRating > 4.3);
    setFilteredData(topRated);
  };

  // Update filteredData based on search
  const handleSearch = (searchedData) => {
    setFilteredData(searchedData);
  };

  // Call fetchData inside useEffect to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <ShimmerRestaurant />
  ) : (
    <>
      <div className="filter">
        <Filter onFilter={handleFilter} />
      </div>
      <div className="refresh">
        <button onClick={fetchData}>Refresh</button>
      </div>
      <div className="search-part">
        <Search resData={data} onSearch={handleSearch} />
      </div>
      <div className="res-container">
        {filteredData.map((resData) => (
          <Restaurant key={resData.info.id} resData={resData} />
        ))}
      </div>
    </>
  );
};

export default Body;
