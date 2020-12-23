import css from "./PopularRecipe.module.css";
import ChickenKare from "../../assets/images/kare-chicken.png";

function PopularRecipe() {
  return (
    <main id={css.Main}>
      <div className='container'>
        <div className={`${css.HeadLine} mb-5`}>
          <h2>Popular Recipe</h2>
        </div>
        <div className={css.Wrapper}>
          <div className={css.Box}>
            <p>Chicken Kare</p>
          </div>
          <div className={css.Box}></div>
          <div className={css.Box}></div>
          <div className={css.Box}></div>
          <div className={css.Box}></div>
          <div className={css.Box}></div>
        </div>
      </div>
    </main>
  );
}

export default PopularRecipe;