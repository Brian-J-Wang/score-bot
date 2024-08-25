import { IncomingMessage, ServerResponse } from "http";
import pingInteraction from "../InteractionTypes/ping";
import appCommand from "../InteractionTypes/appCommand";

const handleInteractions = (body, req : IncomingMessage, res : ServerResponse) => {
    body = JSON.parse(body);

    const { type } = body;

    if (type == 1) {
        pingInteraction(req, res);
    }

    if (type == 2) {
        appCommand(body, res);
    }
} 

export default handleInteractions;