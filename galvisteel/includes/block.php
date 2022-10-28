<?php

function blockGalvisteel(){
    if (!function_exists('register_block_type')) {
        return;
    }
    wp_register_script(
        'block-galvisteel-prod',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );
    register_block_type('fellyph/galvisteel-prod', array(
        'editor_script' => 'block-galvisteel-prod',
    ));
}
add_action('init', 'blockGalvisteel');