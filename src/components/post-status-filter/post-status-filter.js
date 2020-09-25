import React from "react";
import "./post-status-filter.css"

const PostStatusFilter = () => {
  return (
    <div className='btn-group'>
      <button type='button' className='btn btn-outline-primary'>Все</button>
      <button type='button' className='btn btn-outline-info'>Понравилось</button>
    </div>
  )
}

export default PostStatusFilter