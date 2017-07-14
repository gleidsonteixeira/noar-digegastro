$(document).ready(function(){

	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	$('#equipe .carousel').carousel({
		indicators: true
	});
	$('#depoimentos .carousel').carousel({
		indicators: true,
		fullWidth: true
	});
	$('.collapsible').collapsible();
	especialidades();
	blog();
	popup();
	itensBariatrica();
	subir();
	admin();

	$("#calculadora button").on("click", function(e){
		e.preventDefault();
		var altura = $("#altura").val();
		var quadrado;
		var peso = $("#peso").val();
		var result;
		var resultFinal;

		if(altura == "" || altura == null){
			Materialize.toast("Digite a sua altura.", 3000);
		}else if (peso == "" || peso == null){
			Materialize.toast("Digite o seu peso.", 3000);
		}else{
			altura = altura.replace( ',', '.' );
			peso = peso.replace( ',', '.' );
			console.log("altura: "+ altura);
			console.log("peso: " + peso);
			quadrado = altura * altura;
			console.log("quadrado: " + quadrado);
			result = " " + peso/quadrado;
			resultFinal = result.substr(1,5);
			console.log("resultado: " + resultFinal);
			//alert("pegou");
			$(".result h1").text(resultFinal);
			$(".result").removeClass("hide");
		}
	});

	/*$("#formForm").on("submit", function(e){
		e.preventDefault();
		//alert("pegando click");
		var nome = $("#nomeForm").val();
		var email = $("#emailForm").val();
		var fone = $("#foneForm").val();
		var especialidadeForm = $("#especialidadeForm").val();
		var primeraVez = $("#firstForm").val();

		console.log(nome, email, fone, especialidadeForm, primeraVez);

		if(nome == "" || nome == null){
			Materialize.toast("Digite seu nome !", 3000);
		}else if(email == "" || email == null){
			Materialize.toast("Digite seu email !", 3000);
		}else if(fone == ""|| fone == null){
			Materialize.toast("Digite seu telefone !", 3000);
		}else if(especialidadeForm == "" || especialidadeForm == null){
			Materialize.toast("Escolha uma especialidade !", 3000);
		}else if (primeraVez == ""|| primeraVez == null){
			Materialize.toast("Escolha uma opção", 3000);
		} else {
			$.ajax({
					url: "mail.php",
					data: {
						"email": email
					},
					cache: false,
					type: "POST",
					dataType: "json",
					success: function (data) {
						if (data.status == 0) {
							swal({
								title: "Cadastrado com sucesso.",
								text: "Você foi cadastrado com sucesso!",
								type: "success"
							}).then(function () {
								location.reload();
							});
						} else {
							swal({
								title: "Houve um erro ao enviar o email",
								text: "houve um problema e não conseguimos enviar seu email. Tente mais tarde.",
								type: "error"
							});
						}
					},
					error: function () {
						swal({
							title: "Houve um erro de comunicação com o servidor",
							text: "houve um problema. Tente novamente mais tarde.",
							type: "error"
						});
					}
		});
		}

	});*/

})
$(window).resize(function(){

})
$(window).scroll(function(){
	subir();
})
$(window).load(function(){
	$("#loading").removeClass("active");
	AOS.init({
		offset: 0
	});
})


function quadrado(e){
	return $(e).height($(e).width());
}

function especialidades(){
	$("#especialidades .item").mouseover(function(){
		var a = $(this).attr("data-orgao");

		$(this).css({"background-color":"#344c5b"})
		$(this).find("h6").css({"color":"#fff"})

		$("#especialidades img.orgao").each(function(){
			var b = $(this).attr("data-orgao");
			if(a == b){
				$(this).css({"opacity":"1","visibility":"visible"});
			}else{
				$(this).css({"opacity":"0","visibility":"hidden"});
			}
		})
	})

	$("#especialidades .item").mouseout(function(){
		$(this).css({"background-color":"#fff"})
		$(this).find("h6").css({"color":"#344c5b"})
	})
}

function blog(){
	var a = $(window).width();

	if(a <= 768){
		$("#blog .row").removeClass("valign-wrapper");
		$("#blog .col:first-child").removeClass("valign");
	}else{
		$("#blog .row").addClass("valign-wrapper");
		$("#blog .col:first-child").addClass("valign");
	}
}

function mudaOpcoes(){
	$(".opcoes .opcao1").mouseover(function(){
		$(".opcoes img").attr("src", "img/especialidades1.png");
		$(".opcoes h4").text("Cardiologia");
	})
	$(".opcoes .opcao2").mouseover(function(){
		$(".opcoes img").attr("src", "img/especialidades2.png");
		$(".opcoes h4").text("Cirurgia do Aparelho Digestivo");
	})
	$(".opcoes .opcao3").mouseover(function(){
		$(".opcoes img").attr("src", "img/especialidades3.png");
		$(".opcoes h4").text("Balão Intragástrico");
	})
	$(".opcoes .opcao4").mouseover(function(){
		$(".opcoes img").attr("src", "img/especialidades4.png");
		$(".opcoes h4").text("Cirurgia Bariátrica");
	})
	$(".opcoes .opcao5").mouseover(function(){
		$(".opcoes img").attr("src", "img/especialidades5.png");
		$(".opcoes h4").text("Nutrição");
	})
	$(".opcoes .opcao6").mouseover(function(){
		$(".opcoes img").attr("src", "img/especialidades6.png");
		$(".opcoes h4").text("Psicologia");
	})
}

function popup(){
	$("#popup h5").click(function(){
		$(this).offsetParent().toggleClass("active");
	})
}

function itensBariatrica(){
	$("#cirurgiabariatrica .item").mouseover(function(){
		$(this).find("p").slideDown(400);
	})
	$("#cirurgiabariatrica .item").mouseleave(function(){
		$(this).find("p").slideUp(400);
	})
}

function subir(){
	var a = window.pageYOffset;
	if(a > 600){
		$(".subir").addClass("active");
	}else{
		$(".subir").removeClass("active");
	}
}

function admin(){
	$("#admin-header .novo").click(function(){
		$("#novoPost").addClass("active");
	})
	$("#novoPost .fechar").click(function(){
		$("#novoPost").removeClass("active");
	})
}