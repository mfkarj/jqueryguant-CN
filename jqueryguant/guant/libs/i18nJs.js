/*
 Copyright (c) 2012-2017 Open Lab
 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


function dateToRelative(localTime){
  var diff=new Date().getTime()-localTime;
  var ret="";

  var min=60000;
  var hour=3600000;
  var day=86400000;
  var wee=604800000;
  var mon=2629800000;
  var yea=31557600000;

  if (diff<-yea*2)
    ret ="in ## years".replace("##",(-diff/yea).toFixed(0));

  else if (diff<-mon*9)
    ret ="in ## months".replace("##",(-diff/mon).toFixed(0));

  else if (diff<-wee*5)
    ret ="in ## weeks".replace("##",(-diff/wee).toFixed(0));

  else if (diff<-day*2)
    ret ="in ## days".replace("##",(-diff/day).toFixed(0));

  else if (diff<-hour)
    ret ="in ## hours".replace("##",(-diff/hour).toFixed(0));

  else if (diff<-min*35)
    ret ="in about one hour";

  else if (diff<-min*25)
    ret ="in about half hour";

  else if (diff<-min*10)
    ret ="in some minutes";

  else if (diff<-min*2)
    ret ="in few minutes";

  else if (diff<=min)
    ret ="just now";

  else if (diff<=min*5)
    ret ="few minutes ago";

  else if (diff<=min*15)
    ret ="some minutes ago";

  else if (diff<=min*35)
    ret ="about half hour ago";

  else if (diff<=min*75)
    ret ="about an hour ago";

  else if (diff<=hour*5)
    ret ="few hours ago";

  else if (diff<=hour*24)
    ret ="## hours ago".replace("##",(diff/hour).toFixed(0));

  else if (diff<=day*7)
    ret ="## days ago".replace("##",(diff/day).toFixed(0));

  else if (diff<=wee*5)
    ret ="## weeks ago".replace("##",(diff/wee).toFixed(0));

  else if (diff<=mon*12)
    ret ="## months ago".replace("##",(diff/mon).toFixed(0));

  else
    ret ="## years ago".replace("##",(diff/yea).toFixed(0));

  return ret;
}

//override date format i18n

Date.monthNames = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
// Month abbreviations. Change this for local month names
Date.monthAbbreviations = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
// Full day names. Change this for local month names
Date.dayNames =["日","一","二","三","四","五","六"];
// Day abbreviations. Change this for local month names
Date.dayAbbreviations = ["日","一","二","三","四","五","六"];
// Used for parsing ambiguous dates like 1/2/2000 - default to preferring 'American' format meaning Jan 2.
// Set to false to prefer 'European' format meaning Feb 1
Date.preferAmericanFormat = false;

Date.firstDayOfWeek =0;
Date.defaultFormat = "yyyy/MM/dd";
Date.masks = {
  fullDate:       "yyyy, MMMM d, EEEE",
  shortTime:      "h:mm a"
};
Date.today="Today";

Number.decimalSeparator = ".";
Number.groupingSeparator = ",";
Number.minusSign = "-";
Number.currencyFormat = "###,##0.00";



var millisInWorkingDay =28800000;
var workingDaysPerWeek =5;

function isHoliday(date) {
  var friIsHoly =false;
  var satIsHoly =true;
  var sunIsHoly =true;

  var pad = function (val) {
    val = "0" + val;
    return val.substr(val.length - 2);
  };

  var holidays = "##";

  var ymd = "#" + date.getFullYear() + "_" + pad(date.getMonth() + 1) + "_" + pad(date.getDate()) + "#";
  var md = "#" + pad(date.getMonth() + 1) + "_" + pad(date.getDate()) + "#";
  var day = date.getDay();

  return  (day == 5 && friIsHoly) || (day == 6 && satIsHoly) || (day == 0 && sunIsHoly) || holidays.indexOf(ymd) > -1 || holidays.indexOf(md) > -1;
}



var i18n = {
  YES:                 "确定",
  NO:                  "取消",
  FLD_CONFIRM_DELETE:  "确认删除?",
  INVALID_DATA:        "录入的时间格式无效.",
  ERROR_ON_FIELD:      "字段上有错误，请检查",
  OUT_OF_BOUDARIES:      "超出字段最大允许值:",
  CLOSE_ALL_CONTAINERS:"确认关闭所有?",
  DO_YOU_CONFIRM:      "你确认了吗？",
  ERR_FIELD_MAX_SIZE_EXCEEDED:      "超出最大可录入数量",
  WEEK_SHORT:      "累计周：",

  FILE_TYPE_NOT_ALLOWED:"文件类型不允许.",
  FILE_UPLOAD_COMPLETED:"文件上传完成.",
  UPLOAD_MAX_SIZE_EXCEEDED:"文件太大，超过最大值",
  ERROR_UPLOADING:"上传错误",
  UPLOAD_ABORTED:"上传中断",
  DROP_HERE:"删除文件",

  FORM_IS_CHANGED:     "页面上的内容没有保存!",

  PIN_THIS_MENU: "PIN_THIS_MENU",
  UNPIN_THIS_MENU: "UNPIN_THIS_MENU",
  OPEN_THIS_MENU: "OPEN_THIS_MENU",
  CLOSE_THIS_MENU: "CLOSE_THIS_MENU",
  PROCEED: "Proceed?",

  PREV: "上一步",
  NEXT: "下一步",
  HINT_SKIP: "好的,关闭提示。",

  WANT_TO_SAVE_FILTER: "保存这个过滤器",
  NEW_FILTER_NAME: "新过滤器的名称",
  SAVE: "保存",
  DELETE: "删除",
  HINT_SKIP: "好的,关闭提示。",

  COMBO_NO_VALUES: "没有可用的值?",

  FILTER_UPDATED:"过滤器更新。",
  FILTER_SAVED:"过滤器正确保存。"

};


