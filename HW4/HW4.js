//----activate the start button--------
document.getElementById("startbtn").addEventListener("click", enterText);
//----activate the play again button & reload the page--------
document.getElementById("playbtn").addEventListener("click", reload);
function reload()
{
    location.reload();
}



//--------Add the li dynamically to ul--------
let textArray = [];
let textArray2 = [];

function enterText()
{
for(let i = 0; i < 3; i++)
    {
    textArray[i] = prompt("Please enter");
    let input = textArray[i];
    let ul = document.getElementById("123");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    
//swap the text at 2nd page  "paladin".split('').reverse().join('')
    /*let input2 = textArray[i];
    
    let ul2 = document.getElementById("1234");
    let li2 = document.createElement('li');
    li2.appendChild(document.createTextNode(input2.split('').reverse().join('')));
    ul2.appendChild(li2);*/

    }
    textArray2 = textArray.map(myFunction);  

}


function myFunction(item)
{
    let save = item;
    let tempSave = item.split('').reverse().join('');
    let ul2 = document.getElementById("1234");
    let li2 = document.createElement('li');
    li2.appendChild(document.createTextNode(tempSave));
    ul2.appendChild(li2);
    return tempSave;
}


//--------Show the 2nd section when click------------

document.getElementById("swapbtn").addEventListener("click", swap);
function swap()
{
    the1stPage.style.display = "none";
    the2ndPage.style.display = "block";
    startbtn.style.display ="none";
    playbtn.style.display ="inline-block";
    swapbtn.style.display ="none";
}