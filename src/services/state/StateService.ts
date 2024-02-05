import {LinkedProduct, Product, ProductLinkType} from "../../models";
import {IStore, IStoreManagementService} from "./interfaces";

export abstract class StateService implements IStoreManagementService {
    abstract setProduct(product: Product): void;

    abstract setLinkedProducts(linkedProducts: LinkedProduct[]): void;

    abstract addProductToCompareList(product: Product): void;

    abstract removeProductFromCompareList(product: Product): void;

    abstract clearCompareList(): void;

    abstract getLinkedProductsList(): LinkedProduct[]

    abstract getProduct(): Product | undefined

    abstract getProductCompareList(): LinkedProduct[]

    abstract getSelectedProduct(): Product | undefined

    abstract removeSelectedProduct(): void

    abstract setSelectedProduct(product: Product): void

    abstract getStore(): IStore;

    protected sortLinkedProducts(linkedProducts: LinkedProduct[]): LinkedProduct[] {
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
