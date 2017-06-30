require('angular')
    .module('smartangels.filter.phone_format', [])
    .filter('phoneFormat', function(){
        return function (tel) {
            if (!tel) {
                return;
            }

            var country = tel.slice(0, 3);

            if (country !== '+33') {
                return tel;
            }

            var base = tel.slice(3, 4);
            var number = tel.slice(3, tel.length).match(/.{2}/g).join(' ');

            return country + ' ' + base + ' ' + number;
        };
    });
