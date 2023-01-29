let fetchTodos = async function () {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      const row = document.querySelector(".row");
      data.forEach((todos) => {
        row.innerHTML += `
    <div class="col my-5" >
    <div class=" col d-flex"  id="div1">
       <p class="fw-bold"> title</p>
       <p>"${todos.title}"</p>
    </div>
    <div class=" col d-flex"  id="div2">
       <p class="fw-bold"> completed</p>
       <p>"${todos.completed}"</p>
    </div>
   
    </div> `;
      });
    } else {
      console.log("errore risposta");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchTodos();
