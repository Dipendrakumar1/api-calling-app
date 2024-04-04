import './style.css';
import { handlePosts, handleComments, handleUsers, handlePhotos } from '../images/apicalling';
import { useEffect, useState } from 'react';
const Button = (props) => {
    const [posts, setPosts] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [state, setState] = useState(null);
    useEffect(() => {
        console.log(photos);
    }, [photos]);
    const handleToggle = (toggle) => {
        setState(toggle);
    }
    const handleViewPosts = () => {
        handlePosts().then(posts => posts.json()).then(posts =>
            setPosts(posts));
        handleToggle('posts');
    }
    const handleViewComments = () => {
        handleComments().then(comments => comments.json()).then(comments =>
            setComments(comments));
        handleToggle('comments');
    }
    const handleViewUSers = () => {
        handleUsers().then(users => users.json()).then(users =>
            setUsers(users));
        handleToggle('users');
    }
    const handleViewPhotos = () => {
        handlePhotos().then(photos => photos.json()).then(photos =>
            setPhotos(photos));
        handleToggle('photos');
    }

    const data = ['Vipin 😎, Just Lookig Like WAW!!', 'vipin'];
    return (

        <div className='main-container'>
            <div>
                <button className='button-27' onClick={handleViewPosts}>{props.title[0]}</button>
                <button className='button-27' onClick={handleViewComments}>{props.title[1]}</button>

                <button className='button-27' onClick={handleViewUSers}>{props.title[2]}</button>
                <button className='button-27' onClick={handleViewPhotos}>{props.title[3]}</button>
            </div>
            <div className='li-class-container'>
                <div>

                    {
                        state === 'posts' && posts.map(post =>
                            <li>{post.title}</li>
                        )
                    }


                    {
                        state === 'photos' && photos.map(post =>
                            <li><img src={post.url} alt="Girl in a jacket" width="500" height="500" /></li>
                        )
                    }
                    {
                        state === 'users' && users.map(user =>
                            <li>{user.name}</li>
                        )
                    }
                    {
                        state === 'comments' && comments.map(comment =>
                            <li>{comment.name}</li>
                        )
                    }



                </div>

            </div>

        </div>



    )
}
export default Button;