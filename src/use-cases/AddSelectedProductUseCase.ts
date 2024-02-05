import {IStoreManagementService} from "../services/state/interfaces";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";
import {LinkedProduct} from "../models";

/**
 * Кейс соханения выбранного продукта
 */
export class AddSelectedProductUseCase implements IBaseUseCase {
    constructor(private readonly stateService: IStoreManagementService) {
    }

    @logger
    execute(props: { product: LinkedProduct }): void {
        this.stateService.setSelectedProduct(props.product);
    }
}