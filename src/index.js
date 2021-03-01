module.exports = function check(str, bracketsConfig){
    str_brackets = str.split("");
    arr=[];
    for(i=0; i < str_brackets.length; i++){
        for(a=0; a < bracketsConfig.length; a++){
              if(str_brackets[i] == bracketsConfig[a][0]){
                if(bracketsConfig[a][0]==bracketsConfig[a][1] && arr[arr.length-1] == a){
                  arr.splice(arr.length-1);
                }
                else  arr.push(a);
              }
              else if(str_brackets[i] == bracketsConfig[a][1]) {
                if(arr[arr.length-1] == a){
                  arr.splice(arr.length-1);
                }
                else  arr.push(a);
              }
        }
    }
     console.log(arr);
    if(arr.length==0) return true;
    else return false;
 }
