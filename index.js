var rect=require('./rectangle.js');

function solverect(l,b)
{
    console.log("length :"+l + "braedth: " +b);

    if(l<=0 && b<=0)
    {
        console.log("length and breadth smmall");
    }
    console.log("area is"+rect.area(l,b));
    console.log("perimeter is"+rect.perimeter(l,b));
}


solverect(2,3);