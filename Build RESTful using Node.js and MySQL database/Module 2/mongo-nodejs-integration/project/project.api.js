const express = require('express');
const router = express.Router();
const projectCtrl = require("./project.controller");


/**
 * App to save project details
 * EFFECTIVE url: POST /api/v1/project
 * 
 */

router.post("/", (req, res) => {
    try {
        let projectReq = {
            premiseType: (req.body.premiseType || ""),
            size: (req.body.size || ""),
            budget: (req.body.budget || 0),
            ownership: (req.body.ownership || 0),
            rooms: (req.body.rooms || [])
        }

        projectCtrl.saveProject(projectReq, (err, results) => {
            if (err) {
                // EXITING
                return res.status(400).send(err);
            }
            // exiting
            return res.status(200).send({ STATUS: "OK", data: results });
        })

    } catch (e) {

    }
})