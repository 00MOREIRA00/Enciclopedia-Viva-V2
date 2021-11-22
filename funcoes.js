//Função para Introduzir o Portal
function introduzPortal(){
    responsiveVoice.speak("Olá, você acabou de acessar o projeto Enciclopédia Viva, para saber mais do projeto tecle seta para cima, para saber sobre os nossos conteúdos, tecle seta para baixo", "Brazilian Portuguese Female")
}


/*INICIO CONFIG 1*/
		//Função para Verificar Tela - Configurações de Tela 1
		function verificaTecla(){
		    document.addEventListener('keydown', teclaKD);
		}


		//Função com Configurações de Tecla 1: MENU
		function teclaKD(){
			//seta cima = 38; seta baixo = 40

			var tecla = window.event.keyCode;
			if(tecla === 38){
				responsiveVoice.speak('Nosso projeto deu inicio com o intuito de desenvolvimento de aplicação que possa ajudar crianças com necessidades especiais no meio educativo, somos um grupo bem esforçado de desenvolvedores de conteúdo e esperamos poder alcançar o maior número de usuários possiveis e esperamos que nosso trabalho de alguma forma possa ajudar a melhor o seu dia a dia, dando enfase aos estudos que é direito de todos', "Brazilian Portuguese Female");
			}else if(tecla === 40) {
				responsiveVoice.speak('Para acessar as aulas de História tecle a letra A, Para acessar as aulas de Matemática tecle a letra S, Para acessar as aulas de Ciência tecle a letra D, Para acessar as aulas de Português tecle a letra F, Para acessar as aulas de Inglês tecle a letra G, Para acessar as aulas de Geografia tecle a letra H, Para repetir as opções tecle novamente a seta para baixo ', "Brazilian Portuguese Female");
			}
		}
			verificaTecla();
/*FIM CONFIG 1*/





/*INICIO CONFIG 2*/
		//Função para Verificar Tela - Configurações de Tela 2
		function verificaTecla2(){
		    document.addEventListener('keydown', transferenciaKD);
		}


		//Função com Configurações de Tecla 2: LINK PARA PÁGINAS
		function transferenciaKD(){
		//A = 65; S = 83; D = 68; F = 70; G = 71; H = 72;
			var tecla2 = window.event.keyCode;
			if(tecla2 == 65){
				 window.location.href = 'conteudos/historia/menu_historia.html';
				  responsiveVoice.speak('Você escolheu os conteúdos de Historia Clique seta para baixo para saber nossas matérias disponiveis', 'Brazilian Portuguese Female');
			}else if(tecla2 == 83){
				 responsiveVoice.speak('Você escolheu os conteúdos de Matemática', "Brazilian Portuguese Female");
				 window.location.href = 'conteudos/matematica/menu_matematica.html';
			}else if(tecla2 == 68){
				responsiveVoice.speak('Você escolheu os conteúdos de Ciência', "Brazilian Portuguese Female");
				window.location.href = 'conteudos/ciencia/menu_ciencia.html';
			}else if(tecla2 == 70){
				responsiveVoice.speak('Você escolheu os conteúdos de Português', "Brazilian Portuguese Female");
				window.location.href = 'conteudos/portugues/menu_portugues.html';
			}else if(tecla2 == 71){
				responsiveVoice.speak('Você escolheu os conteúdos de Inglês', "Brazilian Portuguese Female");
				window.location.href = 'conteudos/ingles/menu_ingles.html';
			}else if(tecla2 == 72){
				responsiveVoice.speak('Você escolheu os conteúdos de Geografia', "Brazilian Portuguese Female");
				window.location.href = 'conteudos/geografia/menu_geografia.html';
			}
		}
			verificaTecla2()
/*FIM CONFIG 2*/

function historiaPortal(){
    responsiveVoice.speak("Teste de Historia", "Brazilian Portuguese Female")
}