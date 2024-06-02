function biggestNum(a, b) {
    a=a.replace(/^(--)+/,"").replace(/^(-?)0+/,"$1")
    b=b.replace(/^(--)+/,"").replace(/^(-?)0+/,"$1")
    return a[0]=="-"&&b[0]=="-"?"-"+min(a.slice(1),b.slice(1)):a[0]=="-"?b:b[0]=="-"?a:max(a,b)
    function max(a,b){return a.length>b.length?a:a.length<b.length?b:a>b?a:b}
    function min(a,b){return a.length<b.length?a:a.length>b.length?b:a<b?a:b}
}
