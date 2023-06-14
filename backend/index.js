const express = require('express')
const app = express()
const port = 10000

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

app.get('/', async (req, res) => {

  // SELECT (READ)

  const users = await prisma.user.findMany();

  // SELECT ONE

  const user = await prisma.user.findUnique({
    where: {
      id: 2
    }
  })

  console.log(user);

  // UPDATE

  const updatedUser = await prisma.user.update({
    where: {
      id: 2
    },
    data: {
      name: 'Валерия'
    }
  });

  // DELETE

  const deletedUser = await prisma.user.delete({
    where: {
      id: 2
    }
  })

  console.log(deletedUser)

  res.send(updatedUser);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})