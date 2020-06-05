const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    username: { type: String, required: true},
    image: { type: String, required: true},
    title: { type: String, required: true},
    typeofwork: { type: String, required: true},
    weblink: { type: String, required: false},
    githublink: { type: String, required: false},
    overview: { type: String, required: true},
    techused: { type: String, required: true},
    createddate: { type: String, required: true},
}, {
    timestamps: true,
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;