
import LeftSide from "@/app/components/homepage/news/LeftSide"
import NewsCard from "@/app/components/homepage/news/NewsCard";
import RightSide from "@/app/components/homepage/news/RightSide"
import React from 'react';

async function getCategories() {
  const res =  await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}

async function getNewsByCategoryId(category_id) {
  const res =  await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data.data
}



const NewsCategory = async ({params}) => {
    const categories = await getCategories()
  console.log(categories.news_category)

      const {id} = await params
    console.log("ParamsRes:",id)

  const news = await getNewsByCategoryId(id)
  console.log("News:",news)

  return (
    <div className="grid grid-cols-12 gap-2 container mx-auto my-12">
      <LeftSide categories={categories} activeId={id}></LeftSide>
      <div className=" text-3xl  col-span-6">
        All News
        <div className="space-y-2">
{
        news.length > 0? news.map(n=>{
            return <NewsCard key={n._id} news={n}>
              {n.title}
            </NewsCard>
          })
          : <h2 className="font-medium text-cyan-600">No News Found</h2>
        }
        </div>
        
        </div>

      <div className="font-bold text-3xl col-span-3">

        <RightSide></RightSide>
        </div>
    </div>
  );
};

export default NewsCategory;