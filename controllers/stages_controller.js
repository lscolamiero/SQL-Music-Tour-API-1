// DEPENDENCIES
const stages = require('express').Router();
const { Op } = require('sequelize');
const db = require('../models');
const { Stage } = db;

// READ - FIND ALL STAGES
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll();
        res.status(200).json(foundStages);
    } catch (err) {
        res.status(500).json(err);
    }
});

// READ - FIND SPECIFIC STAGE -
stages.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        });
        res.status(200).json(foundStage);
    } catch (err) {
        res.status(500).json(err);
    }
})

// CREATE A STAGE
stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE A STAGE
stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: { stage_id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully ${updatedStages} stage(s)`,
            data: updatedStages
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE A STAGE
stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: { stage_id: req.params.id }
        });
        res.status(200).json({
            message: `Successfully ${deletedStages} stage(s)`
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// EXPORT
module.exports = stages;
