function romanMain() {
    var version = '0.82';
    var w = 420;
    var h = 60;
    var s = "";
    s += '<div style="position:relative; width:' + w + 'px; height:' + h + 'px; background-color: #def; border: 2px solid #ddeeff; border-radius: 10px;  margin:auto; display:block;">';
    s += '<div style="margin-top: 10px; font: 16px arial; font-weight: bold; color: black; text-align:center;">';
    s += '<input id="val" size="26" style="font-size: 20px;  line-height: 26px;  text-align:center;" />';
    s += '<input type="submit" value="Convert" style="font-size: 18px;  line-height: 24px" onclick ="get()" />';
    s += '</div>';
    s += '<div id="copyrt" style="font: 10px Arial; color: #6600cc; position:absolute; right:3px; bottom:3px;  text-align:center;">&copy; 2016 MathsIsFun.com  v' + version + '</div>';
    s += '</div>';
    document.write(s);
}
function Level(i, v, x) {
    this.i = i;
    this.v = v;
    this.x = x;
}
var levels = [];
levels[0] = new Level('I','V','X');
levels[1] = new Level('X','L','C');
levels[2] = new Level('C','D','M');
function calcDigit(d, l) {
    if (l > 2) {
        var str = '';
        for (var m = 1; m <= d * Math.pow(10, l - 3); m++)
            str += 'M';
        return str;
    } else if (d == 1)
        return levels[l].i;
    else if (d == 2)
        return levels[l].i + levels[l].i;
    else if (d == 3)
        return levels[l].i + levels[l].i + levels[l].i;
    else if (d == 4)
        return levels[l].i + levels[l].v;
    else if (d == 5)
        return levels[l].v;
    else if (d == 6)
        return levels[l].v + levels[l].i;
    else if (d == 7)
        return levels[l].v + levels[l].i + levels[l].i;
    else if (d == 8)
        return levels[l].v + levels[l].i + levels[l].i + levels[l].i;
    else if (d == 9)
        return levels[l].i + levels[l].x;
    else
        return '';
}
function toRoman(n) {
    var r = '';
    for (var c = 0; c < n.length; c++)
        r += calcDigit(eval(n.charAt(c)), n.length - c - 1);
    return r;
}
function toArabic(num) {
    if (checkRomanInput(num)) {
        var arabic = 0;
        var last_digit = 1000;
        for (var i = 0; i < num.length; i++) {
            var digit = 0;
            if (num.charAt(i) == "I") {
                digit = 1;
            }
            if (num.charAt(i) == "V") {
                digit = 5;
            }
            if (num.charAt(i) == "X") {
                digit = 10;
            }
            if (num.charAt(i) == "L") {
                digit = 50;
            }
            if (num.charAt(i) == "C") {
                digit = 100;
            }
            if (num.charAt(i) == "D") {
                digit = 500;
            }
            if (num.charAt(i) == "M") {
                digit = 1000;
            }
            if (last_digit < digit) {
                arabic -= 2 * last_digit;
            }
            last_digit = digit;
            arabic += last_digit;
        }
        return arabic;
    } else {
        return num;
    }
}
function checkRomanInput(num) {
    for (var k = 0; k < num.length; k++) {
        if (num.charAt(k) != "I" && num.charAt(k) != "V" && num.charAt(k) != "X" && num.charAt(k) != "L" && num.charAt(k) != "C" && num.charAt(k) != "D" && num.charAt(k) != "M") {
            alert("Roman Numerals can only be I, V, X, L, C, D or M");
            return false;
        }
    }
    return true;
}
function isInt(s) {
    return s == parseInt(s, 10);
}
function get() {
    var div = document.getElementById('val');
    var str = div.value;
    str = str.replace(/[, ]+/g, '').trim();
    var mode = 'toRoman';
    if (!isInt(str)) {
        for (var c = 0; c < str.length; c++) {
            var chr = str.charAt(c).toLowerCase();
            if (chr != 'i' && chr != 'v' && chr != 'x' && chr != 'l' && chr != 'c' && chr != 'd' && chr != 'm') {
                alert('Only the letters IVXLCDM, please');
                return false;
            }
        }
        mode = 'fromRoman';
    }
    if (mode == 'toRoman')
        div.value = toRoman(str);
    else
        div.value = toArabic(str);
    return false;
}
