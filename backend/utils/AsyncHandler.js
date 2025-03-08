const AsyncHandler = (request) => async(req,res,next)=>{
    try {
        return await request(req, res);
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export default AsyncHandler