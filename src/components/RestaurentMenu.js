
import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurentMenu(resId);

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(itemCards);
    return resInfo == null ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h2>{costForTwoMessage}</h2>
            <h2>BreakFast</h2>
            <ul>
              {itemCards.map(item => 
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -
                 Rs. {item?.card?.info?.price / 100}
                </li>)}
            </ul>
        </div>
    );
}

export default RestaurentMenu;


