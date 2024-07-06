import User from './Model';

export default function userDeleteByID(req, res) {


  const userId = req.params.userID;

  User.findByIdAndDelete(userId)
      //.skip(2)
      //.exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log('user deleted');
        res.status(400).json('User for delete not found');
      });
}


