var s,e,n,d,m,o,r,y,send,more,money;

function verifySMM(){
    document.getElementById("money").innerHTML = "MONEY:";
    document.getElementById("message1").innerHTML = " ";
    sendInput = document.getElementById("send").value;
    moreInput = document.getElementById("more").value;
    if(sendInput.toString().charAt(1) != moreInput.toString().charAt(3)){
        document.getElementById("message1").innerHTML = "Letras iguais devem ter valores iguais";
        return null;
    }
    s = sendInput.toString().charAt(0);
    e = sendInput.toString().charAt(1);
    n = sendInput.toString().charAt(2);
    d = sendInput.toString().charAt(3);
    m = moreInput.toString().charAt(0);
    o = moreInput.toString().charAt(1);
    r = moreInput.toString().charAt(2);
    y = parseInt(d) + parseInt(e);
    if(y > 9){
        y = y.toString().charAt(1);
    }
    money = (m*10000) + (o*1000) + (n*100) + (e*10) + (y*1);
    if (!verifyEqualNumbers(s, e, n, d, m, o, r, y)){
        if (parseInt(sendInput) + parseInt(moreInput) == money){
            document.getElementById("money").innerHTML = "MONEY:"+money;
            document.getElementById("message1").innerHTML = "Correto";
        }else{
            document.getElementById("message1").innerHTML = "Send ou more incorreto";
        }
    }else{
        document.getElementById("message1").innerHTML = "Letras devem ter valores distintos";
    }
}

function resultSMM(){
    document.getElementById("money").innerHTML = "MONEY:";
    document.getElementById("message1").innerHTML = " ";
    m = 1;
    for (s = 1; s < 10; s++){
        for (e = 0; e < 10; e++){
            for (n = 0; n < 10; n++){
                for (d = 0; d < 10; d++){
                    for (o = 0; o < 10; o++){
                        for (r = 0; r < 10; r++){
                            for (y = 0; y < 10; y++){
                                send = (s*1000) + (e*100) + (n*10) + (d*1);
                                more = (m*1000) + (o*100) + (r*10) + (e*1);
                                money = (m*10000) + (o*1000) + (n*100) + (e*10) + (y*1);

                                if (!verifyEqualNumbers(s, e, n, d, m, o, r, y))
                                    if (send + more == money){
                                        document.getElementById("send").value = send;
                                        document.getElementById("more").value = more;
                                        document.getElementById("money").innerHTML = "MONEY:"+money;
                                    }
                            }
                        }
                    }
                }
            }
        }
    }
}

function verifyEqualNumbers(s, e, n, d, m, o, r, y){
    if (s == e || s == n || s == d || s == m || s == o || s == r || s == y ||
        e == n || e == d || e == m || e == o || e == r || e == y ||
        n == d || n == m || n == o || n == r || n == y ||
        d == m || d == o || d == r || d == y ||
        m == o || m == r || m == y ||
        o == r || o == y){

            return true;                
        }
}