import React from 'react'

function Cards({item}) {
    console.log(item);
    console.log("Tushar Nagar");
  return (
    <>
    <div className="mt-5 p-3 my-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
        <figure>
            <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-900">Buy Now</div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards
