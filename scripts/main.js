const myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = () =>{
	setUserName();
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