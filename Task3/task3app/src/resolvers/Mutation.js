
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)

  // 2
  const user = await context.prisma.user.create({ data: { ...args, password } })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}
module.exports = {
  signup,
}
