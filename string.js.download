<!--

    String.prototype.trim = function() {
        return (this.replace(/^\s+|\s+$/g, ""));
    }



    String.prototype.ltrim = function() {
        return this.replace(/^\s+/, "");
    }



    String.prototype.rtrim = function() {
        return this.replace(/\s+$/, "");
    }



    function isDomain(str)
    {
        var len = str.length;


        for(var i = 0; i < len; i++) {
            ch = str.charAt(i);
            if ((ch < '0' || ch > '9') && (ch < 'A' || ch > 'Z') && (ch < 'a' || ch > 'z') && ch != '-' && ch != '_' && ch != '\.') {
                return (false);
            }
        }

        return (true);
    }



    function isId(str)
    {
        var len = str.length;


        if (len < 2 || len > 20) {
            return (-1);
        }

        for(var i = 0; i < len; i++) {
            ch = str.charAt(i);

            if ((ch < '0' || ch > '9') && (ch < 'A' || ch > 'Z') && (ch < 'a' || ch > 'z') && ch != '-' && ch != '_' && ch != '.') {
                return (-2);
            }
        }

        return (true);
    }



    function isEmail(str)
    {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test((str));
    }



    function check_digit(e)
    {
        if ((e.keyCode < 48) || (e.keyCode > 57)) {
            e.returnValue = false;
        }
    }



    var Url = {
        // public method for url encoding
        encode : function (string) {
            return escape(this._utf8_encode(string));
        },

        // public method for url decoding
        decode : function (string) {
            return (this._utf8_decode(unescape(string)));
        },

        // private method for UTF-8 encoding
        _utf8_encode : function (string) {
            string = string.replace(/\r\n/g,"\n");
            var utf_text = "";


            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);


                if (c < 128) {
                    utf_text += String.fromCharCode(c);
                }
                else if ((c > 127) && (c < 2048)) {
                    utf_text += String.fromCharCode((c >> 6) | 192);
                    utf_text += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utf_text += String.fromCharCode((c >> 12) | 224);
                    utf_text += String.fromCharCode(((c >> 6) & 63) | 128);
                    utf_text += String.fromCharCode((c & 63) | 128);
                }

            }

            return (utf_text);
        },

        // private method for UTF-8 decoding
        _utf8_decode : function (utf_text) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;


            while (i < utf_text.length) {
                c = utf_text.charCodeAt(i);

                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if ((c > 191) && (c < 224)) {
                    c2 = utf_text.charCodeAt(i+1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utf_text.charCodeAt(i+1);
                    c3 = utf_text.charCodeAt(i+2);

                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));

                    i += 3;
                }

            }

            return (string);
        }
    }


	function containsChars(input,chars)
	{
		for (var inx = 0; inx < input.value.length; inx++) {

			if (chars.indexOf(input.value.charAt(inx)) != -1) {
				return true;
			}
		}

		return false;
	}



    var Base64 = { // private property
        _keyStr_enc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*/=",
        _keyStr_dec: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        // public method for encoding
        encode: function(input) {
            var output = "";
            var chr1,
            chr2,
            chr3,
            enc1,
            enc2,
            enc3,
            enc4;
            var i = 0;
            input = Base64._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this._keyStr_enc.charAt(enc1) + this._keyStr_enc.charAt(enc2) + this._keyStr_enc.charAt(enc3) + this._keyStr_enc.charAt(enc4);
            }
            return output;
        },
        // public method for decoding
        decode: function(input) {
            var output = "";
            var chr1,
            chr2,
            chr3;
            var enc1,
            enc2,
            enc3,
            enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = this._keyStr_dec.indexOf(input.charAt(i++));
                enc2 = this._keyStr_dec.indexOf(input.charAt(i++));
                enc3 = this._keyStr_dec.indexOf(input.charAt(i++));
                enc4 = this._keyStr_dec.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = Base64._utf8_decode(output);
            return output;
        },
        // private method for UTF-8 encoding
        _utf8_encode: function(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },
        // private method for UTF-8 decoding
        _utf8_decode: function(utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    };



    function sprintf()
    {
        if (!arguments || arguments.length < 1 || !RegExp)
        {
    	return;
        }
        var str = arguments[0];
        var re = /([^%]*)%('.|0|\x20)?(-)?(\d+)?(\.\d+)?(%|b|c|d|u|f|o|s|x|X)(.*)/; // '
        var a = b = [], numSubstitutions = 0, numMatches = 0;
        while (a = re.exec(str))
        {
    	var leftpart = a[1], pPad = a[2], pJustify = a[3], pMinLength = a[4];
    	var pPrecision = a[5], pType = a[6], rightPart = a[7];

    	//alert(a + '\n' + [a[0], leftpart, pPad, pJustify, pMinLength, pPrecision);

    	numMatches++;
    	if (pType == '%')
    	{
    	    subst = '%';
    	}
    	else
    	{
    	    numSubstitutions++;
    	    if (numSubstitutions >= arguments.length)
    	    {
    		alert('Error! Not enough function arguments (' + (arguments.length - 1) + ', excluding the string)\nfor the number of substitution parameters in string (' + numSubstitutions + ' so far).');
    	    }
    	    var param = arguments[numSubstitutions];
    	    var pad = '';
    	    if (pPad && pPad.substr(0,1) == "'") pad = leftpart.substr(1,1);
    	    else if (pPad) pad = pPad;
    	    var justifyRight = true;
    	    if (pJustify && pJustify === "-") justifyRight = false;
    	    var minLength = -1;
    	    if (pMinLength) minLength = parseInt(pMinLength);
    	    var precision = -1;
    	    if (pPrecision && pType == 'f') precision = parseInt(pPrecision.substring(1));
    	    var subst = param;
    	    if (pType == 'b') subst = parseInt(param).toString(2);
    	    else if (pType == 'c') subst = String.fromCharCode(parseInt(param));
    	    else if (pType == 'd') subst = parseInt(param) ? parseInt(param) : 0;
    	    else if (pType == 'u') subst = Math.abs(param);
    	    else if (pType == 'f') subst = (precision > -1) ? Math.round(parseFloat(param) * Math.pow(10, precision)) / Math.pow(10, precision): parseFloat(param);
    	    else if (pType == 'o') subst = parseInt(param).toString(8);
    	    else if (pType == 's') subst = param;
    	    else if (pType == 'x') subst = ('' + parseInt(param).toString(16)).toLowerCase();
    	    else if (pType == 'X') subst = ('' + parseInt(param).toString(16)).toUpperCase();
    	}
    	str = leftpart + subst + rightPart;
        }
        return str;
    }



    function printf()
    {
        // http://kevin.vanzonneveld.net
        // +   original by: Ash Searle (http://hexmen.com/blog/)
        // +   improved by: Michael White (http://crestidg.com)
        // -    depends on: sprintf
        // *     example 1: printf("%01.2f", 123.1);
        // *     returns 1: 6

        var ret = sprintf.apply(this, arguments);
        document.write(ret);
        return ret.length;
    }
//-->
