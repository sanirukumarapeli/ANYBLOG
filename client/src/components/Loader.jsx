import React from 'react'

function Loader() {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-white'>
            <div className='w-12 h-12 border-3 border-gray-200 border-t-primary rounded-full animate-spin'></div>
            <p className='mt-4 text-gray-500 text-sm tracking-wide'>Loading...</p>
        </div>
    )
}

export default Loader