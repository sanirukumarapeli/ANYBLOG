import React from 'react'

function Newsletter() {
return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
            <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog</h1>
            <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to our newsletter to get the latest blog posts delivered to your inbox.</p>
            <form className='flex items-center justify-center gap-2 max-w-2xl w-full md:h-13 h-12'>
                    <input className='border border-gray-300 rounded-full h-full outline-none flex-1 px-3 text-gray-500' type="email" placeholder="Enter your email" required />
                    <button type="submit" className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-full'>Subscribe</button>
            </form>
    </div>
)
}

export default Newsletter