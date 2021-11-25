const Memorial = require("../models/Memorial.model");
module.exports = {
  getMemorials: async (req, res) => {
    try {
      const memorials = await Memorial.find();
      res.json(memorials);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteMemorial: async (req, res) => {
    try {
      await Memorial.findByIdAndDelete(req.params.id);
      res.json({
        success: true,
        message: "Memorial deleted successfully",
        id: req.params.id,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  postMemorial: async (req, res) => {
    const {
      deceasedPersonName,
      senderName,
      birthYear,
      deathYear,
      province,
      district,
      remembranceWords,
      relationship,
      email,
      phone,
      
    } = req.body;
    try {
      const newMemorial = await Memorial.create({
        deceasedPersonName,
        senderName,
        birthYear,
        deathYear,
        province,
        district,
        remembranceWords,
        relationship,
        email,
        phone,
        userId: req.userId
      });
      res.json(newMemorial);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  updateMemorial: async (req, res) => {
    const {
      deceasedPersonName,
      senderName,
      birthYear,
      deathYear,
      province,
      district,
      remembranceWords,
      relationship,
      email,
      phone,

    } = req.body;
    try {
      const updatedMemorial = await Memorial.findByIdAndUpdate(
        req.params.id,
        {
          deceasedPersonName,
          senderName,
          birthYear,
          deathYear,
          province,
          district,
          remembranceWords,
          relationship,
          email,
          phone,
          
        },
        { new: true }
      );
      res.json(updatedMemorial);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
