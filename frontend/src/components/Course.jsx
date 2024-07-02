import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container  md:px-20 px-4 '> 
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>we're delighted to you <span className="text-pink-500">here! :)</span></h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi magni asperiores laborum odio iure officia ullam consequuntur! Tempore laudantium atque repudiandae minima ducimus earum quae sint inventore consequuntur eaque!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque numquam vitae earum sit temporibus minus, mollitia hic dolore itaque laudantium quisquam optio natus modi totam accusamus consectetur porro repellat possimus.
          </p>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md: grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      
    </>
  )
}

export default Course
