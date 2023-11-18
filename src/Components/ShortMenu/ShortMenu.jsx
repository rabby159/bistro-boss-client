import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SingleMenu from "./SingleMenu";

const ShortMenu = () => {
    const [ShortMenu, setShortMenu] = useState([]);

    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setShortMenu(popularItems);
        })
    }, [])

    return (
        <section className="max-w-7xl mx-auto my-10">
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Check it out'}
            >
            </SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {
                    ShortMenu?.map(item => <SingleMenu key={item._id} item={item}></SingleMenu>)
                }
            </div>
        </section>
    );
};

export default ShortMenu;