// makeInterface.js

function makeInterface()
{
    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Universal_Language';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Universal Language';
    titleAndLink.style.fontSize = '17px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(0, 255, 255)';
    titleAndLink.style.lineHeight = '12px';
    ba(titleAndLink);
    
    //-//

    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    mainDiv.style.marginTop = 10 + 'px';
    mainDiv.style.gap = '4px';
    ba(mainDiv);

    //-//

    let tutorialFiles = [
    {
        name: 'Array Functional',
        url: 'src/html/catopalian_js_universal_array_functional.html'
    },

    {
        name: 'Array Prototype',
        url: 'src/html/catopalian_js_universal_array_prototype.html'
    },

    ];

    //-//

    let tutorialsDetails = ce('details');
    tutorialsDetails.open = 'true';
    mainDiv.append(tutorialsDetails);

    let tutorialsSummary = ce('summary');
    tutorialsSummary.textContent = 'Categories';
    tutorialsDetails.append(tutorialsSummary);

    //-//

    let tutorialsBtnContainer = ce('div');
    tutorialsBtnContainer.style.border = 'solid 1px rgb(100, 100, 100)';
    tutorialsBtnContainer.style.display = 'flex';
    tutorialsBtnContainer.style.flexDirection = 'column';
    tutorialsBtnContainer.style.padding = '2px 4px';
    tutorialsDetails.append(tutorialsBtnContainer);

    for (let x = 0; x < tutorialFiles.length; x++)
    {
        let pageBtn = ce('button');
        pageBtn.onmouseover = function()
        {
            hoverSound();
        };
        pageBtn.onclick = function()
        {
            clickSound();
            ge('theFrame').src = tutorialFiles[x].url;
        };
        pageBtn.oncontextmenu = function()
        {
            clickSound();
            window.open(tutorialFiles[x].url);
        };
        pageBtn.textContent = tutorialFiles[x].name;
        pageBtn.style.fontSize = 15 + 'px';
        pageBtn.style.fontWeight = 'bold';
        pageBtn.style.alignSelf = 'flex-start';
        tutorialsBtnContainer.append(pageBtn);
    }

    //-//

    let functionalLink = ce('a');
    functionalLink.textContent = 'Array Functional';
    functionalLink.href = "src/js/universal/catopalian_js_universal_array_functional.js"
    functionalLink.target = "_blank";functionalLink.style.color = 'cyan'; functionalLink.style.textDecoration = 'none';
    tutorialsBtnContainer.append(functionalLink);

    //-//

    let prototypeLink = ce('a');
    prototypeLink.textContent = 'Array Prototype';
    prototypeLink.href = "src/js/universal/catopalian_js_universal_array_prototype.js"
    prototypeLink.target = "_blank";prototypeLink.style.color = 'cyan'; prototypeLink.style.textDecoration = 'none';
    tutorialsBtnContainer.append(prototypeLink);

    //-//

    tutorialsBtnContainer.append(ce('hr'));

    //-//

    let theFrame = ce('iframe');
    theFrame.style.width = '620px';
    theFrame.style.height = '320px';
    theFrame.id = 'theFrame';
    theFrame.src = tutorialFiles[0].url;
    theFrame.style.color = 'rgb(255, 255, 255)';
    mainDiv.append(theFrame);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

