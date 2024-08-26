import { DataCenter } from "../model/DataCenter";
export class MainController {
    constructor() {
        this.dc = DataCenter.getInstance();
    }
    // aqui sobreescrita aqui para garantir que a instância que to usando é a mesma em todos os controllers, exemplo na StudentsController
    isDataCenterInstance() {
        return this.dc instanceof DataCenter;
    }
}
//# sourceMappingURL=MainController.js.map