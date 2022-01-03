var canvas = new fabric.Canvas("myCanvas")
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object="";

function playerUpdate(){
    fabric.Image.fromURl("player.png", function(img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURl(get_image, function(Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });

        canvas.add(block_object)
    });
}