import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiTy = 'https://siyan.tech/ty-api'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiTy + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiTy + "/api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiTy + "/api/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiTy + '/api/home/hostGoodsList');
const getHomeDisvocerList = (params) => wxRequest(params, apiTy + '/api/mall/discoverList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiTy + '/api/mall/searchGoodsList');

//查询课程信息
const classDetail = (params) => wxRequest(params, apiTy + '/getClass');
//商品加入购物车
const addCart = (params) => wxRequest(params, apiTy + '/api/mall/goodsCart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiTy + '/api/mall/goodsCart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiTy + '/api/mall/goodsCart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiTy + '/api/mall/goodsCart/checkAll');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiTy + '/api/mall/goodsCart/delete');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiTy + '/api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/commitData');

//支付前生成订单
const saveByCart = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/saveByCart');

//支付统一下单
const toPay = (params) => wxRequest(params, apiTy + '/wepay/toPay');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiTy + '/user/goodsFavorite');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiTy + '/user/goodsFavoriteDelete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiTy + '/user/goodsIsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiTy + '/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiTy + '/api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiTy + '/api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiTy + '/api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiTy + '/api/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiTy + '/api/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiTy + '/api/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiTy + '/api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiTy + '/api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiTy + '/api/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiTy + '/api/sms/send');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiTy + '/api/userCenter/getUserInfo');

//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiTy + '/api/receiverInfo/list');

//保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiTy + '/api/receiverInfo/saveOrUpdate');

//用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiTy + '/api/receiverInfo/receiverInfoById');

//根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiTy + '/api/receiverInfo/operation');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiTy + '/api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiTy + '/api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiTy + '/api/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/getMyOrderList');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/getMyOrderSize');

//根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/getOrderDetail');

//根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/getPayOrderDetail');

//根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/opt');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiTy + '/api/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiTy + '/api/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiTy + '/api/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiTy + '/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiTy + '/api/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
const getAdList = (params) => wxRequest(params, apiTy + '/api/adverts/list');


// 查询新闻列表 
const getNewsList = (params) => wxRequest(params, apiTy + '/getNews');


// 查询案例列表 
const getAnliList = (params) => wxRequest(params, apiTy + '/getAnlis');

// 评论案例 
const reviewAnli = (params) => wxRequest(params, apiTy + '/reviewAnli');

const likeAnli = (params) => wxRequest(params, apiTy + '/likeAnli');

// 老师、学生列表
const getTeahcer = (params) => wxRequest(params, apiTy + '/getTeachers');
const getStudent = (params) => wxRequest(params, apiTy + '/getStudents');

export default {
  hostGoodsList,
  getDiscoverList,
  getHomeDisvocerList,
  getGoodsList,
  classDetail,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  addCart,
  cartList,
  cartCheck,
  cartCheckAll,
  cartDel,
  cartUpdateNum,
  preOrder,
  refundApply,
  pointInfo,
  browseInfo,
  addBrowser,
  delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,
  sendRandCode,
  getUserInfo,
  getUserAddress,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  getMyOrderList,
  saveByCart,
  toPay,
  rootCtegoryList,
  childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo,
  goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,
  getPayOrderDetail,
  getAdList,
  getSignDate,
  getNewsList,
  getAnliList,
  reviewAnli,
  likeAnli,
  getTeahcer,
  getStudent
}