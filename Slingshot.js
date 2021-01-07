class Slingshot{
    constructor(bodyA1,pointB1){
        var options = {
            bodyA:bodyA1,
            pointB:pointB1,
            stiffness:0.04,
            length:50
        }
        this.pointB = pointB1
        this.Sling = Constraint.create(options)
        World.add(world,this.Sling)
    }
    display(){
        if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position
            var pointB = this.pointB
    
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.Sling.bodyA = null;
    }
}