function carregar_fotos(input,galeria) { 
    if (input.files && input.files[0]) {
        for(var i =0; i < input.files.length;i++){
        var leitor = new FileReader();
        leitor.onload = function (event) {
       $($.parseHTML('<img class="imageThumb">')).attr('src', event.target.result).appendTo(galeria);
         
    };
        leitor.readAsDataURL(input.files[i]);
    }
    
    }

} 

function detecta_upload(){
    $('input[type=file]').each(function(index){
        if ($(this).eq(index).val() != ""){
            carregar_fotos(this,'div.galeria');
        
        }
    });
}

$('input[type=file]').on("change", function(){
  detecta_upload();
});


