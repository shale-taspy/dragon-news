'use client';

import Link from 'next/link';
import React from 'react';

const LeftSide = ({categories, activeId}) => {
  return (
    <div className="font-bold text-3xl col-span-3 mt-5">
        <p className=" ">All Categories</p>
  <ul className="flex flex-col gap-2">
      {
      categories.news_category.map(category=>{
        return <li key={category.category_id} 
        
        className={`
        ${activeId === category.category_id? "bg-red-400 text-amber-50":''}
        
          rounded-md font-bold text-center text-xl`}>
            
        <Link href={`/category/${category.category_id}`} className='block p-2'>

        {category.category_name}
        </Link>
        
        </li>
      })
    }
  </ul>
      </div>
  );
};

export default LeftSide;