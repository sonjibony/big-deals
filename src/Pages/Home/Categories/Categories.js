import React, { useEffect, useState } from 'react';
import Category from './CategoryCard';

const Categories = () => {

const [categories,setCategories] = useState([])

useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => {
        setCategories(data)
    }, [])
})

    return (
        <div>
        
             <div className="divider w-1/2 mx-auto">Best Items</div>
             <h1 className="text-4xl font-bold text-center">CATEGORY</h1>
 <div className=' my-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
{
    categories.map(category => <Category
    key={category.categoryNo}
    category={category}
    ></Category>)
}
 </div>
        </div>
    );
};

export default Categories;