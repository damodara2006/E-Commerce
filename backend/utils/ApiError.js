import AsyncHandler from "./AsyncHandler.js";

class ApiError extends Error{
    constructor(message){
        super(message);
    }
}

export default ApiError