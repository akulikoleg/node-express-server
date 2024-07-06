import User from './Model';

export default function userDeleteAll(req, res) {


  const userId = req.params.userID;

  User.deleteMany()
      //.skip(2)
      //.exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('User delete all error');
      });
}


