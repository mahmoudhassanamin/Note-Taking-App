module.exports = (req, res, next) => {
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header(
     "Access-Control-Allow-Headers",
     "Content-Type,Content-Length"
   );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,PATCH");
    next()
}