

const card = document.querySelector('.card');
const cardHead = document.querySelector('.card-head');
const nameofplayer = document.querySelector('.name');
const position = document.querySelector('#position');
const appearance = document.querySelector('#appearances');
const goal = document.querySelector('#goals');
const assist = document.querySelector('#assists');
const match = document.querySelector('#match');
const pass = document.querySelector('#passesperminute');
const select = document.querySelector('.select-player');







document.getElementById('select').addEventListener('change', loadData);
function loadData (e){
  document.querySelector('.card').style.display = 'block';
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'players.json', true);
    
    
    
    xhr.onload = function() {
      if (this.status === 200) {
        var list = JSON.parse(this.responseText);
        console.log(list);


        const selectedValue = select.value;
        const filteredData = list.players.filter(function(player){
        return player.player.id == selectedValue;
     });

     filteredData.forEach(function(player){
      // console.log(player.player.name.first)
      let image = `<img style='width:100%; height:100%' src ='${player.player.info.image}'/>`
      cardHead.innerHTML = image;
      
      console.log(cardHead);
      nameofplayer.innerHTML = `${player.player.name.first} ${player.player.name.last}`;
      position.innerHTML = `${player.player.info.positionInfo}`;
      const apperanceOutput = `<p>Appearances <p> <a>${player.stats[6].value}<a>`
      appearance.innerHTML = apperanceOutput;
      



      const goalsOutput = `<p>Goals<p> <a>${player.stats[0].value}<a>`;
      goal.innerHTML = goalsOutput;

      const assistOutput = `<p>Assists <p> <a>${player.stats[5].value}<a>`;
      assist.innerHTML = assistOutput;


      goalsmatchAdd = (player.stats[0].value/player.stats[6].value).toFixed(2);
      const goalsmatch = `<p>Goals per match <p> <a>${goalsmatchAdd} <a>`;
      match.innerHTML = goalsmatch;

      
      let passesperMinuteadd =((player.stats[4].value + player.stats[8].value) / player.stats[7].value).toFixed(2) ;
      const passesperMinute = `<p>Passes per minute: <p> <a> ${passesperMinuteadd} <a>`;
      pass.innerHTML = passesperMinute;
        // console.log(Array(filteredData))
        
        
        })
       
      }
    };
    
    
    
    
    
    xhr.send();


 




}

