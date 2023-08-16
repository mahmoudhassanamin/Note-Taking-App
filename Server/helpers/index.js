const tryCatchWrapper =(func,errorHandler) => {
    try {
        func()
    } catch (err) {
        errorHandler(err);
    }
}



module.exports = {
    tryCatchWrapper,
}