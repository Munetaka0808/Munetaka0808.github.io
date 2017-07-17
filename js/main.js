$(function() {
    $("#test").click(test);
    $("#omikuji").click(omikuji);
});

function test() {
    alert("test comp");
};

function omikuji() {
    switch (rand(0,6)) {
        case 0:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("大吉");
            break;
        case 1:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("中吉");
            break;
        case 2:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("小吉");
            break;
        case 3:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("吉");
            break;
        case 4:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("末吉");
            break;
        case 5:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("凶");
            break;
        case 6:
            $("#resultOmikuji").dialog().show("slide",1000);
            $("#contentOmikuji").html("大凶");
            break;
    }
}

/* ---------- Other Function ---------- */

function rand(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}
