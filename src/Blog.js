import {React} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

function Blog() {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
    return (
        <div className='home'>
        {isPending && <h2 className='lazyload'>Loading ... </h2>}
        {error && <h2 className='errorMessage'>{error}</h2>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    )
}

export default Blog
