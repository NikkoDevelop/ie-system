const express = require('express');
const router = express.Router()
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/create', async (req, res) => {
  const newUser = await prisma.user.create({
    data: {
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    }
  });

  res.send(newUser)
});

router.get('/profile', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(req.query.id)
    },
    include: {
      incomes: {
        include: {
          category: true,
        }
      },
      expenses: {
        include: {
          category: true,
        }
      }
    }
  });

  res.send(user);
})

module.exports = router;