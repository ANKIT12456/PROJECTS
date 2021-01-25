class BOX{

    constructor(x,y){

        var options={
            isStatic:true,
            restituition:0.7,
            friction:0.1,
            density:0.1
        }
        this.body=Bodies.rectangle(x,y,20,20,options);
        this.image=loadImage("sprite_0.png");
        World.add(world,this.body);
    }

    display(){
        console.log(this.body.speed);
        if(this.body.speed<4){
            var pos=this.body.position;
            var angle=this.body.angle;	
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            imageMode(CENTER);
            image( this.image,0,0,50,50);
            pop();
            }
        else{
              World.remove(world,this.body);
              push ();
              this.visibility=this.visibility-5;
              tint (255,this.visibility);
              image(this.image,this.body.position.x,this.body.position.y,50,50);
              pop ();
            }
    }
}