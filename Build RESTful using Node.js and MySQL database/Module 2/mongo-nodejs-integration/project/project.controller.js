const projectService = require("../project/project.service.js")

const saveProject = (productDetails, done) => {
    return projectService.create(productDetails, done)
}

const findProjectById = (projectId, done) => {
    return projectService.findProjectById(projectId, done)
}

const findProjectByQuery = (projectId, done) => {
    return projectService.findProjectByQuery(projectId, done)
}


const updateProjectDetails = (projectId, done) => {
    return projectService.updateProject(projectId, done)
}

module.exports = {
    saveProject,
    findProjectById,
    findProjectByQuery,
    updateProjectDetails
}