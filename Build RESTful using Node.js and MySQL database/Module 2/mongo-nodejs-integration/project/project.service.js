const projectDao = require('./project.dao.js');

const create = function (projectDetails, done) {
    projectDao.saveProject(projectDetails, (err, results) => {
        if (err) {
            return done(err)
        }
        return done(null, results)
    });
}


const findProjectById = function (projectId, done) {
    projectDao.findProjectById(projectId, (err, results) => {
        if (err) {
            return done(err)
        }
        return done(null, results)
    })
}


const updateProject = function (projectId, done) {
    projectDao.updateProjectDetails(projectId, (err, results) => {
        if (err) {
            return done(err)
        }
        return done(null, results)
    })
}

module.exports = {
    create, findProjectById, updateProject
}