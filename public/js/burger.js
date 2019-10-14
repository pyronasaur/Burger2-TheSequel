$(document).ready(function() {

  const addBurgerList = $(".to-eat-list");
  const devouredList = $(".devoured-list");



    $("#submitBurger").on("click", () => {
        event.preventDefault();
        const burgerInput = $("#burgerInput").val();

        addBurger(burgerInput);
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

    const addBurger = async (burgerName) => {
        
        const burgerInfo = await saveBurger(burgerName);
        console.log(burgerInfo);

        $(".to-eat-list").append('<div class="burgerGroup d-flex" id=' + burgerInfo.burgerId + '><div class="card d-flex h-75 w-75"><div class="card-body">' +
        burgerInfo.burgerId + '. ' + burgerInfo.burgerName +
        '</div></div><button class="btn btn-success d-flex align-items-center ml-5 devour" data-burgerId=' + 
        burgerInfo.burgerId + ' data-burgerName=' +
        burgerInfo.burgerName + '>Devour It</button></div>');
    }

    const devour = () => {
        event.preventDefault();
        console.log($(this));
        $(".devoured-list").append('<div class="card mx-auto w-75"><div class="card-body">' +
            'yummy' + 
            '</div></div>');
    }

    $(document).on("click", "button.devour", function() {
        event.preventDefault();

        const burgerId = $(this).attr('data-burgerid');
        const burgerName = $(this).attr('data-burgername');

        console.log(`Burger ID: ${burgerId} and Burger Name: ${burgerName}`);

        devourBurger(burgerId);

        $(".devoured-list").append('<div class="card mx-auto w-75"><div class="card-body">' +
            burgerId + '. ' + burgerName +
            '</div></div>');
        
        $("#"+burgerId).remove();
    });
});