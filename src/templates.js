const popCards = (snack) => {
  return `<div class="card" id=${snack.id}>
  <div class="card-image">
    <figure class="image is-4by3">
      <img src=${snack.img} alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${snack.name}</p>
      </div>
    </div>
    <div class="content">
     ${snack.description}
     <h5>${snack.price}</h5>
      <br>
      <footer class="card-footer">
          <a href="#" class="card-footer-item">View Reviews</a>
      </footer>
    </div>
  </div>
</div>
`
}

module.exports = {popCards}