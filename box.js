class Box{
    constructor(x, y, width, height){
        var b_options= {
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        ground = Bodies.rectangle(this.x, this.y, this.width, this.height ,b_options );
         World.add(world, ground);
    }
    display(){
        rectMode(CENTER);
        fill("blue")
        noStroke()
        rect(this.x, this.y, this.width, this.height);
    }
}