// Reconstruct the code step-by-step until you have written a complete AJAX POST request.

const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users';
const data = JSON.stringify({"name": "John"})

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    console.log(xhr.response)
  }
}

xhr.open('POST', url);
xhr.send(data);