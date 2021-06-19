import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Mark Delgado",
    email: "markdelgado94@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
]

export default users
