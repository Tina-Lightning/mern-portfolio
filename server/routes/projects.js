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
    const title = req.body.title;
    const images = req.body.images;
    const squareImg = req.body.squareImg;
    const typeofwork = req.body.typeofwork;
    const weblink = req.body.weblink;
    const githublink = req.body.githublink;
    const overview = req.body.overview;
    const techused = req.body.techused;
    const createddate = req.body.createddate;
    const workTypeAll = req.body.workTypeAll;
    const workTypeStudent = req.body.workTypeStudent;
    const workTypeGraphic = req.body.workTypeGraphic;
    const workTypeWeb = req.body.workTypeWeb;
    const workTypeProfessional = req.body.workTypeProfessional;
    const workTypePersonal = req.body.workTypePersonal;

    const newProject = new Project({
        title,
        images,
        squareImg,
        typeofwork,
        weblink,
        githublink,
        overview,
        techused,
        createddate,
        workTypeAll,
        workTypeStudent,
        workTypeGraphic,
        workTypeWeb,
        workTypeProfessional,
        workTypePersonal
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
            project.title = req.body.title;
            project.images = req.body.images;
            project.squareImg = req.body.squareImg;
            project.typeofwork = req.body.typeofwork;
            project.weblink = req.body.weblink;
            project.githublink = req.body.githublink;
            project.overview = req.body.overview;
            project.techused = req.body.techused;
            project.createddate = req.body.createddate;
            project.workTypeAll = req.body.workTypeAll;
            project.workTypeStudent = req.body.workTypeStudent;
            project.workTypeGraphic = req.body.workTypeGraphic;
            project.workTypeWeb = req.body.workTypeWeb;
            project.workTypeProfessional = req.body.workTypeProfessional;
            project.workTypePersonal = req.body.workTypePersonal;
            
            project.save()
                .then(() => res.json("Project updated"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;