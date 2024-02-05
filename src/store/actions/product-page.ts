import {createAction} from '@reduxjs/toolkit';
import {LinkedProduct, Product} from '../../models';

export const setProduct = createAction<Product>('product-page/set-product');

export const setLinkedProducts = createAction<LinkedProduct[]>('product-page/set-linked-product');

export const addProductToCompareList = createAction<LinkedProduct>(
    'product-page/add-product-to-compare-list',
);

export const removeProductFromCompareList = createAction<Product>('product-page/remove-product-from-compare-list');

export const clearCompareList = createAction('product-page/clear-compare-list');

export const setSelectedProduct = createAction<LinkedProduct>('product-page/set-selected-product');
export const removeSelectedProduct = createAction('product-page/remove-selected-product');