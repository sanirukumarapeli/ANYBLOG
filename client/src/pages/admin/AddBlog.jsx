import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { parse } from 'marked';

function AddBlog() {

  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = { title, subTitle, description: quillRef.current.root.innerHTML, category, isPublished };

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const { data } = await axios.post('/api/blog/add', formData);
      if (data.success) {
        toast.success(data.message);
        setTitle('');
        setSubTitle('');
        setCategory('Startup');
        setIsPublished(false);
        setImage(false);
        quillRef.current.root.innerHTML = '';
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  }

  const generateContent = async () => {
    if (!title) return toast.error("Please enter the blog title first");
    try {
      setLoading(true);
      const { data } = await axios.post('/api/blog/generate', { prompt: title });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // initiat quil once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])


  return (
    <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>Upload Thumbnail</p>
        <label htmlFor="image">
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" className='mt-2 h-16 rounded cursor-pointer' />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </label>
        <p className='mt-4'>Blog Title</p>
        <input type="text" placeholder='Type here...' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={(e) => setTitle(e.target.value)} value={title} />
        <p className='mt-4'>Bolg Subtitle</p>
        <input type="text" placeholder='Type here...' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={(e) => setSubTitle(e.target.value)} value={subTitle} />
        <p className='mt-4'>Blog Description</p>
        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          <div ref={editorRef}></div>
          {loading && <div className='absolute top-0 left-0 w-full h-full bg-white/70 flex justify-center items-center'>
            <div className='w-12 h-12 border-3 border-gray-200 border-t-primary rounded-full animate-spin'></div>
          </div>}
          <button disabled={loading} onClick={generateContent} type='button' className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-primary px-4 py-1.5 rounded hover:underline cursor-pointer'>Generate with AI</button>
        </div>
        <p className='mt-4'>Blog Category</p>
        <select onChange={e => setCategory(e.target.value)} name="category" className="mt-2 px-2 border text-gray-500 border-gray-300 rounded outline-none">
          <option value="">Select a category</option>
          {blogCategories.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
          })}
        </select>
        <div className='flex gap-2 mt-4'>
          <p>Publish Now</p>
          <input type="checkbox" checked={isPublished} className='scale-125 cursor-pointer' onChange={e => setIsPublished(e.target.checked)} />
        </div>
        <button disabled={isAdding} type="submit" className='mt-8 text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>{isAdding ? 'Adding...' : 'Add Blog'}</button>
      </div>
    </form>
  )
}

export default AddBlog