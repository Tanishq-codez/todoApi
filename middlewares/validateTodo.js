// file 7 
module.exports = (req, res, next) => {
  if (!req.body.title || req.body.title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }
  next();
};
