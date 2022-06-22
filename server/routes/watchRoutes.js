const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const brand = req.query.brand?.toUpperCase()
  const color = req.query.color?.toUpperCase()

  let watches;
  if (brand) {
    if (color) {
      try {
        watches = await prisma.watch.findMany({ where: { brand, color } })
      }
      catch (e) {
        res.send("No products found matching the provided filters");
        return;
      }
    }
    else {
      try {
        watches = await prisma.watch.findMany({ where: { brand } })
      }
      catch (e) {
        res.send("No products found matching the provided filters");
        return;
      }
    }
  }
  else if (color) {
    if (brand) {
      try {
        watches = await prisma.watch.findMany({ where: { brand, color } })
      }
      catch (e) {
        res.send("No products found matching the provided filters");
        return;
      }
    }
    else {
      try {
        watches = await prisma.watch.findMany({ where: { color } })
      }
      catch (e) {
        res.send("No products found matching the provided filters");
        return;
      }
    }
  }
  else {
    watches = await prisma.watch.findMany();
  }

  res.send(watches);
});

router.get("/showcased", async (req, res) => {
  const watch = await prisma.watch.findFirst({ where: { id: 20 } })
  res.send(watch);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!Number(id)) {
    res.send({ error: "Invalid id format." })
    return;
  }
  const watch = await prisma.watch.findFirst({ where: { id: Number(id) } })
  if (!watch) {
    res.send({ error: "No product found matching the provided id. Please check the id and try again." })
    return;
  }
  res.send(watch);
});



module.exports = router;
