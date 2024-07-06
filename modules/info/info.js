const names = [];

function info(req, res) {
  names.push(req.body.name)
  res.status(200).json( names);
}

export default info;