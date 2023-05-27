import { createContext, useState } from "react";

export type FavoritesContext = {
    ids: number[],
    addFavorite: (id: number) => void,
    removeFavorite: (id: number) => void,
};

export const MyFavoritesContext = createContext<FavoritesContext>({
    ids: [],
    addFavorite: (id: number) => {},
    removeFavorite: (id: number) => {},
});

function FavoritesContextProvider({children}: any){
    const [favoriteProductsIds, setFavoriteProductsIds] = useState<number[]>([]);

    function addFavorite(id: number) {
        setFavoriteProductsIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id: number) {
        setFavoriteProductsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteProductsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <MyFavoritesContext.Provider value={value} >{children}</MyFavoritesContext.Provider>
}

export default FavoritesContextProvider;