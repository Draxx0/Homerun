const Property = require("../models/property.model");
const User = require("../models/user.model");

const PropertyController = {
  getAllProperties: async (req, res) => {
    try {
      const properties = await Property.find().populate("user");
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProperty: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      
      const property = await Property.create({
        ...req.body,
        user: user._id,
      });
      user.properties.push(property._id);
      await user.save();
      res.status(201).json(property);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteProperty: async (req, res) => {
    try {
      const user = await User.findById(req.user._id);

      if (user.properties.includes(req.params.id)) {
        const deletedProperty = await Property.findByIdAndDelete(req.params.id);
        res.send(deletedProperty);
      } else {
        return res.status(400).json({
          message: "You cannot delete a property that does not belong to you",
        });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllPropertiesByUser: async (req, res) => {
    try {
      const properties = await Property.find({ user: req.params.id });
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PropertyController;
