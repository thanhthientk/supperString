/**
 * Created by thientk on 5/9/16.
 */
module.exports = {
    invert: function(txt) {
        var result = '';
        for (var i = txt.length - 1; i >= 0; i--) {
            result += txt.charAt(i);
        }
        return result;
    },
    
    camelCase: function(txt) {
        var result = '';
        
        if(txt.charAt(0) != ' ') {
            result += txt.charAt(0).toUpperCase();
        }
        
        for (var i = 1; i <= txt.length; i++) {
            if ( txt.charAt(i-1) == ' ' && txt.charAt(i) != ' ' ) {
                result += txt.charAt(i).toUpperCase();
            } else {
                result += txt.charAt(i);
            }
        }
        return result;
    },

    longestWord: function(txt) {
        var txtArr = txt.split(' ');
        
        var position = 0;
        
        for (var i = 0; i <= txtArr.length - 1; i++) {
            if (txtArr[i].length > txtArr[position].length){
                position = i;
            }
        }
        
        return "Tu dai nhat trong chuoi la '" + txtArr[position] + "'";
    }
}