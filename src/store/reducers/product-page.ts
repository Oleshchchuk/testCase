import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {LinkedProduct, Product} from '../../models';
import {
  addProductToCompareList,
  clearCompareList,
  removeProductFromCompareList,
  setLinkedProducts,
  setProduct
} from "../actions/product-page";

type CatalogPageState = {
  product: Product | undefined;
  linkedProducts: LinkedProduct[] | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  product: undefined,
  linkedProducts: undefined,
  comparingProducts: undefined,
};


export const productPageReducer = createReducer(defaultState, (builder) => {
  builder
      .addCase(setProduct, (state, action: PayloadAction<Product>) => {
        state.product = action.payload;
      })
      .addCase(setLinkedProducts, (state, action: PayloadAction<LinkedProduct[]>) => {
        state.linkedProducts = action.payload;
      })
      .addCase(addProductToCompareList, (state, action: PayloadAction<Product>) => {
        if (!state.comparingProducts) {
          state.comparingProducts = [];
        }
        if (!state.comparingProducts.some(product => product.id === action.payload.id)) {
          state.comparingProducts = [...state.comparingProducts, action.payload];
        }
      })
      .addCase(removeProductFromCompareList, (state, action: PayloadAction<Product>) => {
        state.comparingProducts = state.comparingProducts?.filter(product => product.id !== action.payload.id);
      })
      .addCase(clearCompareList, (state) => {
        state.comparingProducts = undefined;
      });
});