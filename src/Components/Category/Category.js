import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = (props) => {
    const { count, setCount } = props;
    return (
        <div>
            <h3>I am Category: {count}</h3>
            <CategoryDetails count={count} setCount={setCount}></CategoryDetails>
        </div>
    );
};

export default Category;