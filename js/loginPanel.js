$(document).ready(function () {
    // section>nav
    $(".navBut").css({"color":"black","background-color":"rgba(76, 76, 76, 0.11)"});
    $('section>nav input[name="navLogBut"]').css({"color":"white","background-color":"blue"});
    $('section>nav input').on("click",function () {
        $(".navBut").css({"color":"black","background-color":"rgba(76, 76, 76, 0.11)"});
        $(this).css({"color":"white","background-color":"blue"});
    });

    // #mainBody
        // #logForm
            //登陆检查
    $("#logBut").on("click",function () {
        if($("#logUser").val()===''){
        }
        else
            $(window).attr('location','mainPanel.html');
    });

        //#regForm
    let regInputArrays=[
        {id: "#regUser",name: "用户名",minLength:4},
        {id: "#regPsw",name: "密码",minLength: 6},
        {id: "#regPswCfm",name: "确认密码",minLength:6},
        {id: "#regTel",name:"手机号码",minLength:11},
        {id: "#regCode",name: "验证码",minLength:6}
    ];
    $("#regBut").on("click",function () {
        let bIsInspectPass=true;
        for (let i in regInputArrays){
            if (!regInputArrays.hasOwnProperty(i)){
                continue;
            }
            bIsInspectPass=regInputEmpty(regInputArrays[i]);
            if(!bIsInspectPass){
                break;
            }
        }
        if (bIsInspectPass){
            alert($(regInputArrays[1].id).val());
        }
    });
    $("#regTelSdCd").click(function () {
        if (regInputEmpty(regInputArrays[3]))
            sendTelCode($(this));
    });

        //#resForm

});

//调用函数
    //读取用户数据

    //写入用户数据

    //查找用户数据

    //修改用户数据

    //发送验证码
    function sendTelCode(button) {
        let time=60;
        button.val("已发送"+time+"s");
        let iCount=setInterval(function () {
            time--;
            button.val("已发送"+time+"s");
            if (time<0){
                clearInterval(iCount);
                button.val("发送验证码");
            }
        },50);
    }
    //验证非空
    function checkNull(data) {
        let reg=/^\s*$/;
        return(reg.test(data));
    }
    //验证长度
    function checkLength(data,min) {
        return(data.length-min<0);
    }
    //验证格式
    function checkSuit(data,name) {
        let us=/^[a-zA-Z](\w|[.]){3,19}$/;
        let psw=/^.{6,18}$/;
        let tel=/^[1]\d{10}$/;
        let code=/^\d{6}$/;
        let isSuit=false;
        switch (name) {
            case "用户名":
                isSuit=us.test(data);
                break;
            case "确认密码":
            case "密码":
                isSuit=psw.test(data);
                break;
            case "手机号码":
                isSuit=tel.test(data);
                break;
            case "验证码":
                isSuit=code.test(data);
                break;
        }
        return isSuit;
    }
    //验证验证码
    function checkCode(data) {
        return(data==="000000");
    }
    //验证重复注册
    function regCheckUser(data) {
        return(data==="user");
    }
    //验证密码输入不一致
    function regCheckEqual(psw,pswCfm) {
        return(pswCfm===psw);
    }
    //regForm输入验证
    function regInputEmpty(input) {
        let isInputFit=true;
        let strIptId=JSON.stringify(input.id);
        let objTipId=JSON.parse(strIptId.substr(0,strIptId.length-1)+'Tip"');
        let data=$(input.id).val();
        let name=input.name;
        let minLength=input.minLength;
        $(".txt-tips").css("display","block");
        $(".errorTipsIcon").remove();
        $(".errorTips").remove();
        if (checkNull(data)){
            $(objTipId).css("display","none").after("<p class='errorTipsIcon'></p><span class='errorTips'>"+name+"不能为空</span>");
            isInputFit=false;
        }
        else if (checkLength(data,minLength)){
            $(objTipId).css("display","none").after("<p class='errorTipsIcon'></p><span class='errorTips'>"+name+"不能小于"+minLength+"位</span>");
            isInputFit=false;
        }
        else if (!checkSuit(data,name)){
            $(objTipId).css("display","none").after("<p class='errorTipsIcon'></p><span class='errorTips'>"+name+"格式不正确</span>");
            isInputFit=false;
        }
        else if (name==="用户名"&&regCheckUser(data)){
            $(objTipId).css("display","none").after("<p class='errorTipsIcon'></p><span class='errorTips'>该用户已注册，请登录</span>");
            isInputFit=false;
        }
        else if (name==="确认密码"&&!regCheckEqual($("#regPsw").val(),data)){
            $(objTipId).css("display","none").after("<p class='errorTipsIcon'></p><span class='errorTips'>两次密码输入不一致</span>");
            isInputFit=false;
        }
        else if (name==="验证码"&&!checkCode(data)){
            $(objTipId).css("display","none").after("<p class='errorTipsIcon'></p><span class='errorTips'>验证码不正确，请重新输入</span>");
            isInputFit=false;
        }
       setTimeout(function () {
            $(".txt-tips").css("display","block");
            $(".errorTipsIcon").remove();
            $(".errorTips").remove();
        },3000);
        return isInputFit;
    }

































