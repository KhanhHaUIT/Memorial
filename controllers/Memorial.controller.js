const Memorial = require("../models/Memorial.model");
module.exports = {
  getMemorials: async (req, res) => {
    try {
      if(!req.query.keyword) {
        const memorials = await Memorial.find();
        res.json(memorials);
      } else {
        const memorials = await Memorial.find({
          deceasedPersonName: {
            $regex: req.query.keyword,
            $options: "i"
          }
        });
        res.json(memorials); 
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteMemorials: async (req, res) => {
    if (Object.prototype.toString.call(req.body.ids) === '[object Array]') {
      try {
        await Memorial.deleteMany({ _id: { $in: req.body.ids }});
        return res.status(200).json({
          success: true,
          message: 'deleted successfully !!',
          ids: req.body.ids,
        });
      } catch (error) { 
        return res.status(500).json({
          success: false,
          message: error.message || 'Internal Server Error',
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: 'ids must be an array !!',
      });
    }
  },
  getMemorial: async (req, res) => {
    try {
      const { id } = req.params;
      const memorial = await Memorial.findById(id);
      res.json(memorial);
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
        userId: req.userId,
      });
      res.status(201).send(newMemorial);
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
  toggleCandle: async (req, res) => {
    try {
      const memorial = await Memorial.findById(req.params.id);
      let index = memorial.candles.indexOf(req.userId);
      if (index > -1) {
        memorial.candles.splice(index, 1);
        await memorial.save();
      }else{
        memorial.candles.push(req.userId);
        await memorial.save();
      }

      return res.json(memorial);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
};
