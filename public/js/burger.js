$(document).ready(function() {

  const addBurgerList = $(".to-eat-list");
  const devouredList = $(".devoured-list");



    $("#submitBurger").on("click", () => {
        event.preventDefault();
        const burgerInput = $("#burgerInput").val();

        const burgerInfo = saveBurger(burgerInput);
        console.log(burgerInfo);
        //addBurger(1, burgerInput);
    })


    const saveBurger = async (burgerName) => {

        try {
            let response = await $.post("/api/addBurger/", { name: burgerName })
            return await response;
        } catch (err) {
            console.log("Failed to add the burger");
            }
        }

    const devourBurger = async (burgerId) => {

        try {
            let response = await $.post("/api/devourBurger/", { id: burgerId })
            return await response;
        } catch (err) {
            console.log("Failed to devour the burger");
        }
    }

    const addBurger = (id, burgerName) => {
        $(".to-eat-list").append('<div class="burgerGroup d-flex"><div class="card d-flex h-75 w-75"><div class="card-body">' +
        id + '. ' + burgerName +
        '</div></div><button class="btn btn-success d-flex align-items-center ml-5 devour">Devour It</button></div>');
    }

    const devour = (id, burgerName) => {
        event.preventDefault();
        $(".devoured-list").append('<div class="card mx-auto w-75"><div class="card-body">' +
            'yummy' + 
            '</div></div>');
    }

    $(document).on("click", "button.devour", devour);
});