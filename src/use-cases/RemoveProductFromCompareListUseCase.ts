import {Product} from "../models";
import {IStateManagementService} from "../services/state/interfaces";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";

/**
 * Кейс удаления элемента из списка сравнения
 */
export class RemoveProductFromCompareListUseCase implements IBaseUseCase<{ product: Product }> {
    constructor(private readonly stateService: IStateManagementService) {
    }

    @logger
    execute(props: { product: Product }): void {
        this.stateService.removeProductFromCompareList(props.product);
    }
}