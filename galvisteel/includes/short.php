<?php

add_shortcode('g-prod', 'short_galvisteel');

function short_galvisteel($atributes = [], $content = null)
{ 
    return "
        <script>
            function resizeIframe(obj) {
                obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
            }
        </script>
        <iframe 
            width=\"100%\"
            style=\"border:none;min-height:170vh\"
            src=\"https://brunocriacoes.github.io/galvisteel/\"
            scrolling=\"no\" 
            onload=\"resizeIframe(this)\"
        >
        </iframe>
    ";
}