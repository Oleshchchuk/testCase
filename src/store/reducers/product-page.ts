import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {LinkedProduct, Product} from '../../models';
import {
    addProductToCompareList,
    clearCompareList,
    removeProductFromCompareList, removeSelectedProduct,
    setLinkedProducts,
    setProduct, setSelectedProduct
} from "../actions/product-page";

type CatalogPageState = {
    product: Product | undefined;
    linkedProducts: LinkedProduct[] | undefined;
    comparingProducts: LinkedProduct[] | undefined;
    selectedProduct: LinkedProduct | undefined;
};

const defaultState: CatalogPageState = {
    product: undefined,
    linkedProducts: undefined,
    comparingProducts: undefined,
    selectedProduct: undefined,
};


export const productPageReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(setProduct, (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        })
        .addCase(setLinkedProducts, (state, action: PayloadAction<LinkedProduct[]>) => {
            state.linkedProducts = action.payload;
        })
        .addCase(addProductToCompareList, (state, action: PayloadAction<LinkedProduct>) => {
            if (!state.comparingProducts) {
                state.comparingProducts = [];
            }
            state.comparingProducts = [...state.comparingProducts, action.payload]
        })
        .addCase(removeProductFromCompareList, (state, action: PayloadAction<Product>) => {
            state.comparingProducts = state.comparingProducts?.filter(product => product.id !== action.payload.id);
        })
        .addCase(clearCompareList, (state) => {
            delete state.comparingProducts;
        })
        .addCase(setSelectedProduct, (state, action: PayloadAction<LinkedProduct>) => {
            state.selectedProduct = action.payload;
        })
        .addCase(removeSelectedProduct, (state) => {
            delete state.selectedProduct;
        })

});