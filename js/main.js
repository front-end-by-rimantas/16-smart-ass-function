function generator() {
    var code = text();
    try {
        eval( code );
        console.log('SUCCESS: '+code);
    } catch(err) {
        console.log(code);
        generator();
    }
    return;
}
generator();

function text() {
    var text = '';
    // var symbols = 'qwertyuiopasdfghjklxcvbnm ';
    // var symbols = 'var ';
    var symbols = '123456789+';

    for ( var i=0; i<5; i++ ) {
        text += symbols[ Math.floor(Math.random() * symbols.length) ];
    }

    return text;
}