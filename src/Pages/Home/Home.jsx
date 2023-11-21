import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import ChiefReco from "../../Components/ChiefReco/ChiefReco";
import Featured from "../../Components/Featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import ShortMenu from "../../Components/ShortMenu/ShortMenu";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <About></About>
            <ShortMenu></ShortMenu>
            <ChiefReco></ChiefReco>
            <Featured></Featured>
        </div>
    );
};

export default Home;