require('angular')
    .module('smartangels.filter.amount_format', [])
    .filter('amountFormat', function(){
        return function(input, decimals, extension, with_prefix) {

            decimals = typeof decimals === 'number' ? decimals : 2;
            extension = void 0 !== extension ? extension : '\u00A0€';
            with_prefix = void 0 !== with_prefix ? with_prefix : false;
            var minus = false;

            if (typeof input === 'undefined') {
                return input;
            }

            input = parseFloat(input);

            if (input !== Math.abs(input)) {
                minus = true;
            }

            var stringInput = input.toFixed(decimals),
                indexOfDot = stringInput.indexOf('.'),
                formatted = stringInput.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function($0, i){

                    if (indexOfDot < 0 || i < indexOfDot) {
                        return $0+'\u00A0';
                    }

                    return $0
                });

            formatted = formatted.replace('.', ',');

            if (extension) {
                formatted = formatted + extension;
            }

            if (minus) {
                formatted = formatted.replace('-', '- ');
            } else if (with_prefix) {
                formatted = '+ ' + formatted;
            }

            return formatted;
        }
    });
