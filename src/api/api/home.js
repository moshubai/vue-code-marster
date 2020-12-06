const homeService = (ajaxinstance) => {
    const homePage = {}
  

    homePage.postAddBankCard = (postData) => {
      return ajaxinstance.post('/credit/web/super/add-card', postData)
    }
    // 设置主卡
    homePage.postSetMainCard = (postData) => {
      return ajaxinstance.post('/credit/web/super-loan/set-main-card', postData)
    }
    return homePage
  }
  
  export default homeService