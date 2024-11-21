import React from 'react'
import list from "../../public/list.json"
import Cards from "../Components/Cards"
import { Link } from "react-router-dom"

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have you{" "}
          <span className='text-pink-500'>Here! :)</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsum fugit eveniet maiores repellat eum nemo consequuntur, eaque quos officia molestiae accusamus optio! Odio illum quos reiciendis quia, totam doloribus ipsa, architecto modi repudiandae voluptatem voluptas voluptatibus, quae magni excepturi cum hic. Eos, rerum. Nihil officia, voluptatum sed enim ullam iure a optio nemo adipisci voluptatem libero, repudiandae numquam tenetur tempora soluta! Ratione blanditiis quo esse incidunt ut. Eius saepe unde quod libero numquam placeat sequi minus repudiandae culpa sit deleniti minima maiores ipsum molestiae voluptates optio nobis asperiores rerum obcaecati, accusantium reiciendis. Facere eius, dignissimos maxime asperiores recusandae consectetur illum, adipisci at dolorum molestiae quia mollitia dolorem soluta, ullam voluptas totam. Enim, dolores veniam velit quia modi ipsum, aliquid pariatur consectetur, excepturi ullam perspiciatis atque asperiores molestiae vitae adipisci distinctio est? Aspernatur soluta quaerat totam tenetur voluptas, ratione eius sequi rerum deleniti quo placeat perferendis eaque, quas fuga ipsam.
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
          Back
        </button>
        </Link>  
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item) => (
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course
