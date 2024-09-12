const Filter = ({ onFilter }) => {
    return (
        <div id="filter-btn" >
            <button onClick={onFilter}>
                Top Rated Restaurants
            </button>
        </div>
    );
};

export default Filter;
