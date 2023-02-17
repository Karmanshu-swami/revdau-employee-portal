// local imports
const utils = require('../../utils/response');
const { getDbManager } = require('../models');


// exports.register = async (req, res) => {
//   console.log('register() triggered ....');

//   const { User } = await getDbManager();
//   try {
//     const data = req.body;
    
//     const newUser = await User.create(data);
//     res.send(utils.createSuccess(newUser))
//   } catch (error) {
//     res.send(utils.createError(error))
//   }
// };


exports.register = async (req, res) => {
  console.log('register() triggered ....');

  const { User } = await getDbManager();
 
    const data = req.body;
    const newUser = await User.create(data);
  
    if(newUser){
      res.send(utils.createSuccess(newUser))
    }
    else{
      res.send(utils.createError('User not Found'))
    }     
     
  }

exports.login = async (req, res) => {
  console.log('login() triggered ....');

  const { User } = await getDbManager();
 
    const { email, password } = req.body;
  
    const data = await User.findOne({
      where: {email, password}
    })
    if(data){
      res.send(utils.createSuccess(data))
    }
    else{
      res.send(utils.createError('User not Found'))
    }     
   }

exports.delete = async (req, res) => {
  console.log('delete() triggered ....');

  const { User } = await getDbManager();
  try {
    const deleteUser = await User.destroy({
      where:{
        id: req.params.id
      }
    });
    res.send(utils.createSuccess(deleteUser))
  } catch (error) {
    res.send(utils.createError(error))
  }
};


// exports.update = async (req, res) => {
//   console.log('update() triggered ....');

//   const { User } = await getDbManager();
//   try {
//     //const data = req.body;
//     const { first_name, last_name, personal_email_id, password } = req.body;
//     const id = req.params;
//     console.log("rohini")
//     const updateUser = await User.update({
//       where: {id}
//     });
//     res.send(utils.createSuccess(updateUser))
//   } catch (error) {
//     res.send(utils.createError(error))
//   }
// };

exports.update = async (req, res) => {
  console.log('update() triggered ....');

  const { User } = await getDbManager();
  try {
     const updateUser = await User.update(req.body, {
      where: {
         id: req.params.id
       }
    });
    res.send(utils.createSuccess(updateUser))
  } catch (error) {
    res.send(utils.createError(error))
  }
 };


exports.getUserById = async (req, res) => {
  console.log('getprofile() triggered ....');

  const { User } = await getDbManager();
  try {
    const findOneUser = await User.findAll({
      where:{
        id: req.params.id
      }
    });
    res.send(utils.createSuccess(findOneUser))
  } catch (error) {
    res.send(utils.createError(error))
  }
};
  
exports.getAllUser = async (req, res) => {
  console.log('getAllprofiles() triggered ....');

  const { User } = await getDbManager();
  try {
    const findAllUser = await User.findAll();
    res.send(utils.createSuccess(findAllUser))
  } catch (error) {
    res.send(utils.createError(error))
  }
};

// exports.changePassword = async (req, res) => {
//   Logger.debug(LOG_ID, 'changePassword() triggered ....');
//   try {
//     const data = req.body;
//     return successResponse(res, data);
//   } catch (error) {
//     return errorResponse(res, error);
//   }
// };
