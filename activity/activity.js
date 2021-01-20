//FOR ONline activity
let curDate = new Date();
let pivotNum; //get pivot point and to go him with steps
let curAV;   //to store current value
const activityValue = document.getElementById('human-activity');
let OPcounter = 0;
let OPnum = 0;
let firstStep = 0;
const chbox = document.getElementById("modalpopup");

//FOR ONline other places
const otherPlaces = document.getElementById('other-places-number');

//Func for rand number
function randomNumber(min, max){
	return Math.floor(Math.random()*(max-min)+min); 
}
//rand num for other places
OPnum = randomNumber(57, 68)
otherPlaces.innerHTML = `${OPnum}`;

//Starting point
curHour = curDate.getHours();
if(curHour==22 || curHour==23){
	curAV = randomNumber(180, 200);
}else if(curHour==0 || curHour==1){
	curAV = randomNumber(150, 180);
}else if(curHour>1 && curHour<=3){
	curAV = randomNumber(120, 150);
}else if(curHour>3 && curHour<=9){
	curAV = randomNumber(20, 50);
}else if(curHour>9 && curHour<=12){
	curAV = randomNumber(80, 100);
}else if(curHour>12 && curHour<=14){
	curAV = randomNumber(100, 120);
}else if(curHour>14 && curHour<=18){
	curAV = randomNumber(80, 100);
}else if(curHour>18 && curHour<=20){
	curAV = randomNumber(100, 120);
}else if(curHour>20 && curHour<22){
	curAV = randomNumber(140, 180);
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
		otherPlaces.innerHTML = `${OPnum}`;
	}
}, randTimeout);

//Main function
function HumanActivity(){
	let randWRAPtimer = randomNumber(3000,10000);
	setTimeout(()=>{
		curMin = curDate.getMinutes();
		//curHour = curDate.getHours();

		if(curHour==22 || curHour==23){
			pivotNum = randomNumber(180, 201);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour==0 || curHour==1){
			pivotNum = randomNumber(150, 181);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour>1 && curHour<=3){
			pivotNum = randomNumber(120, 151);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour>3 && curHour<=9){
			pivotNum = randomNumber(20, 51);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour>9 && curHour<=13){
			pivotNum = randomNumber(80, 101);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour>13 && curHour<=18){
			pivotNum = randomNumber(80, 101);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour>18 && curHour<=20){
			pivotNum = randomNumber(100, 131);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
		}else if(curHour>20 && curHour<22){
			pivotNum = randomNumber(140, 171);
			if(OPcounter>0){
				OPcounter = OPcounter - 1;
				if(OPcounter == 0){
					OPnum = OPnum - 1;
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
				OPcounter = randomNumber(1, 5);
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
				otherPlaces.innerHTML = `${OPnum}`;
			}else if(firstStep < 4){
				OPcounter = 1;
				firstStep += 1; 
			}
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
