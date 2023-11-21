
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const ChiefReco = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={'https://i.ibb.co/K5Yxq5B/slide1.jpg'}
              alt="img"
              className="rounded-xl h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad!</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={'https://i.ibb.co/K5Yxq5B/slide1.jpg'}
              alt="img"
              className="rounded-xl h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad!</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={'https://i.ibb.co/K5Yxq5B/slide1.jpg'}
              alt="img"
              className="rounded-xl h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad!</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefReco;
