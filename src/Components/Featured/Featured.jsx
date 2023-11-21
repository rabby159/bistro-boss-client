import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './FeaturedCss.css';


const Featured = () => {
    return (
        <div className="max-w-7xl mx-auto my-20 featured-bg py-5">
            <SectionTitle heading='FROM OUR MENU' subHeading='Check it out'></SectionTitle>
            <div className="md:flex justify-center">
                <div>
                    <img className='p-10' src={featuredImg} alt="" />
                </div>
                <div className="p-20 space-y-2 text-white">
                    <p>Nov 22, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut architecto eveniet natus exercitationem at adipisci optio nisi ipsam quisquam, distinctio sequi consequuntur, iste excepturi cupiditate beatae minima facilis! Perferendis, accusamus.</p>
                    <button className="btn btn-warning">Read Me</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;