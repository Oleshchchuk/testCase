import {IStoreManagementService} from "../services/state/interfaces";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";

/**
 * Кейс удаления выбранного продукта
 */
export class RemoveSelectedProductUseCase implements IBaseUseCase {
    constructor(private readonly stateService: IStoreManagementService) {
    }

    @logger
    execute(): void {
        this.stateService.removeSelectedProduct();
    }
}