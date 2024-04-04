export const handlePosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    });
    return response;
}
export const handleComments = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'GET',
    });
    return response;
}
export const handleUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
    });
    return response;
}
export const handlePhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET',
    });
    return response;
}

