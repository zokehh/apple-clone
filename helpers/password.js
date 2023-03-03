import { compare, hash } from 'bcryptjs'

export const hashPassword = async (password) => {
   const hashedPassword = await hash(password, 12)

   return hashedPassword
}

export const verifyPasswords = async (password, hashedPassword) => {
   const isValid = await compare(password, hashedPassword)

   return isValid
}