import {IStoreManagementService} from "../services/state/interfaces";
import {LinkedProduct} from "../models";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";

/**
 * Кейс добавления продукта в список для сравнения
 */
export class AddProductToCompareListUseCase implements IBaseUseCase {

    constructor(private readonly stateService: IStoreManagementService) {
    }

    @logger
    execute(props: { product: LinkedProduct }): void {
        this.stateService.addProductToCompareList(props.product);
    }
}




