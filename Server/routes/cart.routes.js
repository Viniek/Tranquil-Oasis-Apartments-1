import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Add to Cart
router.post('/add', async (req, res) => {
  const { user_id, type, price, vacancy, location, floor, space_id } = req.body;
  try {
    const cartItem = await prisma.cart.create({
      data: {
        user_id,
        type,
        price,
        vacancy,
        location,
        floor,
        space_id,
      },
    });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Get Cart Items
router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const cartItems = await prisma.cart.findMany({
      where: { user_id },
    });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

export default router;