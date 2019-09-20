<?php

if(is_array($_FILES))
{
    $output = '';

    foreach ($_FILES['files']['name'] as $name => $value){
            $diretorio = "imgs/".$value;
            if(move_uploaded_file($_FILES['files']['tmp_name'][$name], $diretorio))
            {
                $output .= '<img src="'.$diretorio.'" class="imageThumb" />';
            }
    }
    echo "imagens processadas <br>".$output; 

}


?>
