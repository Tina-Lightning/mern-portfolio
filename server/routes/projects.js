const router = require("express").Router();
let Project = require("../models/project.model");

// when you go to this address "/" this will happen:
router.route("/").get((req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json("Error: " + err));
});

// Add a new Project
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const image = req.body.image;
    const title = req.body.title;
    const type = req.body.type;
    const weblink = req.body.weblink;
    const githublink = req.body.githublink;
    const overview = req.body.overview;
    const techused = req.body.techused;
    const createddate = req.body.createddate;

    const newProject = new Project({
        username,
        image,
        title,
        type,
        weblink,
        githublink,
        overview,
        techused,
        createddate,
    });

    newProject.save()
        .then(() => res.json("Project added"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json("Project deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
    Project.findById(req.params.id)
        .then(project => {
            project.username = req.body.username;
            project.image = req.body.image;
            project.title = req.body.title;
            project.type = req.body.type;
            project.weblink = req.body.weblink;
            project.githublink = req.body.githublink;
            project.overview = req.body.overview;
            project.techused = req.body.techused;
            project.createddate = req.body.createddate;

            project.save()
                .then(() => res.json("Project updated"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;