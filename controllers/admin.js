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
  Room.findAll()
    .then(rooms=>{
      res.render("admin/room/index", {
        prods: rooms,
        pageTitle: "Admin Rooms",
        path: "/admin/rooms",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditRoom = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.roomId;
  Room.findByPk(prodId)
    .then((room) => {
    if (!room) {
      return res.redirect("/");
    }
    res.render("admin/room/edit", {
      pageTitle: "Edit Product",
      path: "/admin/room/edit",
      editing: editMode,
      room: room,
    });
  })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditRoom = (req, res, next) => {
  const roomId = req.body.roomId;
  const updatedName = req.body.name;
  const updatedDesc = req.body.desc;
  const updatedStatus = req.body.status;
  Room.findByPk(roomId)
    .then((room) =>{
      room.name = updatedName;
      room.desc = updatedDesc;
      room.status = updatedStatus;
      console.log(room);
      return room.save();
    }).then(result=>{
      console.log('Update room');
      res.redirect('/admin/rooms');
    })
    .catch((err) => {
      console.log(err);
    });
  };
