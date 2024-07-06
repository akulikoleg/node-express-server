import User from './Model';

export default function userUpdateByID(req, res) {

  const userId = req.params.userID;

  delete req.body.password;

  User.updateOne({_id: userId}, req.body)
      //.skip(2)
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(result);
        res.status(400).json('User Update Error');
      });
}


