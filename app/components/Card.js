
export const Card = (props) => {
  let { name, image, species, id } = props
  let div = document.createElement("div")
  div.setAttribute("class", "card")
  div.style.width = "18rem"

  document.addEventListener("click", (e) => {
    //console.log(e.target.className);
    if (e.target.className == "btn btn-primary") {
      localStorage.setItem("id", e.target.id)
    }
  })

  div.innerHTML = `


  <img src=${image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${species}</p>
    <a href="#/${name}" id="${id}" class="btn btn-primary">Ver mas</a>
  </div>

`
  return div
}