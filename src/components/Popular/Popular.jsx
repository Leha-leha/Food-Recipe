import css from "./Popular.module.css";
import RamenNoodles from "../../assets/images/healthy-bone-broth-ramen.png";

function Popular() {
  return (
    <main>
      <div style={{float: "none"}}></div>
      <div className='container container-sm'>
        <div className={`${css.HeadLine} mb-5`}>
          <h2>Popular For You!</h2>
        </div>
        <div className={css.HeroImage}>
          <img src={RamenNoodles} alt='ramen' className='img-fluid' />
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

export default Popular;