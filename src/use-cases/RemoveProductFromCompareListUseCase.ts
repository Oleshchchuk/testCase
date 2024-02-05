import {LinkedProduct} from "../models";
import {IStoreManagementService} from "../services/state/interfaces";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";

/**
 * Кейс удаления продукта из списка сравнения
 */
export class RemoveProductFromCompareListUseCase implements IBaseUseCase {

    constructor(private readonly stateService: IStoreManagementService) {
    }

    @logger
    execute(props: { product: LinkedProduct }): void {
        this.stateService.removeProductFromCompareList(props.product);
    }
}

