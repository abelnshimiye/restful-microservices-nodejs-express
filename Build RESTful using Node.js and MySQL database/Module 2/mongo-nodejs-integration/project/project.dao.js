const ProjectModel = require('./project.entity');


const saveProject = function (projectReq, done) {
    let newProjectObj = new ProjectModel({
        premiseType: projectReq.premiseType,
        size: projectReq.size,
        budget: projectReq.budget,
        ownership: projectReq.ownership,
        rooms: projectReq.rooms
    });

    newProjectObj.save((err, savedProject) => {
        if (err) {
            console.log("Error in saving project, Error: ", err);
            return done("Failed to save project due to data error ...!")
        }
        return done(null, savedProject)
    })

}

const findProjectByQuery = function (projectsQuery, done) {
    const query = {};

    if (projectsQuery.premiseType !== "") {
        query["premiseType"] = projectsQuery.premiseType;
    }

    if (projectsQuery.ownership !== "") {
        query["ownership"] = projectsQuery.ownership;
    }

    ProjectModel.find(query)
        .select({ _id: 0, _v: 0 })
        .learn()
        .exec((err, results) => {
            if (err) {
                console.log("Error in fetching projects, Error", err);
                return done("Failed to find projects due to data errs ...!")
            }
            return done(null, results);
        })


}

const updateProjectDetails = function (projectId, updateReq, done) {
    ProjectModel.findOneAndUpdate({ "projectId": projectId }, updateReq, { new: true },
        (err, updatedProject) => {
            if (err) {
                console.log("Error in updating project details, Error:", err);
                return done("Failed to update project due to data errors...!");
            }
            if (updatedProject === null) {
                console.log("No matching project found to update");
                return done("No matching project found to update....!");
            }
            return done(null, updatedProject)
        }
    )
}

module.exports = {
    saveProject,
    findProjectByQuery,
    updateProjectDetails
}