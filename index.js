document.addEventListener("DOMContentLoaded", function() {
	

	var valider = document.getElementById('valider');
	valider.addEventListener('click', envoyer);

	function envoyer()
	{
		
		if(testChampsRenseignes() /**&& testValiditeDate()**/){
			afficheRecapitulatif();
		}
	}

	function testChampsRenseignes(){

		

		var nom = document.getElementById('nom');

		if(nom.value == ""){
			alert("Le nom n'a pas été renseignée.");
			return false;
		}

		var prenom = document.querySelectorAll('.prenom');
		if(prenom[0].value == ""){
			alert("Le prenom n'a pas été renseignée.");
			return false;
		}

		var date_naissance = document.getElementsByName('date_naissance')[0];

		if(date_naissance.value == "" || date_naissance.value == "JJ/MM/AAAA"){
			alert("La date n'est pas valide.");
			return false;
		}

		var telephone = document.getElementById('telephone');

		if(telephone.value ==""){
			alert("Le numero de telephone n'a pas été renseignée.");
			return false;

		}

		var selected = document.getElementsByTagName('select')[0];

		if(selected.value == ""){
			alert("Le diplome précédent n'a pas été renseignée.");
			return false;
		}


		var _langues = document.querySelectorAll('[name=langage]');
		var lg = _langues.length;
		var optionCochee = false;
		for(var i = 0; i < lg; i++){
			if(_langues[i].checked){
				
				optionCochee = true;
			}
		}
		if(optionCochee == false){
			alert("Aucune option n'a été renseignée.");
			return false;
		}

		
		return true;

	}



	/**function testValiditeDate(){
		
		var date_naissance = document.getElementsByName('date_naissance').value[0];

		
		var mesElementsDeDate = date_naissance.split('/');

		if(mesElementsDeDate.length != 3){	
			alert("La date n'est pas au format attendu.");
			return false;
		}
		if(mesElementsDeDate[0].length != 2 || isNaN(mesElementsDeDate[0])){
			alert("La date n'est pas au format attendu.");
			return false;
		}
		if(mesElementsDeDate[1].length != 2 || isNaN(mesElementsDeDate[1])){
			alert("La date n'est pas au format attendu.");
			return false;
		}
		if(mesElementsDeDate[2].length != 4 || isNaN(mesElementsDeDate[2])){
			alert("La date n'est pas au format attendu.");
			return false;
		}

		
		return true;
	}**/





	function afficheRecapitulatif(){

		var nom = document.getElementById('nom');		
		var nomValeur = nom.value;							
		var ciblenom = document.getElementById('recap_nom');			
		ciblenom.innerHTML = nomValeur;	


		var prenom = document.querySelectorAll('prenom');		
		var prenomValeur = prenom.value;							
		var cibleprenom= document.getElementById('recap_prenom');			
		cibleprenom.innerHTML = prenomValeur;	


		var telephone = document.getElementById('telephone');
		var telephoneValeur = telephone.value;
		var cibletelephone = document.getElementById('recap_tel');
		cibletelephone.innerHTML = telephoneValeur;



		var date_naissance = document.getElementsByName('date_naissance');		
		var maDateValeur = date_naissance.value;							
		var cibleDate = document.getElementById('recap_date');			
		cibleDate.innerHTML = maDateValeur;


		var selected = document.getElementsByTagName('selected');
		var selectedValeur = selected.value;
		var cibleselected = document.getElementById('recap_diplome');
		cibleselected.innerHTML = selectedValeur;


		var _langues = document.querySelectorAll('[name=langage]');
		var tailleCollectionOption = _langues.length;
		var optionCochee = false;
		for(var i = 0; i < tailleCollectionOption; i++){
			if(_langues[i].checked){
				var monOption = _langues[i];
				var monOptionValeur = monOption.value;
				var cibleOption = document.getElementById('recap_langages');
				cibleOption.innerHTML = monOptionValeur;
			}
		}
	}   
});



































































