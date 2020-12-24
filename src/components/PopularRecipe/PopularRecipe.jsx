import css from "./PopularRecipe.module.css";
import ChickenKare from "../../assets/images/kare-chicken.png";

function PopularRecipe() {
  return (
    <main id={css.Main}>
      <div style={{ float: "none" }}></div>
      <div className='container'>
        <div className={`${css.HeadLine} mb-5`}>
          <h2>Popular Recipe</h2>
        </div>
        <div className={`${css.Wrapper}`}>
          <div className={css.Box}>
            <img src={ChickenKare} alt='Chicken' className='img-fluid' />
            <p className={css.BottomLeft}>Chicken Kare</p>
          </div>
          <div className={css.Box}>
            <img src={ChickenKare} alt='Chicken' className='img-fluid' />
            <p className={css.BottomLeft}>Chicken Kare</p>
          </div>
          <div className={css.Box}>
            <img src={ChickenKare} alt='Chicken' className='img-fluid' />
            <p className={css.BottomLeft}>Chicken Kare</p>
          </div>
          <div className={css.Box}>
            <img src={ChickenKare} alt='Chicken' className='img-fluid' />
            <p className={css.BottomLeft}>Chicken Kare</p>
          </div>
          <div className={css.Box}>
            <img src={ChickenKare} alt='Chicken' className='img-fluid' />
            <p className={css.BottomLeft}>Chicken Kare</p>
          </div>
          <div className={css.Box}>
            <img src={ChickenKare} alt='Chicken' className='img-fluid' />
            <p className={css.BottomLeft}>Chicken Kare</p>
          </div>
        </div>
      </div>
      <footer>
        <div className='container'>
          <div className={css.Slogan}>
            <h1>Eat, Cook, Repeat</h1>
            <p>Share your best recipe by uploading here !</p>
          </div>
          <div className={css.FooterNav}>
            <ul className={css.MainNav}>
              <li>
                <a href='#product'>Product</a>
              </li>
              <li>
                <a href='#company'>Company</a>
              </li>
              <li>
                <a href='#learn'>Learn More</a>
              </li>
              <li>
                <a href='#contact'>Get In Touch</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default PopularRecipe;