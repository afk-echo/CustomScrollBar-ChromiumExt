var style = document.createElement('style'); // creates the style element that will be appended into the end of the <head> tag of the page
var body = document.querySelector('body');

var c = getComputedStyle(body)["backgroundColor"]; // finds the computed background color [which gives the theme] of the document
c = c.replace(/[^\d,.]/g, '').split(','); // converts to an array containing the R, G, B(and A, if present) values

if ((parseInt(c[0])+parseInt(c[1])+parseInt(c[2]))>=384){  // value above 384 implies light theme and dark theme otherwise

    /* for a webpage with a light color scheme, the scrollbar should be dark and vice versa
    - contents - contains the CSS rules that will be appended to the <head> tag of the page, differs for light and dark themed webpages
    */
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

// appends the scrollbar rules into the webpage
style.innerHTML = contents;
document.head.appendChild(style);
