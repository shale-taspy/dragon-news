'use client'
import React from 'react';
import Marquee from 'react-fast-marquee';

const newsArticles = [
  {
    id: "1",
    title: "Breaking: Tech Innovations Set to Transform the Industry This Year"
  },
  {
    id: "2",
    title: "Global Markets See Steady Growth Amid New Economic Policies"
  },
  {
    id: "3",
    title: "Local Sports Team Triumphs in Historic Championship Victory"
  }
];

const BreakNews = () => {
  return (
    <div className='flex justify-between gap-3 items-center bg-gray-300 py-5 container mx-auto px-3'>
      <button className='btn bg-red-600 text-white'>Latest News</button>
      <Marquee pauseOnHover={true} speed={70}>
        {newsArticles.map(news => {
          return (
            <span key={news.id} className="mx-4">
              {news.title}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakNews;