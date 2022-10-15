import { Tabs } from "../../components/Tabs/Tabs";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/restaurants/selectors";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";

export const RestaurantTabsContainer = ({ onClick, activeTabIndex }) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return (
        <Tabs
            tabIds={restaurantIds}
            onClick={onClick}
            activeTabIndex={activeTabIndex}
            renderTab={(props) => (
                <RestaurantTabContainer key={props.id} {...props} />
            )}
        />
    );
};
