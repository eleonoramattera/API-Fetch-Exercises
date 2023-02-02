const fetchAlbum = async function () {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");

    if (res.ok) {
      const data = await res.json();
      console.log(data);

      const row = document.querySelector(".row");
      data.forEach((singoloAlbum) => {
        row.innerHTML += `
        <div class="col">
    <div class="card" style="width: 18rem; margin-bottom:20px">
  <div class="card-header">
   "${singoloAlbum.title}"
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">"${singoloAlbum.id}"</li>
  </ul>
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

fetchAlbum();
