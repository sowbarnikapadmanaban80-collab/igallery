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