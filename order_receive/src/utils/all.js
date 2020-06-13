if (JSON.parse(localStorage.getItem("loginStatus"))) {
        token =  JSON.parse(
            localStorage.getItem("loginStatus")
          ).token;
          mid =  JSON.parse(
            localStorage.getItem("loginStatus")
          ).uid;
      }
      if(localStorage.getItem('defaultPro')){
        default_product = JSON.parse(localStorage.getItem('defaultPro'));
      }
    let token=''
    let secret = ''
    let userId = ""
    const hostUrl5 = 'http://121.36.231.122:18000/index.php/';// 线上接口   
      // const hostUrl5 = 'http://www.bn.com/index.php/';//接口
    export default {
      hostUrl5,
      token,
      secret,
      userId
    } 