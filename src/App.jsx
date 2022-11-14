import { Restaurants } from './pages/Restaurants';
import { Restaurant } from "./components/Restaurant/Restaurant";
import { Layout } from "./components/Layout/Layout";
import { NotFound } from "./pages/NotFound";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <Provider store={store}>
            <Layout>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<div>HomePage</div>} />
                    <Route path="restaurants" element={<Restaurants />}>
                        <Route path=":restaurantId" element={<Restaurant />} />
                    </Route>
                </Routes>
            </Layout>
        </Provider>
    );
};
