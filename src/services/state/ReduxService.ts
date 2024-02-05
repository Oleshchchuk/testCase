import {dispatch, store} from "../../store";
import {LinkedProduct, Product} from "../../models";
import {
    addProductToCompareList,
    clearCompareList,
    removeProductFromCompareList, removeSelectedProduct,
    setLinkedProducts,
    setProduct, setSelectedProduct
} from "../../store/actions/product-page";
import {StateService} from "./StateService";
import {
    compareListSelector,
    linkedProductsSelector,
    productSelector,
    selectedProductSelector
} from "../../store/selectors/product-page";
import {useSelector} from "react-redux";
import {IStore} from "./interfaces";


export class ReduxService extends StateService {
    setProduct(product: Product): void {
        dispatch(setProduct(product));
    }

    getProduct = () => useSelector(productSelector)

    setLinkedProducts(linkedProducts: LinkedProduct[]): void {
        dispatch(setLinkedProducts(this.sortLinkedProducts(linkedProducts)));
    }

    getLinkedProductsList = () => useSelector(linkedProductsSelector)

    addProductToCompareList(product: LinkedProduct): void {
        dispatch(addProductToCompareList(product));
    }

    removeProductFromCompareList(product: Product): void {
        dispatch(removeProductFromCompareList(product));
    }

    clearCompareList(): void {
        dispatch(clearCompareList());
    }

    getProductCompareList = () => useSelector(compareListSelector)

    getSelectedProduct= () => useSelector(selectedProductSelector)

    removeSelectedProduct(): void {
        dispatch(removeSelectedProduct());
    }

    setSelectedProduct(product: LinkedProduct): void {
        dispatch(setSelectedProduct(product));
    }

    getStore(): IStore {
        return store.getState()
    }
}
