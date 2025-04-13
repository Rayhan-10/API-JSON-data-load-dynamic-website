const handleUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('error happen', error))
}
// handleUser();


// const handleUser2 = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json();
//     console.log(data);
// }
// handleUser2();

const handleUser2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log('error happen', error);
    }
}
handleUser2();
