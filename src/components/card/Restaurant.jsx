import { CDN_URL } from "../../utils/constants";

export const Restaurant = ({ resData }) => {
    const {
      name,
      cuisines, 
      avgRating,
      cloudinaryImageId,
      costForTwo,
      locality
     } = resData?.info;
  
    return (
      <div className='card-container'>
        <div className='card'>
          <div className='card-img'>
          <img class="sc-kLLXSd fYzwAb" 
          src={CDN_URL  +
            cloudinaryImageId
           } 
          alt="Kannur food kitchen" 
          />
          </div>
          <div className='card-data'>
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h3>{locality}</h3>
          </div>
        </div>
      </div>
    );
  };

export default Restaurant;