import {dispatch} from "../../store";
import {LinkedProduct, Product, ProductLinkType} from "../../models";
import {
    addProductToCompareList,
    clearCompareList,
    removeProductFromCompareList,
    setLinkedProducts,
    setProduct
} from "../../store/actions/product-page";
import {StateService} from "./StateService";


export class ReduxService extends StateService {
    setProduct(product: Product): void {
        dispatch(setProduct(product));
    }

    setLinkedProducts(linkedProducts: LinkedProduct[]): void {
        dispatch(setLinkedProducts(this.sortLinkedProducts(linkedProducts)));
    }

    addProductToCompareList(product: Product): void {
        dispatch(addProductToCompareList(product));
    }

    removeProductFromCompareList(product: Product): void {
        dispatch(removeProductFromCompareList(product));
    }

    clearCompareList(): void {
        dispatch(clearCompareList());
    }

    private sortLinkedProducts(linkedProducts: LinkedProduct[]): LinkedProduct[] {
        const getWeight = (linkType: ProductLinkType | undefined): number => {
            switch (linkType) {
                case 'analog':
                    return 1;
                case 'related':
                    return 2;
                default:
                    return 3;
            }
        };

        return linkedProducts.sort((a, b) => {
            return getWeight(a.linkType) - getWeight(b.linkType);
        });
    }
}
