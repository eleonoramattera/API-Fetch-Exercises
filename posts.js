const fetchPost = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      const row = document.querySelector(".row");

      data.forEach((post) => {
        row.innerHTML += `
    <div class ="col">
    <div class="card mb-5" style="width: 18rem;     height: 350px;">
 
  <div class="card-body">
    <h5 class="card-title">"${post.title}"</h5>
    <p class="card-title">"${post.id}"</p>
    <p class="card-text">"${post.body}"</p>
   
  </div>
</div>
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

fetchPost();
