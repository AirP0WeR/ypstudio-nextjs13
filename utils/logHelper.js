const logHelper = (req) => {
    
    if (process.env.LOG_LEVEL !== false) {
        console.log(req);
    }
}

export default logHelper;