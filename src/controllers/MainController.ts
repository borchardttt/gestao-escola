import {DataCenter} from "../model/DataCenter";

export class MainController {
    protected dc: DataCenter;

    constructor() {
        this.dc = DataCenter.getInstance();
    }

    // aqui sobreescrita aqui para garantir que a instância que to usando é a mesma em todos os controllers, exemplo na StudentsController
    isDataCenterInstance(): boolean {
        return this.dc instanceof DataCenter;
    }
}
