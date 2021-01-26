//FOR ONline activity
let curDate = new Date();
let pivotNum; //get pivot point and to go him with steps
let curAV;   //to store current value
const activityValue = document.getElementById('activity');
let OPcounter = 0;
let OPnum = 0;
let firstStep = 0;
const chbox = document.getElementById('modalpopup');

//FOR ONline other places
const otherPlaces = document.getElementById('places-counter');
//img
const imgPlaces = document.getElementById('places-img');

//Func for rand number
function randomNumber(min, max){
	return Math.floor(Math.random()*(max-min)+min); 
}
//rand num for other places
OPnum = randomNumber(12, 21)
otherPlaces.innerHTML = `${OPnum}`;

function resizePlaces(){
	fz = 20;
	fzcount = 0;
	let st854 = setInterval(()=>{
		if(fz==20){
  			imgPlaces.classList.add("places-block-img-class");
  			otherPlaces.classList.add("places-counter-class");
			fz = 25;
		}else if(fz==25){
			imgPlaces.classList.remove("places-block-img-class");
  			otherPlaces.classList.remove("places-counter-class");
			fz = 20;
		}
		fzcount = fzcount + 1;
		if(fzcount == 8){
			clearInterval(st854);
		}
	}, 500);
	
}

//Starting point
curHour = curDate.getHours();
if(curHour==1 || curHour==2){
	curAV = randomNumber(50, 100);
}else if(curHour>2 && curHour<=6){
	curAV = randomNumber(10, 15);
}else if(curHour>6 && curHour<=10){
	curAV = randomNumber(35, 45);
}else if(curHour>10 && curHour<=13){
	curAV = randomNumber(90, 125);
}else if(curHour>13 && curHour<=17){
	curAV = randomNumber(150, 190);
}else if(curHour>17 && curHour<=20){
	curAV = randomNumber(250, 350);
}else if(curHour>20 && curHour<=22){
	curAV = randomNumber(450, 550);
}else if(curHour==23 || curHour==0){
	curAV = randomNumber(340, 420);
}
activityValue.innerHTML = `${curAV}`;
let i = 0;
let randTimeout = randomNumber(3000,4000);

//with interval do func `HumanActivity`
st546 = setInterval(HumanActivity, 20000);

let st845 = setInterval(()=>{
	let randSan = randomNumber(0,10000);
	if(randSan > 6000){
		curAV += 1;
	}if(randSan <= 6000){
		curAV -= 1;
	}
	activityValue.innerHTML = `${curAV}`;
	i+=1;
	if(i == 10){
		clearInterval(st845);
	}
	if(i == 4){
		let showvb = setTimeout(()=>{
			chbox.checked=true;
		},0);
		let hidevb = setTimeout(()=>{
			console.log(chbox.checked);
			if(chbox.checked==true){
				chbox.checked=false;
			}
		},6000);
		OPnum = OPnum - 1;
		resizePlaces();
		otherPlaces.innerHTML = `${OPnum}`;
	}
}, randTimeout);


//Basic FUNCTION
function basicChange(){
	if(OPcounter>0){
		OPcounter = OPcounter - 1;
		if(OPcounter == 0){
			OPnum = OPnum - 1;
			resizePlaces();
			otherPlaces.innerHTML = `${OPnum}`;
			console.log(chbox.checked);
			if(chbox.checked==false){
				let showvb = setTimeout(()=>{
					chbox.checked=true;
				},0);
				let hidevb = setTimeout(()=>{
					if(chbox.checked==true){
						chbox.checked=false;
					}
				},6000);
			}
		}
		console.log(OPcounter);
	}	
	if(OPcounter == 0 && firstStep == 4){
		OPcounter = randomNumber(1, 4);
		console.log(OPcounter);
	}else if(OPcounter==0 && firstStep == 0){
		let showvb = setTimeout(()=>{
			chbox.checked=true;
		},0);
		let hidevb = setTimeout(()=>{
			if(chbox.checked==true){
				chbox.checked=false;
			}
		},6000);
		OPcounter = 1;
		firstStep += 1;
		console.log("Started");
		OPnum = OPnum - 1;
		resizePlaces();
		otherPlaces.innerHTML = `${OPnum}`;
	}else if(firstStep < 4){
		OPcounter = 1;
		firstStep += 1; 
	}
}

//Main function
function HumanActivity(){
	let randWRAPtimer = randomNumber(3000,10000);
	setTimeout(()=>{
		curMin = curDate.getMinutes();
		//curHour = curDate.getHours();

		if(curHour==1 || curHour==2){
			pivotNum = randomNumber(50, 100);
			basicChange(pivotNum);
		}else if(curHour>2 && curHour<=6){
			pivotNum = randomNumber(10, 15);
			basicChange(pivotNum);
		}else if(curHour>6 && curHour<=10){
			pivotNum = randomNumber(35, 45);
			basicChange(pivotNum);
		}else if(curHour>10 && curHour<=13){
			pivotNum = randomNumber(90, 125);
			basicChange(pivotNum);
		}else if(curHour>13 && curHour<=17){
			pivotNum = randomNumber(150, 190);
			basicChange(pivotNum);
		}else if(curHour>17 && curHour<=20){
			pivotNum = randomNumber(250, 350);
			basicChange(pivotNum);
		}else if(curHour>20 && curHour<=22){
			pivotNum = randomNumber(450, 550);
			basicChange(pivotNum);
		}else if(curHour==23 || curHour==0){
			pivotNum = randomNumber(340, 420);
			basicChange(pivotNum);
		}
		const constCurAV = curAV;
		if(pivotNum > curAV){
			counter = pivotNum - curAV;
			let st516 = setInterval(()=>{
				if(pivotNum < curAV){
					clearInterval(st516);
				}else{
					curAV = curAV + 1;
					activityValue.innerHTML = `${curAV}`;
				}
			}, 700);
			activityValue.innerHTML = `${curAV}`;
		}else if(pivotNum < curAV){
			counter = curAV - pivotNum;
			let st984 = setInterval(()=>{
				if(pivotNum > curAV){
					clearInterval(st984);
				}else{
					curAV = curAV - 1;
					activityValue.innerHTML = `${curAV}`;
				}
			}, 1000);
			activityValue.innerHTML = `${curAV}`;
		}else{
			curAV = curAV - 1;
			activityValue.innerHTML = `${curAV}`;
		}
	}, randWRAPtimer);

}