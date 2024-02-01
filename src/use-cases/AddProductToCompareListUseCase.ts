import {IStateManagementService} from "../services/state/interfaces";
import {Product} from "../models";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";


/**
 * Кейс добавления продукта в список для сравнения
 */
export class AddProductToCompareListUseCase implements IBaseUseCase<{ product: Product }> {

    constructor(private readonly stateService: IStateManagementService) {
    }

    @logger
    execute(props: { product: Product }): void {
        this.stateService.addProductToCompareList(props.product);
    }
}




