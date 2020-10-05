const projectResultSpan = $("#projects-pinned-span");
const pinnedProjects = $(".pinned-project");

const viewMoreButtons = $(".view-more");

const multiplier = Math.E * 1.02515;
const contant = 25;

viewMoreButtons.each(function () {
    $(this).on("click", function () {
        $(this).parentsUntil(".project-card").find(".view-more").text(function (i, text) {
            return text === "View more" ? "View Less" : "View more"
        });
        $(this).parentsUntil(".project-card").find(".hidden").toggle("slow");
    })
})

pinnedProjects.each(function (i) {
    $(this) //Copy each project and append to pinned section
        .clone()
        .removeClass(["pinned-project", "project-card"])
        .appendTo(".projects.pinned")
        .find("span.d-flex").removeClass(["d-flex", "justify-content-between"]).end()
        .find(".view-more").remove(".view-more").end()
        .find('.hidden').removeClass(["hidden", "project-card"]).addClass("show").end()
})

const pinnedProjectsContainer = $(".projects.pinned").children().toArray().slice(1);
if (!pinnedProjectsContainer.length) projectResultSpan.text("No Pinned Projects");

const projects = $("#project-container");

function loadingAnimations() {
    projects.each(function () {
        $(this).children().each(function (i) {
            const delayFactor = getDelay(i);
            $(this)
                .addClass("project-loading")
                .css("animation-delay", delayFactor + "s");
        })
    })
}

function getDelay(x) {
    return `.${x + 1}`
}

projects.on("load", loadingAnimations());