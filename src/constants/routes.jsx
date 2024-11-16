import { BasketPage, ComparisonPage, HomePage, LikedPage } from "../pages";


export const routes = [
    {
        id: 1,
        path: "/",
        element:<HomePage/>
    },

    {
        id: 2,
        path: "/comparisonPage",
        element: <ComparisonPage/>
    },
    {
        id: 3,
        path: "/likedpage",
        element: <LikedPage/>
    },
    {
        id: 4,
        path: "/basketpage",
        element: <BasketPage/>
    }
];