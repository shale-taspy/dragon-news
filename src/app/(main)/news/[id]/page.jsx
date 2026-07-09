import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiStar } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa6';
import { IoMdShare } from 'react-icons/io';
import { IoArrowBack, IoArrowForwardOutline } from 'react-icons/io5';

async function getNewsDetailsById(news_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
  const data = await res.json()
  return data.data[0]
  
}
const NewsDetails = async ({ params }) => {
  const { id } = await params
  const news = await getNewsDetailsById(id)
  console.log("News:", news);

  return (
    <div className='mx-auto max-w-5xl mt-5'>
      <h2>News Details</h2>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/*Author Info*/}
          <div className='flex justify-between bg-sky-100 p-3'>
            <div className='flex gap-2 items-center'>
              <Image src={news.author?.img} alt={news.author?.name} height={50} width={45}></Image>
              <div>
                <h2 className='text-base font-bold'>{news.author?.name}</h2>
                <h2>{news.author?.published_date}</h2>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <IoMdShare className='text-xl' />
              <CiBookmark className='text-xl'/>
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
          
          <figure>
            <Image
            className='w-full'
              height={300}
              width={300}
              src={news.image_url}
              alt={news.title}/>
          </figure>
          <p className='text-base font-bold '>{news.details}</p>
          {/*Down Side*/}
          <div className='flex justify-between mt-4 items-center'>
            <div className='flex gap-2 mb-3'>
              <h2><CiStar />{news.rating.number}</h2>
              <h2><FaRegEye />{news.total_view}</h2>
            </div>
            {<Link href={`/category/${news.category_id}`}><button className='btn bg-cyan-600 text-white'>See Other News Of This Category <IoArrowForwardOutline /></button></Link>}
          </div>
        </div>
        </div>
    </div>
  );
};

export default NewsDetails;