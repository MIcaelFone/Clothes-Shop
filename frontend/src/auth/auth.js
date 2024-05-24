const authorization=()=>{
    var token = localStorage.getItem("token");
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    var json=JSON.parse(jsonPayload)
    const exp_time=json.exp/1000
    console.log(exp_time)
    
    

}
   