$(document).ready( function() {
	// on utilise cette varibale pour changer de menu
	var vege = false;
	$("#vegOn").click( function () {
		if(vege == false) {
			// on utilise la class .fish et on cahche les parents.
			$(".fish").parent().parent().hide();
			
			$(".hamburger").html("<li class='portobello'><em>Portobello Mushroom</em></li>");// on change le mot hamburger par Portobello Mushroom
			$(".meat").hide();// on cache toute les li qui ont la classe meat
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>");// on ajoute Tofu  a la place de la classe meat
		   	$(".tofu").parent().parent().addClass("veg_leaf");// on ajoute la calsse qui contient l'image de la feuille verte
// on change la varibale vege vers true pour travailler l'autre boutton de retour apres vers le menu principale
			vege = true;
		}
		
	});
	$("#restoreMe").click( function () {
		// si la variable vege est sur ture on peut retourner au menu principale apres avoir executer cette partie de code
		if(vege == true) {


			$(".veg_leaf").removeClass();// on peut enlever la classe qui contient l'image de la feuille 
			$(".fish").parent().parent().show();// on reaffiche les li qui contiennent la classe fish et leurs parents
			$(".portobello").html("<li class='hamburger'>hamburger</li>");// on remet la li avec la classe hamburger pour afficher le hamburger
			$(".tofu").remove();// on supprime la li qui contient la classe tofu pour enlever le mot Tofu
			$(".meat").show();// on reaffiche les li qui ont la classe meat
			
			// a la fin on change la varibale vege a false 
			vege = false;
            
		}
		
	});
	
	
});










