import User from './Model';

export default function userGetByID(req, res) {


  const userId = req.params.userID;
  User.findById(userId)
      //.skip(2)
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(result);
        res.status(400).json('User get all Error');
      });
}


