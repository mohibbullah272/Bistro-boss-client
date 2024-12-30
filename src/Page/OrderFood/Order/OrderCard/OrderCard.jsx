

const OrderCard = ({item}) => {
    const {price,name,image,recipe}=item || {}
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
            <p className="bg-gray-900 text-yellow-500 absolute right-2 px-5 top-2"> $ {price}</p>
        </figure>
        <div className="flex flex-col items-center p-10 gap-5">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline border-0  border-orange-500 bg-slate-100 font-semibold border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;