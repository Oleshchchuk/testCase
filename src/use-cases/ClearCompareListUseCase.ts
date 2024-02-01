import {IStateManagementService} from "../services/state/interfaces";
import {IBaseUseCase} from "./interfaces";
import {logger} from "./utils";

/**
 * Кейс отчищения списка сравнения
 */
export class ClearCompareListUseCase implements IBaseUseCase {
    constructor(private readonly stateService: IStateManagementService) {
    }

    @logger
    execute(): void {
        this.stateService.clearCompareList();

    }
}