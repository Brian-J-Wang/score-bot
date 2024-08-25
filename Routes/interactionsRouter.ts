import { ServerResponse } from "http";
import Controller from "../Interfaces/controller";

export default class InteractionRouter {
    constructor() {}
    
    controllers = {};

    addController(controller : Controller) {
        this.controllers[controller.name] == controller.response;
    }
    
    respond(body, res : ServerResponse) {
        const name = body.data.name;
        
        if (this.controllers[name] != null) {
            console.log(body.data.name);
        }
    }
}