import React from 'react';
import Blogs2 from './Blogs2';

const TrendingBlogs = ({ data }) => {

  return (
    <>
      <div className="trending-blog-container">
        <div className="blog-cards-container">
          {data && data.map((elem, indx) => <Blogs2 {...elem} key={indx} />)}
        </div>
      </div>
    </>
  )
}

export default TrendingBlogs;
