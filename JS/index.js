const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {

        showUser(data);
    })
}

const showUser = (users) => {
    const userContainer = document.getElementById('users');
     users.forEach(user => {
            const li= document.createElement('li');
            li.innerText = user.name;
            userContainer.appendChild(li);
        })
}
