// file 7 
// validation prevent bad input to go forward 
module.exports = (req, res, next) => {
  if (!req.body.title || req.body.title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }
  next();
};
