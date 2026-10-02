window.onload = function()  {
    var tervehdys;
    var aikaNyt =new Date() ;
    var tunti = aikaNyt.getHours() ;

    if(tunti <12) {
        tervehdys = "Hyvää huomenta" ;
    }
    else if(tunti < 18) {
        tervehdys = "hyvää päivää" ;
    }
    else {
        tervehdys = "hyvää iltaa" ;
    }
    document.getElementById("tervehdys").innerHTML = tervehdys;
}