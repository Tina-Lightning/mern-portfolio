const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    images: { type: Array, required: true },
    squareImg: { type: String, required: true },
    typeofwork: { type: Array, required: true },
    weblink: { type: String, required: false },
    githublink: { type: String, required: false },
    overview: { type: String, required: true },
    techused: { type: Array, required: true },
    createddate: { type: String, required: true },
    workTypeAll: { type: Boolean, required: true },
    workTypeStudent: { type: Boolean, required: true },
    workTypeGraphic: { type: Boolean, required: true },
    workTypeWeb: { type: Boolean, required: true },
    workTypeProfessional: { type: Boolean, required: true },
    workTypePersonal: { type: Boolean, required: true },
}, {
    timestamps: true,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;