# Ex.07 Design of Interactive Image Gallery
## Date:23/12/25

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```

<html>
    <head>
        <title>Interactive Image Gallery</title>
        <link href="style.css" rel="stylesheet">
        <script src="script.js"></script>
    </head>

    <body>
        <div class="container">

            <div class="image-box">
                <img src="KTM.jpg" id="image">
                <p class="about" id="about">-KTM BIKE-</p>
            </div>

            <div class="buttons">
                <button onclick="prev()">Previous</button>
                <button onclick="next()">Next</button>
            </div>

        </div>
        <footer>
            copyright &copy SOWBARNIKA M P (25015490)
        </footer>
    </body>

</html>

var img = [
    {image:"KTM.jpg", about:"-KTM BIKE-"},
    {image:"MT 15.jpg", about:"-MT 15 BIKE-"},
    {image:"BMW BIKE.jpg", about:"-BMW BIKE-"},
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML = img[index].about;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML= img[index].about;
}

body
{
    background: url('bg\ image\ \(2\).jpeg') no-repeat bottom / cover;
    background-color: rgb(29, 55, 58);
}
.container
{
    display:flex;
    justify-content: center;
    align-items: center;    
    background-color: rgb(5, 4, 34);
    width: fit-content;
    padding:20px;
    margin: 70px auto; 
    flex-direction: column;
    border-radius: 10px;
    border-right:#76a3fe solid 7px;
    border-bottom:#7ca0ee solid 7px;
}
.image-box img
{
    width:450px;
    height:330px;
    object-fit: cover;
    border-radius: 10px;
    border: outset rgb(97, 182, 244) 5px;
}
.image-box .about
{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color:rgb(108, 176, 248);
}
.buttons
{
    display:flex;
    width:auto;
    position:relative;
    gap:120px;
}
button
{
    width:105px;
    padding:10px;
    font-size: 20px;
    font-weight:bold;
    background-color:#81a2ea;
    color:rgb(5, 4, 34);
    border:none;
    border-radius:6px;
    cursor: pointer;
    border-right:#4e61f2 solid 7px;
    border-bottom:#4591dd solid 7px;
}
footer
{
    position:fixed;
    background-color: rgb(5, 4, 34);
    left:0;
    bottom:0;
    width:100%;
    color:rgb(172, 176, 253);
    text-align: center;
    font-size: 18px;
    padding: 3px;
}

```

## OUTPUT:

![alt text](<Screenshot 2025-12-23 223227.png>)
![alt text](<Screenshot 2025-12-23 223242.png>)
![alt text](<Screenshot 2025-12-23 223254.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
