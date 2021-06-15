var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 300;
block_image_height = 300;

var player_object = "";
var block_object = "";

function player_update() {
    console.log("player_update");
    fabric.Image.fromURL("player.png", function(Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top: player_y, left: player_x
});
canvas.add(player_object);
    });
}
function new_image(Block) {
    fabric.Image.fromURL(Block, function(Img){
block_object = Img;
block_object.scaleToWidth(block_image_width);
block_object.scaleToHeight(block_image_height);
block_object.set({
    top: player_y, left: player_x
});
canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
keypressed = e.keyCode;
if(e.shiftKey == true && keypressed == '80'){
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("CurrentWidth").innerHTML = block_image_width;
document.getElementById("CurrentHeight").innerHTML = block_image_height;
}

if(e.shiftKey == true && keypressed == '77'){
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("CurrentWidth").innerHTML = block_image_width;
    document.getElementById("CurrentHeight").innerHTML = block_image_height;
    }

    if(keypressed == '70') {
        new_image("ironman_face.png");
    }
    if(keypressed == '66') {
        new_image("spiderman_body.png");
    }
    if(keypressed == '76') {
        new_image("hulk_legs.png");
    }
    if(keypressed == '82') {
        new_image("thor_right_hand.png");
    }
    if(keypressed == '72') {
        new_image("captain_america_left_hand.png");
    }
    if(keypressed == '38') {
        up();
    }
    if(keypressed == '40') {
        down();
    }
    if(keypressed == '37') {
        left();
    }
    if(keypressed == '39') {
        right();
    }
}
function up() {
    if(player_y >= 0) {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if(player_y <= 500) {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if(player_x >= 0) {
        player_x = player_x - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if(player_x <= 900) {
        player_x = player_x - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}