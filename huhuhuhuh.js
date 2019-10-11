const processScrollEvent = () => {
    let scrollValue = this.pageYOffset;
    let maxheight = document.body.scrollHeight;
    let thisheight = window.innerHeight;
    adjustPart2(scrollValue);
    adjustPart4(scrollValue);
    adjustSection(scrollValue);
    showProgress(scrollValue, maxheight, thisheight);
    adjustNav(scrollValue);
}


let lastScrollValue = 0;

const adjustNav = (number) => {
    if (number < lastScrollValue) {
        console.log('Naar boven');
        document.getElementById('nav').style.top = 0;
    } else {
        console.log('Naar beneden'); 
        document.getElementById('nav').style.top = "-4em";
    }
    lastScrollValue = number;
}


const adjustPart2 = (number) => {
    document.getElementsByClassName('deel--2')[0].style.backgroundPositionY = -number/2 + 'px';
    
    if (number > 350) {
        let space = number-350;
        document.getElementsByClassName('deel__span--1')[0].style.marginLeft = -space/2 + 'px';
        document.getElementsByClassName('deel__span--2')[0].style.marginLeft = space*2 + 'px';
    } else {
        document.getElementsByClassName('deel__span--1')[0].style.marginLeft = 0;
        document.getElementsByClassName('deel__span--2')[0].style.marginLeft = 0;
    }
}

const adjustPart4 = (number) => {
    document.getElementsByClassName('deel--4')[0].style.backgroundPositionY = -number/.5 + 'px';
    
    
    if (number > 1650) {
        let space = number-1650;
        document.getElementsByClassName('deel__h3')[1].classList.add('sans');
        document.getElementsByClassName('deel__h3')[1].style.marginLeft = space/1 + 'px';
    } else {
        document.getElementsByClassName('deel__h3')[1].classList.remove('sans');
    }
}

const adjustSection = (number) => {
    
    if (number > 1900) {
        let space = number-1900;
        document.getElementsByClassName('section')[0].style.backgroundColor = "red";
        document.getElementsByClassName('section')[0].style.color = "orange";      
        document.getElementsByClassName('section')[0].style.marginTop = -space*1 + "px";      
        document.getElementsByClassName('deel__h2')[0].style.marginLeft = space*2 + "px";        
        document.getElementsByClassName('deel__h2')[0].style.marginTop = space*.5 + "px";  
    } else {
        document.getElementsByClassName('section')[0].style.backgroundColor = "white";
        document.getElementsByClassName('section')[0].style.color = "black";      
        document.getElementsByClassName('section')[0].style.marginTop = 0;      
        document.getElementsByClassName('deel__h2')[0].style.marginLeft = 0;        
        document.getElementsByClassName('deel__h2')[0].style.marginTop = 0;       
    }
}

const showProgress = (number, maxheight, viewportheight) => {
    let theProgress = number/(maxheight-viewportheight);
    console.log(Math.round(theProgress*100));
    
    document.getElementById('voortgang').style.width = Math.round(theProgress*100) + "%";
}

window.addEventListener('scroll', processScrollEvent);