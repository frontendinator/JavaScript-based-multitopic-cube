# JavaScript-based multitopic cube
Volumetric cube for ingenious display of multitopic matter. Pure Javascript. Github resources were used as example 
of multitopic stuff.

## Getting started
Open the file "cube.html", press the left button over the cube and move the mouse inside of cube.

#### To change sensitivity of the mouse pointer you have to multiply or divide properties ```e.clientX``` and ```e.clientY``` 
####by certain number. 

For example, if you want to decrease the mouse pointer sensitivity you shoud open the file "functionforcube.js" and replace code fragment 

    cube.style.transform = "rotateX(" + e.clientY*2 + "deg) rotateY(" + e.clientX*2 +"deg)"

to code fragment

    cube.style.transform = "rotateX(" + e.clientY + "deg) rotateY(" + e.clientX +"deg)"
 
To view current coordinates during the movement over the cube you need to add to the file "cube.html" the container ```div```
with class ```.coordinates``` and paste to the function ```cubedown()``` of the file "functionforcube.js" the following code:

    var coordina = document.querySelector(".coordinates");
    var coor = "Coordinates: (" + e.clientX + "," + e.clientY + ")";
    coordina.innerHTML = coor;


