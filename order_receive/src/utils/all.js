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
    let userId = ''
    let state = ''
    // const hostUrl5 = 'http://121.36.231.122:18000/index.php/';// 线上接口   
    // const imgUrl = 'http://121.36.231.122:18000/index.php/'  // 线上图片接口
    
    const imgUrl = 'http://www.bn.com/index.php/'  // 本地图片接口
    const hostUrl5 = 'http://www.bn.com/index.php/';//本地接口

    export default {
      hostUrl5,
      token,
      secret,
      userId,
      imgUrl,
      state
    } 