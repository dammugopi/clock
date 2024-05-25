  // clock input 
  const numberHours=document.querySelector('.number-hours');
  const barSeconds=document.querySelector('.bar-seconds');
  const dighours=document.getElementById('digHours');
  const digminutes=document.getElementById('digMintues');
  // for day and date 
  const digDate=document.getElementById('date');
  const digDay=document.getElementById('day');
  // city 
  



// clock face 
  const inputgroundUrl=document.getElementById('backgroundUrl');
  console.log(inputgroundUrl);


  document.getElementById('btnbackground').addEventListener('click',backGroundChange);

  function backGroundChange(){
    const background=document.getElementById('clockBackGround');  
    background.style.backgroundImage=`url('${inputgroundUrl.value}')`

    inputgroundUrl.value=""

  }
  

  

  //fetch  api 
  // city 
  const city = document.getElementById('inp');
  console.log(city.value)

  document.getElementById('btn').addEventListener('click', fetchData);

  function fetchData(){
    console.log(city.value)
    fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city.value},IN&APPID=0847e047efdbf80409429aabd32e2a9f`
		)
			.then(function (res) {
				return res.json()
            })
        .then(function (data)
        {
            console.log(data);
            displayData(data)
        })
			.catch(function (err) {
				console.log(err)
			});


  }
  
function displayData(data){
  const place=document.getElementById('place');
  place.innerHTML=city.value.toUpperCase();

  console.log(data.main.temp-273.15);

  const temp = document.getElementById('valuetemp');
  temp.textContent=`${Math.ceil(data.main.temp-273.15)}°C`;
  city.value=""
}





// clock logic
  const numberElement=[];
  const barElements=[];

  for(let i=1;i<=12;i++){
    numberElement.push(`<span style="--index:${i}"><p>${i}</p></span>`);
  }

  numberHours.insertAdjacentHTML("afterbegin",numberElement.join(""));
  console.log(numberElement);


for(let i=1;i<=60;i++){
  barElements.push(`<span style="--index:${i}"><p></p></span>`);
}
barSeconds.insertAdjacentHTML("afterbegin",barElements.join(""));

const handHours=document.querySelector('.hand.hours');
const handMintues=document.querySelector('.hand.minutes');
const handSeconds=document.querySelector('.hand.seconds');


function getCurrentTime(){
  
  let date=new Date();
  let currentHours=date.getHours();
  let currentMintues=date.getMinutes();
  let currentSeconds=date.getSeconds();
  let currentDate=date.getDate();
  let currentDay = date.getDay();
  const days06=['SUN','MON',"TUE",'WED','THU','FRI','SAT'];

  dighours.textContent=String(currentHours).padStart(2, '0');
  digminutes.textContent=String(currentMintues).padStart(2, '0');
  digDate.textContent=String(currentDate).padStart(2, '0');
  digDay.textContent= days06[currentDay] 
  console.log(days06[currentDay],typeof(days06[currentDay]))
  
  handHours.style.transform = `rotate(${currentHours * 30 + currentMintues / 2}deg)`;
  handMintues.style.transform = `rotate(${currentMintues *6}deg)`;
  handSeconds.style.transform = `rotate(${currentSeconds *6}deg)`;

  console.log(date.getDate())
  // console.log(days[date.getDay()])
  console.log(date.getMinutes())
}
 

// call the getCurrentTime function every seconds
setInterval(getCurrentTime,1000)
console.log(String(1).padStart(2, '0'));
