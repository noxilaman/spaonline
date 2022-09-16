const Room = require("../models/room");

exports.getAddRoom = (req, res, next) => {
  res.render("admin/room/edit", {
    pageTitle: "Add Room",
    path: "/admin/room/add",
    editing: false,
  });
};

exports.postAddRoom = (req, res, next) => {
  const name = req.body.name;
  const desc = req.body.desc;
  const status = req.body.status;
  Room.create({
    name: name,
    desc: desc,
    status: status,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Room");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getRooms = (req, res, next) => {
  Room.fetchAll((rooms) => {
    res.render("admin/rooms", {
      prods: products,
      pageTitle: "Admin Rooms",
      path: "/admin/rooms",
    });
  });
};