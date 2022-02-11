<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Defend Types</title>
    <link href="pokestyle.css" rel="stylesheet" type="text/css" />
  </head>
  <body id="defending">
    
    <div id="content">  
    <h1>Pokemon Type Picker</h1>
    <p>This tool was designed to reduce the visual clutter of the pokemon type chart for battles.</p>
    <hr>    
        <h3>Choose the DEFENDING Type</h3>
        <p><a href="poketype.html">Go here</a> to choose the <strong>attacking</strong> type instead</p>
        <div class="buttons">
          <div class="btn-poke"><button id="norm" onClick="atkNorm()"><i class="fa-solid fa-circle-dot"></i><br> Normal</button></div>
          <div class="btn-poke"><button id="fire" onClick="atkFire()"><i class="fa-solid fa-fire-flame-curved"></i><br>Fire</button></div>
          <div class="btn-poke"><button id="water" onClick="atkWater()"><i class="fa-solid fa-droplet"></i><br>Water</button></div>
          <div class="btn-poke"><button id="grass" onClick="atkGrass()"><i class="fa-solid fa-leaf"></i><br>Grass</button></div>

          <div class="btn-poke"><button id="elec" onClick="atkElec()"><i class="fa-solid fa-bolt-lightning"></i><br>Electric</button></div>
          <div class="btn-poke"><button id="ice" onClick="atkIce()"><i class="fa-solid fa-snowflake"></i><br>Ice</button></div>
          <div class="btn-poke"><button id="fight" onClick="atkFight()"><i class="fa-solid fa-hand-back-fist"></i><br>Fighting</button></div>
          <div class="btn-poke"><button id="pois" onClick="atkPois()"><i class="fa-solid fa-skull-crossbones"></i><br>Poison</button></div>
          <div class="btn-poke"><button id="grnd" onClick="atkGrnd()"><i class="fa-solid fa-mountain"></i><br>Ground</button></div>
        </div>

        <div class="buttons">
          <div class="btn-poke"><button id="fly" onClick="atkFly()"><i class="fa-solid fa-feather-pointed"></i><br>Flying</button></div>
          <div class="btn-poke"><button id="psych" onClick="atkPsych()"><i class="fa-solid fa-brain"></i><br>Psychic</button></div>
          <div class="btn-poke"><button id="bug" onClick="atkBug()"><i class="fa-solid fa-bug"></i><br>Bug</button></div>
          <div class="btn-poke"><button id="rck" onClick="atkRck()"><i class="fa-solid fa-gem"></i><br>Rock</button></div>
          <div class="btn-poke"><button id="ghst" onClick="atkGhst()"><i class="fa-solid fa-ghost"></i><br>Ghost</button></div>
          <div class="btn-poke"><button id="drag" onClick="atkDrag()"><i class="fa-solid fa-dragon"></i><br>Dragon</button></div>
          <div class="btn-poke"><button id="drk" onClick="atkDrk()"><i class="fa-solid fa-moon"></i><br>Dark</button></div>
          <div class="btn-poke"><button id="steel" onClick="atkSteel()"><i class="fa-solid fa-scissors"></i><br>Steel</button></div>
          <div class="btn-poke"><button id="fairy" onClick="atkFairy()"><i class="fa-solid fa-sun"></i><br>Fairy</button></div>      
      </div>
      
      <div>
        <p id="choice"></p>
        <div class="buttons">
          <div class="btn-poke"><button id="clear" onClick="hideAllTypes()">clear</button></div>
        </div>
      </div>
      
      
      <table id="typechart">
        <tr>
          <th>Super Effective:</th> 
          <th>Not Effective Against:</th>                             
          <th>Don't Attack With:</th>
        </tr>
        <tr>
          <td>
              <div id="sNorm" class="stype norm">Normal</div>
              <div id="sFire" class="stype fire">Fire</div>
              <div id="sWater" class="stype water">Water</div>
              <div id="sGrass" class="stype grass">Grass</div>
              <div id="sElec" class="stype elec">Electric</div>
              <div id="sIce" class="stype ice">Ice</div>
              <div id="sFight" class="stype fight">Fighting</div>
              <div id="sPois" class="stype pois">Poison</div>
              <div id="sGrnd" class="stype grnd">Ground</div>
              <div id="sFly" class="stype fly">Flying</div>
              <div id="sPsych" class="stype psych">Psychic</div>
              <div id="sBug" class="stype bug">Bug</div>
              <div id="sRck" class="stype rock">Rock</div>
              <div id="sGhst" class="stype ghost">Ghost</div>
              <div id="sDrag" class="stype drag">Dragon</div>
              <div id="sDrk" class="stype drk">Dark</div>
              <div id="sSteel" class="stype steel">Steel</div>
              <div id="sFairy" class="stype fairy">Fairy</div>
          </td>          
          <td>
              <div id="wNorm" class="wtype norm">Normal</div>
              <div id="wFire" class="wtype fire">Fire</div>
              <div id="wWater" class="wtype water">Water</div>
              <div id="wGrass" class="wtype grass">Grass</div>
              <div id="wElectric" class="wtype elec">Electric</div>
              <div id="wIce" class="wtype ice">Ice</div>
              <div id="wFight" class="wtype fight">Fighting</div>
              <div id="wPois" class="wtype pois">Poison</div>
              <div id="wGrnd" class="wtype grnd">Ground</div>
              <div id="wFly" class="wtype fly">Flying</div>
              <div id="wPsych" class="wtype psych">Psychic</div>
              <div id="wBug" class="wtype bug">Bug</div>
              <div id="wRck" class="wtype rock">Rock</div>
              <div id="wGhst" class="wtype ghost">Ghost</div>
              <div id="wDrag" class="wtype drag">Dragon</div>
              <div id="wDrk" class="wtype drk">Dark</div>
              <div id="wSteel" class="wtype steel">Steel</div>
              <div id="wFairy" class="wtype fairy">Fairy</div>
          </td>          
          <td>
            <p class="noEffect"></p>
          </td>          
        </tr>
      </table>
    </div>

    <script src="https://kit.fontawesome.com/2dcb72dfc2.js" crossorigin="anonymous"></script>

    <script src="defendtype.js"></script>
  </body>
</html>
