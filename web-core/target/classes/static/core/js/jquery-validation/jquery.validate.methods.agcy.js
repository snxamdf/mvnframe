// 汉字和括号 全角和半角对汉字无影响 最多100
jQuery.validator.addMethod("agcyChineseAndBrackets", function(value, element) {
//	var tel = /^([\u4e00-\u9fa5]+|\（?[\u4e00-\u9fa5]+\）?|[\u4e00-\u9fa5]+\（?[\u4e00-\u9fa5]+\）?){1,100}$/;
	var tel = /^([\u4e00-\u9fa5]+|\（?[\u4e00-\u9fa5]+\）?|[\u4e00-\u9fa5]+\（?[\u4e00-\u9fa5]+\）?)$/;
	return this.optional(element) || (tel.test(value));
}, "您输入的内容有误");

//机构手机号码验证
jQuery.validator.addMethod("agcyMobile", function(value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^1[3|5|7|8]\d{9}$/.test(value));
}, "请正确填写您的手机号码");

//密码，数字，字母，符号
//jQuery.validator.addMethod("agcyPasswd",function(value, element) {
//	return this.optional(element) || /^([a-zA-Z0-9]|[@\-_.,]|){6,18}$/.test(value);
//}, "请输入6-18位字符组成的密码，可由字母、数字或符号(@-_.,)组成");
jQuery.validator.addMethod("agcyPasswd",function(value, element) {
	return this.optional(element) || /^([a-zA-Z0-9]|[@\-_.]|[\u4E00-\u9FA5]){6,18}$/.test(value);
}, "请输入6-16位字符组成的密码，可由字母、数字或符号(@-_.)组成");


//正整数且不得为0
jQuery.validator.addMethod("agcyPositiveInteger",function(value, element) {
	return this.optional(element) || /^[1-9]\d*$/.test(value);
}, "请填写正整数且不得为0");


//组织机构代码证件号
jQuery.validator.addMethod("agcyAgencyNo",function(value, element) {
	return this.optional(element) || /^[A-Z0-9]{8}-[A-Z0-9]{1}$/.test(value);
}, "组织机构代码证号错误");


//累计盈利    /^[1-9]\d{0,5}|[1-9]\d{0,5}\.\d{0,2}$/
jQuery.validator.addMethod("agcyProfit",function(value, element) {
	return this.optional(element) || /^((([1-9]{1}\d{0,5}))|([0]{1}))((\.(\d){1,2}))?$/.test(value);
}, "请填写数字，小数点后最多填写两位");


//社员数量
jQuery.validator.addMethod("agcyMembers",function(value, element) {
	return this.optional(element) || /^\d+$/.test(value);
}, "只能填写数字，社员数量可为0");


//入股金额
jQuery.validator.addMethod("agcyMoney",function(value, element) {
	return this.optional(element) || /^\d+$/.test(value);
}, "只能填写股金系数的倍数，仅新开户可输入为0");






// 汉字字母数字下划线
jQuery.validator.addMethod("string", function(value, element) {
    return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
}, "只能包括汉字、字母、数字和下划线");

// 字母数字下划线
jQuery.validator.addMethod("character",function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9_]*$/.test(value);
}, "请输入字母、数字或下划线");

// 字母数字
jQuery.validator.addMethod("charnum", function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, "只能包括字母和数字");

// 汉字
jQuery.validator.addMethod("chinese", function(value, element) {
	var tel = /^[\u4e00-\u9fa5]+$/;
	return this.optional(element) || (tel.test(value));
}, "请输入汉字");

//汉字+括号
jQuery.validator.addMethod("chineseAndBrackets", function(value, element) {
	var tel = /^[\u4e00-\u9fa5]+|\(?[\u4e00-\u9fa5]+\)?|[\u4e00-\u9fa5]+\(?[\u4e00-\u9fa5]+\)?$/;
	return this.optional(element) || (tel.test(value));
}, "请输入汉字");

// 手机号码验证
jQuery.validator.addMethod("mobile", function(value, element) {
    var length = value.length;
    return this.optional(element) || (length == 11 && /^1[3|5|8]\d{9}$/.test(value));
}, "请正确填写您的手机号码");

// 电话号码验证：电话号码格式010-12345678
jQuery.validator.addMethod("tel", function(value, element) {
    var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的电话号码");

// 联系电话(手机/电话皆可)验证
jQuery.validator.addMethod("phone", function(value, element) {     
	var tel = /(^0[1-9]{1}\d{9,10}$)|(^1[3,5,8]\d{9}$)/g;     
	return this.optional(element) || (tel.test(value));     
}, "固话格式：区号(3-4位)号码(7-9位),手机格式：13,15,18号段");

// 邮政编码验证
jQuery.validator.addMethod("postcode", function(value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的邮政编码");

// IP
jQuery.validator.addMethod("ip", function(value, element) {
	return this.optional(element) || (/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(value) && (RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256));   
}, "请输入合法的IP地址");

//QQ号码验证
jQuery.validator.addMethod("qq", function(value, element) {
    var tel = /^[1-9][0-9]{4,}$/;
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的QQ号码");
 
// 校验身份证号
jQuery.validator.addMethod("idcard",function(value, element) {
	return this.optional(element) || checkIdcard(value);
}, "请输入正确的身份证号码(15-18位)");

// 密码，符号包括：@-_.
jQuery.validator.addMethod("passwd",function(value, element) {
	return this.optional(element) || /^([a-zA-Z0-9]|[@\-_.]|[\u4E00-\u9FA5]){6,16}$/.test(value);
}, "请输入6-16位字符组成的密码，可由字母、数字或符号(@-_.)组成");

// 用户名
jQuery.validator.addMethod("username",function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9][a-zA-Z0-9_]{2,19}$/.test(value);
}, "3-20位字母或数字开头，允许字母、数字或下划线");

// 登录名校验，符号包括：@-_.
jQuery.validator.addMethod("account",function(value, element) {
	return this.optional(element) || (/^([a-zA-Z0-9]|[@\-_.]|[\u4E00-\u9FA5]){3,20}$/.test(value) && !/^[0-9]*$/.test(value));
}, "请输入3-20位，可由字母、数字或符号(@-_.)组成，不可为纯数字");

// 真实姓名验证
jQuery.validator.addMethod("realname", function(value, element) {
    return this.optional(element) || /^[\u4e00-\u9fa5]{2,30}$/.test(value);
}, "姓名只能为2-30个汉字");

// 金额
jQuery.validator.addMethod("amount", function(value, element) { 
	return this.optional(element) || /^\d{1,8}(\.\d{1,2})?$/.test(value);     
}, "请输入正确格式的数字，整数不超过8位，小数不超过2位，如12345678.12"); 

// 再次输入不同值
jQuery.validator.addMethod("noEqualTo",function(value, element, param) {
	return value != $(param).val();
}, "请再次输入不同的值");

//统一社会信用代码
//18位编码，第3-8位编码必须为数字，其他位编码由数字或字母构成，不区分大小写
//ab123456abcdefghij
jQuery.validator.addMethod("agcyUnifiedCode",function(value, element) {
	return this.optional(element) || /^[a-zA-Z0-9]{2}[0-9]{6}[a-zA-Z0-9]{10}$/.test(value);
}, "请输入正确的编码信息");

// 验证身份证函数
function checkIdcard(idcard){
	idcard = idcard.toString();
	//var Errors=new Array("验证通过!","身份证号码位数不对!","身份证号码出生日期超出范围或含有非法字符!","身份证号码校验错误!","身份证地区非法!");
	var Errors=new Array(true,false,false,false,false);
	var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
	var idcard,Y,JYM;
	var S,M;
	var idcard_array = new Array();
	idcard_array = idcard.split("");
	//地区检验
	if(area[parseInt(idcard.substr(0,2))]==null) return Errors[4];
	//身份号码位数及格式检验
	switch(idcard.length){
		case 15:
			if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
			} else {
				ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
			}
			if(ereg.test(idcard)) return Errors[0];
			else return Errors[2];
			break;
		case 18:
			//18 位身份号码检测
			//出生日期的合法性检查
			//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
			//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
			if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
			} else {
				ereg=/^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
			}
			if(ereg.test(idcard)) {//测试出生日期的合法性
				//计算校验位
				S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
					+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
					+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
					+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
					+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
					+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
					+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
					+ parseInt(idcard_array[7]) * 1
					+ parseInt(idcard_array[8]) * 6
					+ parseInt(idcard_array[9]) * 3 ;
				Y = S % 11;
				M = "F";
				JYM = "10X98765432";
				M = JYM.substr(Y,1);//判断校验位
				if(M == idcard_array[17]) return Errors[0]; //检测ID的校验位
				else return Errors[3];
			}
			else return Errors[2];
			break;
		default:
			return Errors[1];
			break;
	}
}