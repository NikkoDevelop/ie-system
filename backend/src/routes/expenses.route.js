const express = require('express');
const router = express.Router()
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/create', async (req, res) => {
  /*
  userId: Int
  categoryId: Int
  value: Int
  */

  const expense = await prisma.expenses.create({
    data: {
      value: Number(req.body.value),
      user: {
        connect: {
          id: Number(req.body.userId)
        }
      },
      category: {
        connect: {
          id: Number(req.body.categoryId)
        }
      }
    }
  });

  res.send(expense);
})

module.exports = router;