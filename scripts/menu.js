$(document).ready(function () {
    $.get("../assets/drink-menu.json", function (data) {
        //success handling
        data.forEach(drink => {
            var drink_html = `
            <div class="col p-2">
            <div class="card" style="width: 15rem;">
            <img src="${drink.image}" class="card-img-top img-fluid" style="width: 15rem; height: 15rem;" alt="${drink.name}">
            <div class="card-body">
            <h5 class="card-title">${drink.name}</h5>
            <p class="badge bg-success">${drink.type}</p>
            <p class="card-text">${drink.price}</p>
            </div>
            </div>
            </div>
            `
            $("#drink-menu").append(drink_html);
        });
        console.log(data)
    }).fail(function (error) {
        $(".container").append(`<div class="alert alert-danger">Failed to fetch drink menu. Please try again later.</div>`);
        console.log(error)
    });
})