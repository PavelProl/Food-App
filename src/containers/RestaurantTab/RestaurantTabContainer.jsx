import { Tab } from "../../components/Tab/Tab";

import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../store/restaurants/selectors";

export const RestaurantTabContainer = ({ id, ...props }) => {
    const name = useSelector((state) => selectRestaurantNameById(state, { id }));

    return <Tab title={name} {...props} />;
};
