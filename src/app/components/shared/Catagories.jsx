import React from 'react';

async function getCatagories (){
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}

const Catagories = async() => {
  const catagories = await getCatagories()
  console.log("Catagories:",catagories);

  return (
    <div className='flex flex-col gap-3 mt-2'>
      {
        catagories.news_category.map(category => {
          return <li className='list-none rounded-md font-bold text-center text-lg bg-slate-200 p-2' key={category.category_id}>{category.category_name}</li>
        })
      }
    </div>
  );
};

export default Catagories;