import React from 'react';

const CategoryDetails = (props) => {
    const { count, setCount } = props;
    return (
        <div>
            <h3>I am Category Details: {count}</h3>
        </div>
    );
};

export default CategoryDetails;