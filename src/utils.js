export function validateForm(obj) {
  let errorMsg = '';
  if (!obj.name) {
    errorMsg = "套票名稱為必填!";
  } else if (!obj.imgUrl) {
    errorMsg = "圖片網址為必填!";
  } else if (!obj.area) {
    errorMsg = "請選擇地區!";
  } else if (obj.price <= 0) {
    errorMsg = "套票金額必須大於 0!";
  } else if (obj.group < 1) {
    errorMsg = "套票組數必須至少為 1!";
  } else if (obj.rate < 1 || obj.rate > 10) {
    errorMsg = "套票星級必須在 1 至 10 之間!";
  } else if (obj.description.length > 100) {
    errorMsg = "套票描述必填，且不能超過 100 字!";
  }
  return errorMsg;
}