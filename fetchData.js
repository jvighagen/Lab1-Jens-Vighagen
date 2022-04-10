

const URL = "http://localhost:3000/api/users";



function fetchData() {
    fetch(URL)
    .then(response => {
        console.log(response);
       if (!response.ok) {
           throw Error("Error! =)")
       }
       return response.json();

    })
    .then(data => {
        console.log(data);
        const html = data.map(posts => {
        return `

        <body>
        <div>
        <table>
        <tr>
          <th>Id</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
        <tr>
          <td>${posts._id}</td>
          <td>${posts.firstname}</td>
          <td>${posts.lastname}</td>
          <button id="post-btn" onclick=deleteUser('${posts._id}')>Delete user!</button>
        </tr>
      </table>
      </div>


            <br><br>
      <form id="myform" onsubmit="updateUser('${posts._id}', document.getElementById('fname').value, document.getElementById('lname').value)">
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname" ><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname" ><br>
      <input type="submit" value="Submit">
      </form> 
    <p>-------------------------------------------------------------------</p>
    </body>
        `;
        

        })
        .join("");
        console.log(html);
        document.querySelector('#app')
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => {
        console.log(err);
    });
}

fetchData();


function update2users(data, name) {
  alert(data);
}

function updateUser(id, fname, lname) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var updateUser = JSON.stringify({
    firstname: fname,
    lastname: lname
})

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: updateUser,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/users/" + id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



function createUser(event) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  event.preventDefault();

  const data = new FormData(event.target);

  const firstname = data.get('firstname');
  const lastname = data.get('lastname');


  var newUser = JSON.stringify({
    firstname: firstname,
    lastname: lastname
})

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: newUser,
  redirect: 'follow'
};
 try {
  fetch("http://localhost:3000/api/users/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 } catch (error) {
  res.status(400).json(err);
   
 }
}
const form = document.querySelector('form');
form.addEventListener('submit', createUser);



function deleteUser(data) {


  fetch("http://localhost:3000/api/users/" + data, {
    method: 'DELETE',
  })
  .then(res => {
    return res.json()
  }) 
  .then(data => console.log(data))
  window.location.href = "app.html";
}


/*

  try {
    let response = await fetch(`http://localhost:3000/api/users/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
    });
} catch (err) {
}


        <button onclick="createUser()">Create user!</button>

*/
