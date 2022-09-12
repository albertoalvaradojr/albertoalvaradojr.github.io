const myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = () =>{
	setUserName();
}

function setUserName(){
	const myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	
	myHeading.textContent = `About Me, ${myName}`;
	
	 if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  
	if(!localStorage.getItem('name')){
		setUserName();
	}
	else{
		const storedName = localStorage.getItem('name');
		myHeading.textContent = `About Me, ${storedName}`;
	}
}

//changes images on click
myImage.onclick = ()=> {
	const mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dbz.jpg'){
		myImage.setAttribute('src','images/dbz2.jpg');
	}
	else{
		myImage.setAttribute('src','images/dbz.jpg');
	}
}