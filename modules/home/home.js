export function home(req, res) {
  res.status(200).json(
    {
      'name': 'PASV',
      'rew': ['abx1', 'qwe', 'rty'],
    });
}