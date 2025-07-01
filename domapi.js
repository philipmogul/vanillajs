// Setting the textContent property of an Element is one way to output text on a web page.

document.getElementById("para").textContent = "Philip Value is a really great Engineer!";

// You can also use JavaScript to create a new HTML element programmatically.
// In our JavaScript, we create a new <p> tag with a textContent property of 
// and add it at the end of the html body:
var element = document.createElement('p');
element.textContent = "Mastery of Javascript HTML Elements is Awsm";
document.body.appendChild(element); //add the newly created element to the DOM

// Using the DOM API (with graphical text: Canvas, SVG, or image file)
// HTML provides the canvas element for building raster-based images.
// First build a canvas for holding image pixel information.
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

//Then select a context for the canvas, in this case two-dimensional:
var ctx = canvas.getContext('2d');

// Then set properties related to the text:
ctx.font = '50px Times New Roman';
ctx.fillText("JS Engineer!!!", 50, 50);

// Then insert the canvas element into the page to take effect:
document.body.appendChild(canvas);

//Using SVG
//SVG is for building scalable vector-based graphics and can be used within HTML.
//First create an SVG element container with dimensions:
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

//Then build a text element with the desired positioning and font characteristics:
var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');
text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';

//Then add the actual text to display to the textelement:
text.textContent = 'Hello world!';

// Finally add the text element to our svg container and add the svg container element to the HTML document:
svg.appendChild(text);
document.body.appendChild(svg);


//Image file
// If you already have an image file containing the desired text 
// and have it placed on a server, you can add the URL of
// the image and then add the image to the document as follows:
var img = new Image();
img.src = 'reactjs.jpeg';
img.width = "450";
img.height = "450";
document.body.appendChild(img);

var img2 = new Image();
img2.src = 'toyota hilux.jpg';
img2.width = "450";
img2.height = "450";
document.body.appendChild(img2);
