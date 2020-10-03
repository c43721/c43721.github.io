const pinnedProjectsContainer = $(".projects.pinned").slice(1);
const projectResultSpan = $("#projects-pinned-span");
const pinnedProjects = $(".pinned-project");

const viewMoreButtons = $(".view-more");

viewMoreButtons.each(function () {
    $(this).on("click", function () {
        $(this).parentsUntil(".project-card").find(".view-more").text(function (i, text) {
            return text === "View more" ? "View Less" : "View more"
        });
        $(this).parentsUntil(".project-card").find(".hidden").toggle("slow");
    })
})

pinnedProjects.each(function () {
    $(this)
        .clone()
        .removeClass(["pinned-project", "project-card"])
        .appendTo(".projects.pinned")
        .find("span.d-flex").removeClass(["d-flex", "justify-content-between"]).end()
        .find(".view-more").remove(".view-more").end()
        .find('.hidden').removeClass(["hidden", "project-card"]).addClass("show")
}).after(() => {
    if (!pinnedProjectsContainer.length()) projectResultSpan.text("No Pinned Projects");
})


