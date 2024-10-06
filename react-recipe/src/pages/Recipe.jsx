export default function Recipe() {
  return (
    <div className="body-container">
      <div className="view recipe row" data-view="recipe">
        <div className="title row">
          <i className="far fa-heart heart"></i>
          <h1>Recipe Name</h1>
        </div>
        <div className="source">
          <a target="_blank">Source</a>
        </div>
        <div className="image-ingredients row">
          <div className="recipe-image">
            <img src="" />
          </div>
          <div className="recipe-ingredients-container">
            <h2>Ingredients</h2>
            <table className="recipe-ingredients">
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
        <h2>Instructions</h2>
        <div className="recipe-instructions row">
        </div>
      </div>
    </div>
  )
}
