$(document).ready(function(){
	
var chosenCharacter;
var isCharacterChosen = false;
var isEnemyChosen = false;
var chosenEnemy;


var isGameOver = false;


var patamon = {name: "Patamon",health: 100, attack: 200, counter: 150};
var gatomon = {name: "Gatomon",health: 150, attack: 220, counter: 175};
var etemon = {name: "Etemon",health: 175, attack: 230, counter: 180};
var puppetmon = {name: "Puppetmon",health: 200, attack: 240, counter: 190};

$("#character-chosen_div").on("click", function(){
    	if(isCharacterChosen === false){
    		isCharacterChosen = true;
	    	chosenCharacter = eval(this.id);
	    	$("#" + chosenCharacter.name).appendTo("#chosen_character"); 
	    	for(var i = 0; i < characters.length; i++){
	    		if(characters[i] != chosenCharacter){
	    			enemies.push(characters[i]);
	    			$("#" + characters[i].name).appendTo("#enemies");
	    			
	    		}
	    	}
    	}
    });

$(document).on('click','.enemies_div',function() {
       if(isEnemyChosen === false){
       		isEnemyChosen = true;
       		chosenEnemy = eval(this.id);
       		$("#" + chosenEnemy.name).appendTo("#defender");
       		$("#btn").css("display", "block");
       }
	});

$(".patamon").append("<p>"+patamon.name+"</p>");
$(".patamon").append("<p>"+"Health"+patamon.health+"</p>");

$(".gatomon").append("<p>"+gatomon.name+"</p>");
$(".gatomon").append("<p>"+"Health"+gatomon.health+"</p>");

$(".etemon").append("<p>"+etemon.name+"</p>");
$(".etemon").append("<p>"+"Health"+etemon.health+"</p>");

$(".puppetmon").append("<p>"+puppetmon.name+"</p>");
$(".puppetmon").append("<p>"+"Health"+puppetmon.health+"</p>");

$(".gatomon2").append("<p>"+gatomon.name+"</p>");
$(".gatomon2").append("<p>"+"Health"+gatomon.health+"</p>");

$(".etemon2").append("<p>"+gatomon.name+"</p>");
$(".etemon2").append("<p>"+"Health"+gatomon.health+"</p>");

$(".patamon2").append("<p>"+gatomon.name+"</p>");
$(".patamon2").append("<p>"+"Health"+gatomon.health+"</p>");

$(".puppetmon2").append("<p>"+gatomon.name+"</p>");
$(".puppetmon2").append("<p>"+"Health"+gatomon.health+"</p>");



//If Patamon is selected
$(".patamon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".gatomon").remove();
});

$(".patamon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".etemon").remove();
});

$(".patamon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".puppetmon").remove();
});

//Enemies of Patamon
$(".patamon").on("click", function(){
	$(".gatomon2").hide().fadeIn("slow"); 
});

$(".patamon").on("click", function(){
	$(".etemon2").hide().fadeIn("slow"); 
});

$(".patamon").on("click", function(){
	$(".puppetmon2").hide().fadeIn("slow"); 
});

//defenders
$(".gatomon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".etemon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".puppetmon2").on("click", function(){
	$(this).appendTo($("#defender"))
});


//If Gatomon is selected
$(".gatomon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".patamon").remove();
});

$(".gatomon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".etemon").remove();
});

$(".gatomon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".puppetmon").remove();
});

//Enemies of Gatomon
$(".gatomon").on("click", function(){
	$(".patamon2").hide().fadeIn("slow"); 
});

$(".gatomon").on("click", function(){
	$(".etemon2").hide().fadeIn("slow"); 
});

$(".gatomon").on("click", function(){
	$(".puppetmon2").hide().fadeIn("slow"); 
});

//defenders
$(".patamon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".etemon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".puppetmon2").on("click", function(){
	$(this).appendTo($("#defender"))
});



//If Etemon is selected
$(".etemon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".patamon").remove();
});

$(".etemon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".gatomon").remove();
});

$(".etemon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".puppetmon").remove();
});

//Enemies of Gatomon
$(".etemon").on("click", function(){
	$(".patamon2").hide().fadeIn("slow"); 
});

$(".etemon").on("click", function(){
	$(".gatomon2").hide().fadeIn("slow"); 
});

$(".etemon").on("click", function(){
	$(".puppetmon2").hide().fadeIn("slow"); 
});

//defenders
$(".patamon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".gatomon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".puppetmon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

//If Puppetmon is selected
$(".puppetmon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".patamon").remove();
});

$(".puppetmon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".gatomon").remove();
});

$(".puppetmon").on("click", function(){
	$(this).appendTo($("#character-chosen"))
	&& $(".etemon").remove();
});

//Enemies of Puppetmon
$(".puppetmon").on("click", function(){
	$(".patamon2").hide().fadeIn("slow"); 
});

$(".puppetmon").on("click", function(){
	$(".gatomon2").hide().fadeIn("slow"); 
});

$(".puppetmon").on("click", function(){
	$("etemon2").hide().fadeIn("slow"); 
});

//defenders
$(".patamon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$(".gatomon2").on("click", function(){
	$(this).appendTo($("#defender"))
});

$("etemon2").on("click", function(){
	$(this).appendTo($("#defender"))
});


$("#btn").on("click", function() {
if (isGameOver === false){
	chosenCharacter.health -= chosenEnemy.attack;
	chosenCharacter.health -= chosenEnemy.attack;
	$("#" + chosenCharacter.name + "HP").append("HP: " + chosenCharacter.health);
		$("#" + chosenEnemy.name + "HP").append("HP: " + chosenEnemy.health);

}
        //Message after attack reads...
        $("#attack-text").text("You attacked " + chosenEnemy.name + " for " + chosenCharacter.attack + 
			"  " + chosenEnemy.name + " attacked you back for " + chosenCharacter.counter + " damage! "
			+ "Click the attack button again to attack " + chosenEnemy.name + "!");
		});
      });





