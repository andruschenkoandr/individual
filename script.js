$(document).ready(function () {

//Search form
    $("#searchForm").on("submit", function (event) {
        event.preventDefault();
        const searchInput = $("#searchInput");
        const searchValue = searchInput.val().trim().toLowerCase();

//Input validation
        if (!this.checkValidity() || searchValue.length < 2) {
            searchInput.addClass("is-invalid");
            searchInput.removeClass("is-valid");
            $("#searchError").show();
            $("#searchMessage").text("");
            return;
        }

//Successful validation
        searchInput.removeClass("is-invalid");
        searchInput.addClass("is-valid");
        $("#searchError").hide();
        let foundGames = 0;

//Search through game cards
        $(".game-item").each(function () {
            const gameTitle = $(this).data("title").toLowerCase();
            if (gameTitle.includes(searchValue)) {
                $(this).removeClass("d-none");
                foundGames++;
            } else {
                $(this).addClass("d-none");
            }
        });

//Search results
        if (foundGames === 0) {
            $("#noResults").removeClass("d-none");
            $("#searchMessage").text("");
        } else {
            $("#noResults").addClass("d-none");
            $("#searchMessage").text(
                "Знайдено ігор: " + foundGames
            );
        }
    });
    $("#searchInput").on("input", function () {
        $(this).removeClass("is-invalid is-valid");
        $("#searchError").hide();
        $("#searchMessage").text("");

//Show all games when the search is empty
        if ($(this).val().trim() === "") {
            $(".game-item").removeClass("d-none");
            $("#noResults").addClass("d-none");
        }
    });

//Reset search
    $("#searchInput").on("search", function () {
        if ($(this).val().trim() === "") {
            $(".game-item").removeClass("d-none");
            $("#noResults").addClass("d-none");
            $("#searchMessage").text("");
            $(this).removeClass("is-valid is-invalid");
            $("#searchError").hide();
        }
    });
});