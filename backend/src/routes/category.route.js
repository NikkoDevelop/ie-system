const express = require('express');
const router = express.Router()
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/create', async (req, res) => {
  console.log(req.body);

  const newUser = await prisma.category.create({
    data: {
      title: req.body.title,
    }
  });

  res.send(newUser)
});

router.put('/update', async (req, res) => {
  console.log(req.body);

  const newUser = await prisma.category.create({
    data: {
      title: req.body.title,
    }
  });

  res.send(newUser)
});

module.exports = router;