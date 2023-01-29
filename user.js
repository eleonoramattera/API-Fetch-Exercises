const fetchUsers = async function () {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      const row = document.querySelector(".row");

      data.forEach((user) => {
        row.innerHTML += `
          <div class ="col-7 px-5 mb-5 bg-primary text-white d-flex flex-column  justify-content-center   rounded"> 
          <h4> Name </h4>
          <p>"${user.name}" </p>
          <h4> id </h4>
          <p> "${user.id}"</p>
          <h4> Email </h4>
          <p> "${user.email}"</p>
          <div>
          
          `;
      });
    } else {
      console.log("errore response");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();
