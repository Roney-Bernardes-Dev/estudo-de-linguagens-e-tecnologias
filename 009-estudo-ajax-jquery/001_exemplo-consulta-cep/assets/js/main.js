function consultarCep() {
        $(".barra-progresso").show();
        var cep = document.getElementById("cep").value;
        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        console.log(url);

        $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //alert(response.logradouro);
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#title_Cep").html("CEP " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();

        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});