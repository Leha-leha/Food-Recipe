import css from "./NewRecipe.module.css";
import Burger from "../../assets/images/burger.png";

function NewRecipe() {
  return (
    <main id={css.Main}>
      <div className='container'>
        <div className={`${css.HeadLine} mb-5`}>
          <h2>New Recipe</h2>
        </div>
        <div className={css.HeroImage}>
          <img src={Burger} alt='burger' />
        </div>
        <div className={css.HeroText}>
          <h2>
            Healthy Bone Broth
            <br />
            Ramen (Quick & Easy)
          </h2>
          <p className={`${css.LongParagraph} mb-4`}>
            Quick + Easy Chicken Bone Broth Ramen-
            <br /> Healthy chicken ramen in a hurry? That’s right!
          </p>
          <button type='button' className={`btn btn-warning ${css.Btn}`}>
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}

export default NewRecipe;