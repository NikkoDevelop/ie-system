const express = require('express');
const router = express.Router()
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/create', async (req, res) => {
  try {
    const newCategory = await prisma.category.create({
      data: {
        title: req.body.title,
        type: req.body.type,
      }
    });

    res.send(newCategory);
  } catch (err) {
    throw new Error(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const oldCategory = await prisma.category.findUnique({
      where: {
        id: Number(req.body.id)
      }
    });

    const newCategory = await prisma.category.update({
      where: {
        id: Number(req.body.id),
      },
      data: {
        title: req.body.title ? req.body.title : oldCategory.title,
        type: req.body.type ? req.body.type : oldCategory.type,
      }
    });

    res.send(newCategory);
  } catch (err) {
    throw new Error(err);
  }
});

router.delete('/delete', async (req, res) => {
  const deletedCategory = await prisma.category.delete({
    where: {
      id: Number(req.body.id)
    }
  });

  res.send(deletedCategory)
});

module.exports = router;