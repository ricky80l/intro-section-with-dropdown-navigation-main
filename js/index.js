var idSelection = [];


function getId() {
    var element = $(".envy");
    for (n = 0; n < element.length; n++) {
        if (element[n].id != "") {
            idSelection.push(element[n].id);
        };
    };
};

getId();

$(".envy").click(function() {
    var elementID = this.id;
    if (elementID == "feature") {
        $("#" + elementID + " .sub").slideToggle();
        $("#company .sub").slideUp();
        arrow(elementID);
    } else {
        $("#" + elementID + " .sub").slideToggle();
        $("#feature .sub").slideUp();
        arrow(elementID);
    };
});

function arrow(elemento) {
    if (elemento == idSelection[0]) {
        $("#" + elemento + " .min").toggleClass("none");
        $("#" + elemento + " .max").toggleClass("block");
        if ($("#" + idSelection[1] + " .max").hasClass("block") == true) {
            $("#" + idSelection[1] + " .min").removeClass("none");
            $("#" + idSelection[1] + " .max").removeClass("block");
        };
    } else {
        $("#" + elemento + " .min").toggleClass("none");
        $("#" + elemento + " .max").toggleClass("block");
        if ($("#" + idSelection[0] + " .max").hasClass("block") == true) {
            $("#" + idSelection[0] + " .min").removeClass("none");
            $("#" + idSelection[0] + " .max").removeClass("block");
        };
    };
};


// MOBILE SCRIPT
var menuOpen = false;

$(".burger_menu").click(function() {
    $(".menu").css("display", "flex");
    $(".menu").animate({
        width: "14.8rem"
    }, 500);
    setTimeout(function() {
        menuOpen = true;
    }, 400);
});

function close() {
    $(".menu").animate({
        width: "0rem"
    }, 500);
    setTimeout(function() {
        $(".menu").css("display", "none");
    }, 500);
    menuOpen = false;
};

$(document).click(function(event) {
    if (!$(event.target).closest('.menu').length) {
        if (menuOpen === true) {
            close();
        };
    }
});

$(".close").click(function() {
    if (menuOpen === true) {
        close();
    }
});

if ($(window).width() < 850) {
    setTimeout(function() {
        var mainH = $(".main").height();
        $(".menu").height(mainH);
    }, 1000);
};

function menuMob() {
    if ($(window).width() < 850) {
        var mainH = $(".main").height();
        $(".menu").height(mainH);
    } else {
        $(".menu").css("height", "auto");
    };
};
$(window).resize(function() {
    scrollMenu();
    console.log($(document).height() + " " + $(document).width());
});

scrollMenu();

function scrollMenu() {
    if ($(document).height() > $(document).width()) {
        $(window).scroll(function() {
            var x = $(window).scrollTop();
            $(".item_list").css("padding-top", x);
            $(".close").css("top", x);
        });
    };
};