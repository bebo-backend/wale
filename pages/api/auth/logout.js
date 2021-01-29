import withSession from '../../../lib/session'


export default withSession(async (req, res,session) => {

  const user = { isLoggedIn: false}
  // // const user = { isLoggedIn: true, login, avatarUrl }
  // console.log('res '+Object.keys(res_data))

//   req.session.set('user', user)
// req.session.save()
 
  req.session.destroy()

  res.status(200).json(user)

})
