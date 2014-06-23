/*
 *  Project: jQuery maskInsputs
 *  Author: Thiago Lima
 *  License: MIT
 */

;(function ($, window, document, undefined) {

	"use strict";

    var pluginName = "maskInputs",
        dataKey = "plugin_" + pluginName;

    var number,
    	date,
    	money,
    	appendUnit,
    	prependUnit,

	    language = {
	    	"pt-br": {
	    		number: {
			    	decimal: ',',
			    	thousands: '.',
			    	precision: 2,
			    	inWords: {
			    		unit: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
			    		dozen: ['',
			    				['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
			    				'vinte',
			    				'trinta',
			    				'quarenta',
			    				'cinquenta',
			    				'sessenta',
			    				'setenta',
			    				'oitenta',
			    				'noventa'
			    		],
			    		hundred: ['',
			    					'cem', 'cento',
			    					'duzentos',
			    					'trezentos',
			    					'quatrocentos',
			    					'quinhentos',
			    					'seiscentos',
			    					'setecentos',
			    					'oitocentos',
			    					'novecentos'
			    		],
			    		thousand: 'mil',
			            million: ['milhão', 'milhões'],
			            billion: ['bilhão', 'bilhões'],
			            trillion: ['trilhão', 'trilhões']
			    	}
	    		},

	    		money: {
	    			name: ['real', 'reais'],
	    			symbol : "R$",
					format : "%s %v",
					decimal : ',',
					thousand : '.',
					precision : 2,
	    		},

		    	date: {
		    		separator: '/',
		    		ext: '%DD de %MM de %YYYY',
		    		months: {
		    			abbr: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
		    			ext: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
		    		}
		    	},

		    	hour: {
		    		format: 24,

		    	}
	    	},

	    	"en": {

	    	}

	    },

	    errorMsg = [
	    	'wrong type: must pass a String or a Number'
	    ],

	    format: {

		    number = function number(value) {
		    	var _value;

		    	if (typeof value === "string") {
		    		value = value.replace(/[ˆ0-9\.,]/g,'');

		    		

		    	} else (typeof value === "Number") {
		    		value = value.toString();
		    	} else {
		    		throw new Error(errorMsg[0])
		    	}

		    	var number =
		    }
	    }

    var Plugin = function (element, options) {

        this.element = element;

        this.options = {
            background: '#000',
            color: '#999'
        };

        this.init(options);
    };

    Plugin.prototype = {
        init: function (options) {
            $.extend(this.options, options);
            this.element.css({
                'color': this.options.color,
                'background-color': this.options.background
            });
        },

        color: function (color) {
            this.options.color = color;
            this.element.css('color', color);
        },

        background: function (color) {
            this.options.background = color;
            this.element.css('background-color', color);
        }
    };

    /*
     * Plugin wrapper, preventing against multiple instantiations and
     * return plugin instance.
     */
    $.fn[pluginName] = function (options) {

        var plugin = this.data(dataKey);

        // has plugin instantiated ?
        if (plugin instanceof Plugin) {
            // if have options arguments, call plugin.init() again
            if (typeof options !== 'undefined') {
                plugin.init(options);
            }
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }

        return plugin;
    };

}(jQuery, window, document));