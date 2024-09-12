export const ShimmerRestaurant = () => {
    const shimmerArray = new Array(8).fill(null); // Create an array with 8 elements
    
    return (
      <div className="shimmer-grid">
        {shimmerArray.map((_, index) => (
          <div key={index} className="shimmer-card-container">
            <div className="shimmer-card">
              {/* Shimmer for the image */}
              <div className="shimmer-card-img shimmer-effect"></div>
  
              {/* Shimmer for the content */}
              <div className="shimmer-card-data">
                <div className="shimmer-line shimmer-effect"></div>
                <div className="shimmer-line shimmer-effect"></div>
                <div className="shimmer-line shimmer-effect"></div>
                <div className="shimmer-line shimmer-effect"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShimmerRestaurant;
  