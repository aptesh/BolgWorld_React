import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './FormBlog';
import Pagination from './Pagination';
import Post from './Post';


const CreatePostPage = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [newPost, setNewPost] = useState({ title: '', body: '' });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data', error));
    }, []);

    const handleCreate = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
                setData([response.data, ...data]);
                setNewPost({ title: '', body: '' });
                setCurrentPage(1);
            })
            .catch(error => console.error('Error creating post', error));
    };


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            <Form newPost={newPost} setNewPost={setNewPost} handleCreate={handleCreate} />
            <div className='p-4'>

                <h3>Blogs</h3>
                <Post data={currentPosts} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                />

            </div>
        </div>
    );
};

export default CreatePostPage;