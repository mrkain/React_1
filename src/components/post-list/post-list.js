import React from "react"
import PostListItem from '../post-list-item'
import "./post-list.css"

const PostList = ({posts, onDelete}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item            // Отдельно вытаскиваем it, и отдельно вытаскиваем itemProps (весь отсальной объект, за исключением id)
    return (
      <li key={id} className='list-group-item'>
        {/*<PostListItem label={item.label} important={item.important}/>*/}
        {<PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}/>}
      </li>
    )
  })

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default PostList