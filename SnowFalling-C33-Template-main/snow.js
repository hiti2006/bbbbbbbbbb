class snoww{
    constructor(x,y,r)
    {
        this.sw=Bodies.circle(x,y,r,{friction:0.5})
        World.add(world,this.sw)
        this.img=loadImage("snow4.webp")
        this.r=r
    } 
    display(){
        imageMode(CENTER)
        image(this.img,this.sw.position.x,this.sw.position.y,this.r,this.r)
        
    }
}