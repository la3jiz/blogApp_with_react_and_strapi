import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({blogs}) => {

  console.log(blogs)


  return (
    <div className='w-full bg-[#f9f9f9] py-[150px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
            {blogs.data.map((blog)=>
                <Link to={`blog/${blog.id}`}  key={blog.id}>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.attributes.blogTitle}</h3>
                            <p className='text-gray-600 text-xl'>{blog.attributes.blogDesc}</p>
                        </div>
                    </div>
                </Link>

            )}









                {/* {blogs1.map((blog)=>

                <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={blog.coverImg} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                            <p className='text-gray-600 text-xl'>{blog.desc}</p>
                        </div>
                    </div>
                </Link>
                
                
                
                )} */}

                



            </div>

        </div>
    </div>
  )
}

export default Blogs