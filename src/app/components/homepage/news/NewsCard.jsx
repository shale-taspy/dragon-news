import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiStar } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa6';
import { IoMdShare } from 'react-icons/io';

function NewsCard({ news }) {
  console.log("News:",news);

  return (
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
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <figure>
          <Image
          className='w-full'
            height={300}
            width={300}
            src={news.image_url}
            alt={news.title}/>
        </figure>
        <p className='text-base font-bold line-clamp-3'>{news.details}</p>
        {/*Down Side*/}
        <div className='flex justify-between mt-4 items-center'>
          <div className='flex gap-2 mb-3'>
            <h2><CiStar />{news.rating.number}</h2>
            <h2><FaRegEye />{news.total_view}</h2>
          </div>
          <Link href={`/news/${news._id}`}><button className='btn'>See Details</button></Link>
        </div>
      </div>
      </div>
      
  );
}

export default NewsCard;