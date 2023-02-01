const fetchComments = async function () {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");

    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      const row = document.querySelector(".row");
      data.forEach((comment) => {
        row.innerHTML += `
     <div class="col col-3 my-4">   
    <p>nome </p>
<p> "${comment.name}" </p>
<p> email </p>
<p> "${comment.email}" </p>
<p> text </p>
<p> "${comment.body}"</p>
</div>
    `;
      });
    } else {
      console.log("errore");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchComments();
