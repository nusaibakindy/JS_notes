
/*/ const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
          const success = true;
      
          if (success) {
            resolve("Task done!");
          } else {
            reject("Something went wrong");
          }
        }, 1000);
      }
);
/*/


 /*/ myPromise
.then(result => {
  //console.log(result);
   
 })
  .catch(error => {
    console.error(error);
  });
  
  fetch('https://jsonplaceholder.typicode.com/posts/1')

    .then(response => {
       console.log(response);
       console.log( response.json());
    }).then(
        data => {
            console.log("This is data: ".concat(JSON.stringify(data)))
        }
    )
    .catch(error => console.error(error));
/*/
/*/fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(
        data => {
            console.log("This is data: ".concat(JSON.stringify(data)))
        }
    )
    .catch(error => console.error(error));
    /*/
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(
        (response) => { return response.json(); }
        //response => response.json()
        // response => response.json() 
        // no need for round brackets
        // no need for return statement
        // Just another way of writing things
).then(
    data => {
        const container = document.getElementById('container');
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
       <h3>${data.title}</h3>
       <h3>${data.id}</h3>
       <h3>${data.userId}</h3>
       <p>${data.body}</p>
     `;
        container.appendChild(postDiv);
    }
).catch(
    error => {
        console.error('Error fetching:', error);
    }
);