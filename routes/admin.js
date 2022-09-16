const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/rooms/add", adminController.getAddRoom);

// /admin/products => GET
router.get("/rooms", adminController.getRooms);

// /admin/add-product => POST
router.post("/rooms/addAction", adminController.postAddRoom);

//router.get("/admin/rooms/edit/:roomId", adminController.getEditProduct);

//router.post("/admin/rooms/editAction", adminController.postEditProduct);

//router.post("/admin/rooms/deleteAction",adminController.postDeleteProduct);

module.exports = router;
