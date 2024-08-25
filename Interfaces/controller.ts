import { ServerResponse } from "http";

interface Controller {
    name: string;
    response: ControllerFunction;
}

interface ControllerFunction {
    (body: object, res: ServerResponse): void;
}

export default Controller;