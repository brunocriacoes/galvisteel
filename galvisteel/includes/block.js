(function (blocks, element) {
    var el = element.createElement;
    var blockStyle = {
        backgroundColor: '#EEE',
        color: 'transparent',
        padding: '48px',
        border: '1px dashed #CCC',
        backgroundImage: "url(https://i.imgur.com/C6GY9hX.png)",
        backgroundSize: "cover",
    };
    var blockStyleFront = {};
    blocks.registerBlockType('fellyph/galvisteel-prod', {
        title: 'Galvisteel',
        icon: 'hammer',
        category: 'layout',
        edit: function () {
            return el(
                'p',
                { style: blockStyle },
                '[g-prod]'
            );
        },
        save: function () {
            return el(
                'p',
                { style: blockStyleFront },
                '[g-prod]'
            );
        },
    });
}(
    window.wp.blocks,
    window.wp.element
));

// dashicons-hammer