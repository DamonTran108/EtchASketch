const gridContainer = document.querySelector(".gridContainer");

var rowsChosen = 0;

var columnsChosen = 0;

const button =  document.querySelector(".btn");

var stack = [];





function createGrid(rows, columns){

    let counter = 0;

    const squareSize = gridContainer.clientWidth / columns;

    columnsChosen = columns;
    rowsChosen = rows;

    for(let row = 0 ; row < rows ; row ++){

        for(let column  = 0;  column < columns ; column ++){

            const cell = document.createElement("cell");
            
            cell.style.border = "1px solid rgba(20, 20, 20, .2)";

            cell.style.width =  `${squareSize-2}px`;

            cell.style.height = `${squareSize-2}px`;

            cell.id =  counter;

      ;
    

            gridContainer.appendChild(cell);

            counter ++;
        }
    }

    var newGridState = gridContainer.cloneNode(true);

    stack.push(newGridState);
  
}



let colourContainer = document.querySelector(".colourChangeContainer");

colourContainer.addEventListener("click", (event) => {

    let chosenColourButton = event.target;

    let children = document.querySelector(".colourChangeContainer").children;

    switch (chosenColourButton.id){

        case 'colourFill' :

            let colourFill = document.querySelector("#colourFill");

            if(colourFill.style.backgroundColor == "aquamarine"){

                colourFill.style.backgroundColor = "transparent";

                colourFill.style.color = "aquamarine";

            }else{

                for(let i = 0; i < children.length; i++){
                    
                    children[i].style.backgroundColor = "transparent";
        
                    children[i].style.color = "aquamarine";
                }

                    colourFill.style.backgroundColor = "aquamarine"
                    colourFill.style.color = "grey";

                }

        break;


        case 'colourGrab' :

            let colourGrab = document.querySelector("#colourGrab");

            if(colourGrab.style.backgroundColor == "aquamarine"){
                
                colourGrab.style.backgroundColor = "transparent";

                colourGrab.style.color = "aquamarine";
            }else{

                for(let i = 0; i < children.length; i++){
                    
                    children[i].style.backgroundColor = "transparent";
        
                    children[i].style.color = "aquamarine";
                }

                colourGrab.style.backgroundColor = "aquamarine"
                colourGrab.style.color = "grey";

                }

        break;
    }
})

let btnContainer = document.querySelector(".btnContainer");


btnContainer.addEventListener("click", (event) => {

    let chosenBtn = event.target;

    let children = document.querySelector(".btnContainer").children;

    switch(chosenBtn.id){

         case 'colourShading' :

         let colourShading = document.querySelector("#colourShading");

            if(colourShading.style.backgroundColor == "aquamarine"){

                colourShading.style.backgroundColor = "transparent";

                colourShading.style.color = "aquamarine";
        
            }else{

                for(let i = 0; i < children.length; i++){
        
                    children[i].style.backgroundColor = "transparent";

                    children[i].style.color = "aquamarine";
                }

                    colourShading.style.backgroundColor = "aquamarine";
                    colourShading.style.color = "grey";
            }

            break;

         case 'colourLighting' :

            let colourLighting = document.querySelector("#colourLighting");

                if(colourLighting.style.backgroundColor == "aquamarine"){

                    colourLighting.style.backgroundColor = "transparent";

                    colourLighting.style.color = "aquamarine";
            
                }else{

                    for(let i = 0; i < children.length; i++){
            
                        children[i].style.backgroundColor = "transparent";

                        children[i].style.color = "aquamarine";
                    }

                        colourLighting.style.backgroundColor = "aquamarine";

                        colourLighting.style.color = "grey";

                    }

                break;


        case  'colourEraser' :

            let colourEraser = document.querySelector("#colourEraser");

                if(colourEraser.style.backgroundColor == "aquamarine"){

                    colourEraser.style.backgroundColor = "transparent";
                    colourEraser.style.color = "aquamarine";
            
                }else{

                    for(let i = 0; i < children.length; i++){
            
                        children[i].style.backgroundColor = "transparent";

                        children[i].style.color = "aquamarine";
                    }
                    colourEraser.style.backgroundColor = "aquamarine";

                    colourEraser.style.color = "grey";
                }

                break;

        case 'colourRainbow' :

            let colourRainbow = document.querySelector("#colourRainbow");
                if(colourRainbow.style.backgroundColor == "aquamarine"){

                    colourRainbow.style.backgroundColor = "transparent";

                    colourRainbow.style.color = "aquamarine";
            
                }else{

                
                    for(let i = 0; i < children.length; i++){
            
                        children[i].style.backgroundColor = "transparent";

                        children[i].style.color = "aquamarine";
                    }

                    colourRainbow.style.backgroundColor = "aquamarine";


                    colourRainbow.style.color = "grey";
                }

                break;
    }
})




let undoBtn = document.querySelector("#undo");

    undoBtn.addEventListener("click", (event) => {

        undo(stack);
        
    })

    let resetBtn = document.querySelector("#reset");
    
    resetBtn.addEventListener("click", (event) => {
    
            gridContainer.innerHTML = null
            
            createGrid(rowsChosen,columnsChosen);

    })


button.addEventListener("click", (event) => {

   let body = document.querySelector("#body");

    let value   = prompt("How many squares a side do you want?");

    if(value > 100){

        alert("Please Input a value no higher than 100");

    }else{

        gridContainer.innerHTML = null

        
        createGrid(value,value);
    }

})


let colorPicked = document.querySelector("#penColor");

let newColor = "#ff0000";


colorPicked.addEventListener("input", (event) =>{
          
     newColor = colorPicked.value;

     console.log(newColor);
        
})


colorPicked.addEventListener("change", (event) =>{
          
    newColor = colorPicked.value;

    console.log(newColor);
       
})


 gridContainer.addEventListener("click" , (event) => {

    let target = event.target;

    if(target.id != ""){

        if(colourShading.style.backgroundColor == "aquamarine"){
            
            makeDarker(target);

        
        }else if(colourLighting.style.backgroundColor == "aquamarine"){

    
            makeLighter(target);

        }else  if(colourFill.style.backgroundColor == "aquamarine"){

            fill(gridContainer);

            
        }else if (colourEraser.style.backgroundColor == "aquamarine"){



            erase(target);


        }else if(colourRainbow.style.backgroundColor == "aquamarine"){

            rainbow(target);


        }else if(colourGrab.style.backgroundColor == "aquamarine"){
            
            grabColour(target)

        }else{
            target.style.backgroundColor = newColor;


           
        }

        var newGridState = gridContainer.cloneNode(true);

        stack.push(newGridState);

    }

})



    function makeDarker(cell){

        if(cell.style.backgroundColor != ""){

            const currColor = cell.style.backgroundColor.toString();

            const colorString= currColor.substring(4, currColor.length-1);

            const colorArray = colorString.split(",")

            const newColor = "rgb(" + colorArray[0] * 0.5 + "," + colorArray[1] * 0.5 + "," + colorArray[2] * 0.5 + ")";

            cell.style.backgroundColor = newColor;

        }
    }


    function makeLighter(cell){

        if(cell.style.backgroundColor != ""){

            const currColor = cell.style.backgroundColor.toString();

            const colorString= currColor.substring(4, currColor.length-1);

            const colorArray = colorString.split(",")

            var newColor =  "rgb(" + colorArray[0] + "," + colorArray[1]+ "," + colorArray[2] + ")";

            if(colorArray[0] == 0  || colorArray[1] == 0 || colorArray[2] == 0){

                newColor = "rgb(" + colorArray[0] + 50 + "," + colorArray[1] + 50 + "," + colorArray[2] + 50  + ")";

            }else{
                newColor = "rgb(" + colorArray[0] * 2.0 + "," + colorArray[1] * 2.5 + "," + colorArray[2] * 2.0 + ")";

            }

            cell.style.backgroundColor = newColor;

        }

    }


  

    function erase(cell){
        
        const currColor = cell.style.backgroundColor.toString();

        const colorString= currColor.substring(4, currColor.length-1);

        const colorArray = colorString.split(",")

        const newColor = "rgb(" + 255 + "," + 255 + "," + 255 + ")";

        cell.style.backgroundColor = "white";

        console.log(newColor);
    }



    function rainbow(cell){

        var RGBColor1 =  Math.floor(Math.random() * 255);
        var RGBColor2 =  Math.floor(Math.random() * 255);
        var RGBColor3 =  Math.floor(Math.random() * 255);

        const newColor = "rgb(" + RGBColor1 + "," + RGBColor2 + "," + RGBColor3 + ")";

        cell.style.backgroundColor =  newColor;

    }
    


    


    function undo(stack){

        if(stack.length >= 2){

            stack.pop();

            var currentGrid = stack[stack.length-1].cloneNode(true);

            var lastAction  = [];

            var j = 0;

            for(c of currentGrid.children){

                lastAction[j] = c;

                j++;

            }

             gridContainer.innerHTML = null
           

            for(let i = 0 ; i <  lastAction.length; i++ ){

                gridContainer.appendChild(lastAction[i]);
            
            }
           
        }else{

            alert("cant undo no changes");
        }
    }



    function fill(grid){

        let children = grid.children;

        for(let i = 0 ; i < children.length; i++){

           children[i].style.backgroundColor = newColor;
        }
     
        colourFill.style.backgroundColor = "transparent";

        colourFill.style.color = "aquamarine";

    }
 


    function grabColour(cell){

        var grabbedColour = cell.style.backgroundColor;

        const currColor = grabbedColour.toString();

        const colorString= currColor.substring(4, currColor.length-1);

        const colorArray = colorString.split(",")

         newColor = "rgb(" + colorArray[0] + "," + colorArray[1] + "," + colorArray[2] + ")";

        let penColour = document.querySelector("#penColor");

        penColour.value = rgbToHex(colorArray[0],  colorArray[1] ,  colorArray[2]);

        newColor = penColour.value;

        let colourGrab = document.querySelector("#colourGrab");


        colourGrab.style.backgroundColor = "transparent";
        colourGrab.style.color = "aquamarine";

    }




    function rgbToHex(red, green, blue) {
        const rgb = (red << 16) | (green << 8) | (blue << 0);
        return '#' + (0x1000000 + rgb).toString(16).slice(1);
      }


createGrid(16,16);

