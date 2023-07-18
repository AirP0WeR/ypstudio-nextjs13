const logHelper = (req) => {
    // console.log(process.env.LOG_LEVEL)
    // console.log(req)
    
    if (process.env.LOG_LEVEL !== false) {
        console.log(req);
    }
}

export default logHelper;