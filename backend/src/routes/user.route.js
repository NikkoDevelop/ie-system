const express = require('express');
const router = express.Router()
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/create', async (req, res) => {
  console.log(req.body);

  const newUser = await prisma.user.create({
    data: {
      login: req.body.login,
      password: req.body.password,
      name: req.body.name
    }
  });

  res.send(newUser)
});

module.exports = router;