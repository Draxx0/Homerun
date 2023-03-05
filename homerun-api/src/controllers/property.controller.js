const Property = require("../models/property.model");
const PropertyCategory = require("../models/propertyCategory.model");
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

  getPropertyCategories: async (req, res) => {
    try {
      const propertyCategories = await PropertyCategory.find();
      res.status(200).json(propertyCategories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const propertyCategory = await PropertyCategory.create(req.body);
      res.status(201).json(propertyCategory);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProperty: async (req, res) => {
    try {
      const { category } = req.body;
      const user = await User.findById(req.user._id);

      //? Create the property and push the property id to the user's properties array
      const property = await Property.create({
        ...req.body,
        user: user._id,
      });
      user.properties.push(property._id);
      await user.save();

      //? Find the category and push the property id to the properties array
      const propertyCategory = await PropertyCategory.findOneAndUpdate(
        { category: category },
        { $push: { properties: property._id } },
        { new: true }
      );
      await propertyCategory.save();

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

        //? Delete the property from the user array
        const deletePropertyInUser = await User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $pull: {
              properties: [{ _id: req.params.id }],
            },
          },
          { new: true }
        );

        //? Delete the property from the category array
        const deletePropertyInCategory =
          await PropertyCategory.findOneAndUpdate(
            { category: deletedProperty.category },
            {
              $pullAll: {
                properties: [{ _id: req.params.id }],
              },
            },
            { new: true }
          );

        await deletePropertyInUser.save();
        await deletePropertyInCategory.save();
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

  getMostViewedProperties: async (req, res) => {
    try {
      const properties = await Property.find().sort({ views: -1 }).limit(6);
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getLatestProperties: async (req, res) => {
    try {
      const properties = await Property.find().sort({ createdAt: -1 });
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  //? Tools ****************************************************

  toolsDeleteAllProperties: async (req, res) => {
    try {
      const properties = await Property.deleteMany();
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  toolsDeleteAllCategories: async (req, res) => {
    try {
      const propertyCategories = await PropertyCategory.deleteMany();
      res.status(200).json(propertyCategories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = PropertyController;
