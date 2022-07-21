const express = require("express");
const mongoose = require("mongoose");

const Admin = require("../models/admin/product");

const router = express.Router();

// Add post by user
exports.create = async (req, res) => {
  console.log(req.body);
  const addPost = new Admin({
    title: req.body.title,
    desc: req.body.desc,
    img: req.body.img,
    price: req.body.price,
    extraOptions: req.body.extraOptions,
  });
  await addPost
    .save()
    .then(() => {
      res.status(201).json(addPost);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

exports.getAll = async (req, res) => {
  try {
    const post = await Admin.find();

    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const fpost = await Admin.findById(id);

    res.status(404).json(fpost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    await Admin.findByIdAndUpdate(
      { id },
      {
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img,
        price: req.body.price,
        extraOptions: req.body.extraOptions,
      }
    );
    res.status(202).json({ up: up });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  const details = { _id: new ObjectID(id) };

  try {
    await Student.findOneAndRemove({ details: details });
    res.status(203).json({ details: details });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
