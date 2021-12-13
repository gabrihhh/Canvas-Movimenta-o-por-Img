function spritedown(img){
    this.srcX = this.srcY = 0;
    this.width = 30;
    this.height = 105;
    this.posX = this.posY = 0;
    this.img = img;
    this.speed = 1;
    
    this.draw = function(ctx){
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
    }

    this.move = function(){
        if(this.mvleft){
            this.posX -= this.speed;
        }
    }
}
module.exports = 'spritedown';   