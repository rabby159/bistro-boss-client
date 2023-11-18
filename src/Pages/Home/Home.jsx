import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;