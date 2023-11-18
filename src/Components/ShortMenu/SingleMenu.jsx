

const SingleMenu = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex space-x-6">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="h-[104px]" src={image} alt="" />
            <div>
                <h3 className="font-semibold">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <h2 className="text-yellow-500">${price}</h2>
        </div>
    );
};

export default SingleMenu;