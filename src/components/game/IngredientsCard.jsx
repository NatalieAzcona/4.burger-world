import "../../assets/styles/ingredients.scss"

function IngredientsCard() {
  return (
    <section className="ingredients-view">
      <div className="hamburger">
        <div className="bun bun--top"></div>
        <div className="salad"></div>
        <div className="cheese"></div>
        <div className="beef"></div>
          <div className="tomatos">
            <div className="tomato tomato--1"></div>
            <div className="tomato tomato--2"></div>
          </div>
        <div className="bun bun--bottom"></div>
      </div>
    </section>
  )
}

export default IngredientsCard


//lista de ingredientes