import {LinkedProduct, Product} from "../../models";
import {IStateManagementService} from "./interfaces";


export abstract class StateService implements IStateManagementService {
    abstract setProduct(product: Product): void;

    abstract setLinkedProducts(linkedProducts: LinkedProduct[]): void;

    abstract addProductToCompareList(product: Product): void;

    abstract removeProductFromCompareList(product: Product): void;

    abstract clearCompareList(): void;
}
