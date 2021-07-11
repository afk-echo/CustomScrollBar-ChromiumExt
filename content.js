var style = document.createElement('style'); // creates the style element that will be appended into the end of the <head> tag of the document
var body = document.querySelector('body');
var c = getComputedStyle(body)["backgroundColor"]; // finds the effective background color [which gives the theme] of the document
c = c.replace(/[^\d,.]/g, '').split(',');
if ((parseInt(c[0])+parseInt(c[1])+parseInt(c[2]))>=384){  //finds the brightness of the webpage background and hence the color scheme

    /* for a webpage with a light color scheme, the scrollbar should be dark and vice versa*/
    var contents = `
        ::-webkit-scrollbar {
            width: 12px;
            height: 12px;
            border-radius: 8px; 
            background-color: transparent;
        }
        
        ::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 8px;
        }
        
        ::-webkit-scrollbar-thumb {
            width: 7px; 
            background-color: rgba(0, 0, 0, 0.4)!important;
            border-radius: 8px;
        }
        
        ::-webkit-scrollbar-thumb:hover{
            border: 2px solid transparent; 
            background-color: rgba(0, 0, 0, 0.5)!important;
            border-radius: 8px;
        }`
    
        console.log(1)

}
else{
    var contents = `
    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
        border-radius: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 8px;
    }
    
    ::-webkit-scrollbar-thumb {width: 7px; 
        background-color: rgba(100, 100, 100, 0.4);
        border-radius: 8px;
    }
        
    ::-webkit-scrollbar-thumb:hover{border: 2px solid transparent; 
        background-color: rgba(100, 100, 100, 0.5);
        border-radius: 8px;
    }`;
}
style.innerHTML = contents;
document.head.appendChild(style);
