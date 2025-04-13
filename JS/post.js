const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            displayPost(data);
        })
}
// handlePost();
const displayPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <h1>${post.id}</h1>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div)

        div.style.border = '1px solid black';
        div.style.margin = '10px';
        div.style.padding = '50px';
        div.style.borderRadius = '8px';
        div.style.backgroundColor= 'aqua'
    });
}

const handleUpdate = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const handleCreate = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}