const fetchPhotos = async function () {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (res.ok) {
      let data = await res.json();
      console.log("data", data);

      let row = document.querySelector(".row");
      data.forEach((photo) => {
        row.innerHTML += `
    <div class="col-3 my-5">
      <h6> Title </h6>
      <p>"${photo.title}" </p>
      <h6> id album </h6>
      <p> "${photo.id}" </p>


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

fetchPhotos();
