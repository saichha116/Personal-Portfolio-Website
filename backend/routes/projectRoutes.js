const express = require("express");
const router = express.Router();

const db = require("../db");

// Get all projects
router.get("/", (req, res) => {

    const sql = "SELECT * FROM projects";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(result);

    });

});

// Add new project
router.post("/", (req, res) => {

    const {
        title,
        description,
        technologies,
        github_link,
        demo_link
    } = req.body;


    const sql = `
        INSERT INTO projects
        (title, description, technologies, github_link, demo_link)
        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [
            title,
            description,
            technologies,
            github_link,
            demo_link
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }


            res.json({
                message: "Project added successfully",
                id: result.insertId
            });

        }
    );

});

module.exports = router;