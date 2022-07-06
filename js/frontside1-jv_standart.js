
/* if (typeof openPopup == 'function') { openPopup(); }; */

function Redirect(Val) {
	window.location.href=Val;
}

// Genel fonksiyonları

function ClearControlValue(Val) {
    var a = document.getElementById(Val);
    if (a!=null) {
        a.value = '';
    }
}

function ClearControlHtml(Val) {
    var a = document.getElementById(Val);
    if (a != null) {
        a.innerHTML = '';
    }
}


// Browser Kontrol

function CheckBrowser() {
	var CheckBrowser;
	if (navigator.userAgent.indexOf('MSIE')!=-1) {
		CheckBrowser=1;
	}
	if (navigator.appVersion.indexOf("MSIE 5.5")!=-1) {
		CheckBrowser=2;
	}
	if (navigator.userAgent.indexOf("Opera6")!=-1 || navigator.userAgent.indexOf("Opera/6")!=-1) {
		CheckBrowser=3;
	}
	if (navigator.userAgent.indexOf('Netscape')!=-1) {
		CheckBrowser=4;
	}
	if (navigator.userAgent.indexOf('Firefox')!=-1) {
		CheckBrowser=5;
	}
	if (navigator.appVersion.indexOf("MSIE 7.0")!=-1) {
		CheckBrowser=6;
    }
    if (navigator.appVersion.indexOf("Chrome") != -1) {
        CheckBrowser = 7;
    }
	return CheckBrowser;
}

// ***


// Resim Swap Eden Fonksiyonlar

function MM_preloadImages() { 
	var d=document;
	if(d.images) {
		if(!d.MM_p) d.MM_p=new Array();
		var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
		for(i=0; i<a.length; i++)
		if (a[i].indexOf("#")!=0) { d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}
	}
}

function MM_swapImgRestore() { 
	var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) {
	var p,i,x;  
	if(!d) d=document;
	if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
	}
	if(!(x=d[n])&&d.all) x=d.all[n]; 
	for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { 
	var i,j=0,x,a=MM_swapImage.arguments;
	document.MM_sr=new Array;
	for(i=0;i<(a.length-2);i+=3)
	if ((x=MM_findObj(a[i]))!=null) {document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

// ***

// Margin Değiştiren Fonksiyonlar

function ChangeStyle(Target,MarginValue) {
	var a=document.getElementById(Target);
	a.style.margin=MarginValue
}

// ***

// Flash Fonksiyonlar

var bo_ns_id = 0;

function startIeFix() {
	if(CheckBrowser()==1 || CheckBrowser()==2 || CheckBrowser()==6) {
		document.write('<noscript id="bo_ns_id_' + bo_ns_id + '">');
	}
}

function endIeFix() {
	if(CheckBrowser()==1 || CheckBrowser()==2 || CheckBrowser()==6) {
		var theObject = document.getElementById("bo_ns_id_" + bo_ns_id++);
		var theNoScript = theObject.innerHTML;
		document.write(theNoScript);
		document.write('</noscript>');
	}
}

function CheckFlashVersion(Version) {
	if(navigator.plugins.length) {
		var i; 
		for (i=0; i < navigator.plugins.length; i++) {
			var pluginIdent = navigator.plugins[i].description.split(" ");
			if(pluginIdent[0] == "Shockwave" && pluginIdent[1] == "Flash") {
				var isSwfEnabled = true; 
				var versionArray = pluginIdent[2].split("."); 
				if(versionArray[0] < Version) {
					window.location.href='noflash.html';
				}
			break; 
			}
		}
	}
}

// ***

// ***

// Email Regular Expression
var filteremail=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

// Email Yönlendiren Fonksiyon

function DirectNewsletterRequest(Val) {
	if (filteremail.test(Val)) {
		location.href='email_newsletter.aspx?email='+Val+'';
	} else {
		return false;
	}
}

// ***

// Form Kontrol Renk Değiştirenler

function CheE(Obj,Color) {
	var x=document.getElementById(Obj);
	x.focus();
	if (Color != null) {
	    x.style.backgroundColor = Color;
	}
}

function CheE2(Obj,Color) {
	Obj.style.backgroundColor=Color;
}

// ***

// Email Liste Üyeliği

function CheckEmailSubscriptionForm() {
	if (document.Form1.name.value=="") {
		return 1;
	}
	if (document.Form1.surname.value=="") {
		return 2;
	}
	if (filteremail.test(document.Form1.email.value)==false) {
		return 3;
	}
	if (document.Form1.lists.value=="-1") {
		return 4;
	}
	return 5;
}

function CheckASCXNewsletter(Val) {
    var a = document.getElementById("Newsletter1_name");
    if (a != null) {
        if (document.Form1.Newsletter1_name.value == "") {
            switch (Val) {
                case 1: alert("Lütfen geçerli isminizi giriniz."); break;
                case 2: alert("Please enter your name."); break;
            }
            return false;
        }
    }
    a = document.getElementById("Newsletter1_surname");
    if (a != null) {
        if (document.Form1.Newsletter1_surname.value == "") {
            switch (Val) {
                case 1: alert("Lütfen geçerli soyisminizi giriniz."); break;
                case 2: alert("Please enter your surname."); break;
            }
            return false;
        }
    }
    if (filteremail.test(document.Form1.Newsletter1_email.value) == false) {
        switch (Val) {
            case 1: alert("Lütfen geçerli bir e-posta giriniz."); break;
            case 2: alert("Please enter a valid email address."); break;
        }
        return false;
    }
}

// ***


// marquee fonksiyonları

function MarqStop(Val) {
	var a=document.getElementById(Val);
	if (a!=null) {
		a.scrollAmount=0;
	}
}

function MarqStart(Val,Val2) {
	var a=document.getElementById(Val);
	if (a!=null) {
		a.scrollAmount=Val2;
	}
}

// ***


// tarih fonksiyonları

function ReturnDate(Val) {
	var d,splittimevalue,splitdatevalue;
	var completedate = new Date();
	if (Val.indexOf(' ')!=-1) {
		splitdatevalue=Val.split(' ');
		d=splitdatevalue[0];
		var t=splitdatevalue[1];
		splittimevalue=t.split(":");
	} else {
		d=Val;
	}
	splitdatevalue=d.split('.');
	completedate.setDate(splitdatevalue[0]);
	completedate.setMonth(splitdatevalue[1]-1);
	completedate.setFullYear(splitdatevalue[2]);
	if (t!=null) {
		completedate.setHours(splittimevalue[0]);
		completedate.setMinutes(splittimevalue[1]);
		completedate.setSeconds(splittimevalue[2]);
	}
	return completedate;
}

function isValidDate(Val, Val2) {
    try {
        var strDate = Val;
        var dateParts = strDate.split(".");
        if (Val2) {
            if (dateParts[2].length != 4) {
                return false;
            }
        }
        var date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
        if (isNaN(date)) {
            return false;
        } else {
            return true;
        }
    }
    catch (e) {
        return false;
    }
}

// ***


// nümerik kontrol

function isNumber(inputVal) {
	oneDecimal = false;
	inputStr = inputVal.toString();
	for (var i = 0; i < inputStr.length; i++) {
		var oneChar = inputStr.charAt(i);
		if (i == 0 && oneChar == "-") {
			continue;
		}
		if (oneChar == "." && !oneDecimal) {
			oneDecimal = true;
			continue;
		}
		if (oneChar < "0" || oneChar > "9") {
			return false;
		}
	}
	return true;
}

function isNumber2(inputVal) {
    oneDecimal = false;
    inputStr = inputVal.toString();
    for (var i = 0; i < inputStr.length; i++) {
        var oneChar = inputStr.charAt(i);
        if (oneChar == "." && !oneDecimal) {
            oneDecimal = true;
            continue;
        }
        if (oneChar < "0" || oneChar > "9") {
            return false;
        }
    }
    return true;
}

function numberControl(myobj) {
	if (isNumber(myobj.value)==false){
		myobj.value="";
		return false;
	}
}

function numberControl2(myobj) {
    if (isNumber2(myobj.value) == false) {
        myobj.value = "";
        return false;
    }
}

function isInteger(inputVal) {
    oneDecimal = false;
    inputStr = inputVal.toString();
    for (var i = 0; i < inputStr.length; i++) {
        var oneChar = inputStr.charAt(i);
        if (i == 0 && oneChar == "-") {
            continue;
        }
        if (oneChar < "0" || oneChar > "9") {
            return false;
        }
    }
    return true;
}

function integerControl(myobj) {
    if (isInteger(myobj.value) == false) {
        myobj.value = "";
        return false;
    }
}

function isPhone(myobj, colorOp, mandatory, startValue) {
    var result;
    if (mandatory==false) {
        if (myobj.value=="") {
            return true;
        }
    }
    if (myobj.value == "") {
        alert("Lütfen telefon numaranızı giriniz (10 hane olarak, bölge / operatör kodu dahil.");
        result = false;
    } else {
        if (startValue != null) {
            if (myobj.value.substring(0, 1) != startValue) {
                alert("Telefon numaranız " + startValue + " ile başlamalıdır. Lütfen kontrol ediniz.");
                return false;
            }
        }
        if (isInteger(myobj.value)) {
            if (myobj.value.length == 10) {
                result = true;
            } else {
                alert("Girdiğiniz telefon numarası bölge / operatör kodu dahil 10 hane olmalıdır.");
                result = false;
            }
        } else {
            alert("Girdiğiniz telefon numarası sayısal olmalıdır.");
            result = false;
        }
    }
    if (result == false && colorOp) {
        CheE2(myobj, mOverCol);
        myobj.focus();
    }
    return result;
}

function frChk(elementId, messageKeyword, checkValue, fullMessage) {
    if (fullMessage == null) {
        fullMessage = 'Lütfen ' + messageKeyword + ' giriniz.';
    }
    if (checkValue == null) {
        checkValue = "";
    }
    if (document.getElementById(elementId).value == checkValue) {
        alert(fullMessage);
        CheE2(document.getElementById(elementId), mOverCol);
        document.getElementById(elementId).focus();
        return false;
    }
    return true;
}

function frChkAlert(elementId, messageKeyword, fullMessage) {
    if (fullMessage == null) {
        fullMessage = 'Lütfen ' + messageKeyword + ' giriniz.';
    }
    alert(fullMessage);
    CheE2(document.getElementById(elementId), mOverCol);
    document.getElementById(elementId).focus();
    return false;
}

function frEmail(elementId) {
    if (filteremail.test(document.getElementById(elementId).value) == false) {
        alert("Lütfen geçerli bir eposta adresinizi giriniz.");
        CheE2(document.getElementById(elementId), mOverCol);
        document.getElementById(elementId).focus();
        return false;
    }
}

// ***


// Menü Saklayan ve Açan Fonksiyonlar

function ShowMenu(Val) {
	document.getElementById(Val).className="divmenushow";
}

function HideMenu(Val) {
	document.getElementById(Val).className="divmenuhide";
}

function ShowMenuWithDisplay(Val,NameWithNoIndex,EscapeIndex,OtherElementsStyle,HideOthers) {
	document.getElementById(Val).style.display="block";
	if (NameWithNoIndex!=null) {
		var count=1;
		var a=document.getElementById(NameWithNoIndex+1);
		while (a!=null)
		{
			if (count!=EscapeIndex) {
				if (HideOthers==true) {
					a.style.display='none';
				}
				if (OtherElementsStyle!=null) {
					pviiClassNew(a,OtherElementsStyle);
				}
			}
			count=count+1;
			a=document.getElementById(NameWithNoIndex+count);
		}
	}
}

function HideMenuWithDisplay(Val) {
	document.getElementById(Val).style.display="none";
}

function TkSubMenu() {
    var type = returnUrlQueryParam('type');
    if (type != null) {
        var inputSubMenu = document.getElementById('input_sub_' + type);
        if (inputSubMenu != null) {
            inputSubMenu = inputSubMenu.value;
            var tableMenu = document.getElementById('table_sub_' + inputSubMenu);
            if (tableMenu != null) {
                $(tableMenu).show();
            }
        }
    }
}

// ***

// Class Değişikliği ve Hand Fonksiyonu

function pviiClassNew(obj, new_style) {
	obj.className = new_style;
}

function ShowHand(obj, new_style) {
	obj.style.cursor='hand';
}

// ***

// Arama Yönlendiren Fonksiyon****

function SearchRedirect(Val,Val2) {
	if (document.Form1.search_keyword.value=="") {
		switch (Val) {
			case 1: alert("Lütfen arama yapmak istediğiniz kelimeyi giriniz."); break;
			case 2: alert("Please enter your search keyword."); break;
			case 3: alert("Entrez le mot que vous voulez faire le recherche."); break;
			case 5: alert("Si prega di inserire la parola che si cerca."); break;
			case 6: alert("Por favor ingrese la palabra que usted quiere buscar."); break;
		}
		return false;
	}
	window.location.href='search.aspx?dosearch=yes&search_keyword='+document.Form1.search_keyword.value+'&type99=99'+Val2+'';
}

// ***

// RadioButton Kontrol Fonksiyonu*

function CheckRadio(Val,Val2) {
	var i=0;
	var rb=false;;
	var temp=document.getElementById(Val+'_'+i);
	do {
		if (temp.checked) {
			rb=true;
		}
		i++;
		temp=document.getElementById(Val+'_'+i);
	}
	while (temp!=null)
	if (rb==false) {
		alert (Val2);
		return false;
	} else {
		return true;
	}
}

// ***

// Login Fonksiyonu

function CheckGeneralLoginForm(Val) {
	var a=document.getElementById('Login1_login_postback');
	if (a!=null) {
		a.value=1;
	}
	if (document.Form1.Login1_login_username.value=="" || document.Form1.Login1_login_password.value=="") {
		switch (Val) {
			case 1: alert("Lütfen kullanıcı adınız ve şifrenizi giriniz.");
			case 2: alert("Please enter your username and password");
		}
		return false;
	}
}

// ***

// Alt Menü için Fonksiyon

function SubMenuQueryString() {
	var b='';
	var a=document.getElementById('menu_last_id');
	if (a!=null) {
		if (a.value!='') {
			var b=document.getElementById(a.value);
			if (b!=null) {
				b.style.display="block";
			}
		}
	}
}

// ***

function iso88599Escape(strText) {
	//strText=escape(strText);
	strText=strText.replace(/ı/g,"%C4%B1");
	strText=strText.replace(/Ü/g,"%C3%9C");
	strText=strText.replace(/ü/g,"%C3%BC");
	strText=strText.replace(/ğ/g,"%C4%9F");
	strText=strText.replace(/Ğ/g,"%C49E%");
	strText=strText.replace(/ü/g,"%C3%BC");
	strText=strText.replace(/Ü/g,"%C3%9C");
	strText=strText.replace(/İ/g,"%C4%B0");
	strText=strText.replace(/ş/g,"%C5%9F");
	strText=strText.replace(/Ş/g,"%C5%9E");
	strText=strText.replace(/ç/g,"%C3%A7");
	strText=strText.replace(/Ç/g,"%C3%87");
	strText=strText.replace(/ö/g,"%C3%B6");
	strText=strText.replace(/Ö/g,"%C3%96");
	return strText;
}

// WebForm Small Fonksiyonları

function CheckSmallForm() {
    if (document.Form1.WebFormSmall1_name.value=="") {
        alert("Lütfen isminizi giriniz.");
        return false;
    }
    if (document.Form1.WebFormSmall1_surname.value == "") {
        alert("Lütfen soyisminizi giriniz.");
        return false;
    }
    if (filteremail.test(document.Form1.WebFormSmall1_email.value) == false) {
        alert("Lütfen geçerli bir e-posta giriniz.");
        return false;
    }
    if (document.Form1.WebFormSmall1_question.value == "") {
        alert("Lütfen sorunuzu giriniz.");
        return false;
    }
}

// URL Fonksiyonları

function returnUrlQueryParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) {
        return "";
    } else {
        return results[1];
    } 
}

// Ajax Fonksiyonları

function Ajax_ShowPage(Url, DivId, TimeLimit) {
    var mydate = new Date();
    var html = $.ajax({
        //url: Url,
        url: Url + '&date=' + mydate.getTime(),
        async: false
    }).responseText;
    $("#" + DivId).animate({ opacity: 0 }, 0);
    document.getElementById(DivId).innerHTML = html;
    $("#" + DivId).animate({ opacity: 1 }, TimeLimit);
}

function Ajax_Query_SortialDouble(PrimaryId, TypeId, Sortial) {
    if (Sortial) {
        return 'sortial_response.aspx?primary_id=' + PrimaryId + '&type=' + TypeId + '&target=productialdbl&detail=double';
    } else {
        return 'entitialfocus_response.aspx?primary_id=' + PrimaryId + '&type=' + TypeId + '&target=productialdbl&detail=double';
    }
}

function Ajax_Query_SortialTriple(PrimaryId, TypeId, Target, Sortial) {
    if (Sortial) {
        return 'sortial_response.aspx?primary_id=' + PrimaryId + '&type=' + TypeId + '&target=' + Target + '&detail=triple';
    } else {
        return 'entitialfocus_response.aspx?primary_id=' + PrimaryId + '&type=' + TypeId + '&target=' + Target + '&detail=triple';
    }
}

function Ajax_ShowPageFirstLoad(TypeId, DivSortialId, DivEntitialId, FirstSortialPrimaryId, FirstEntitialPrimaryId, TimeLimit) {
    $(document).ready(
        function() {
            Ajax_ShowPage(Ajax_Query_SortialDouble(FirstSortialPrimaryId, TypeId, true), DivSortialId, TimeLimit);
            Ajax_ShowPage(Ajax_Query_SortialDouble(FirstEntitialPrimaryId, TypeId, false), DivEntitialId, TimeLimit);
        }
    )
}

function Ajax_ShowPageFirstTripleLoad() {
    $(document).ready(
        function() {
            Ajax_ShowPage(Ajax_Query_SortialTriple('', document.Form1.type.value, 'categorial1', true), 'DivSortialContent_1', 1000);
            Ajax_ShowPage(Ajax_Query_SortialTriple(document.Form1.first_sortial_primary_id.value, document.Form1.type.value, 'categorial1', false), 'DivEntitialContent', 1000);
            Ajax_ShowPage(Ajax_Query_SortialTriple(document.Form1.first_sortial_primary_id.value, document.Form1.type.value, 'categorial2', true), 'DivSortialContent_2', 1000);
        }
    )
}

function Ajax_ShowPageFirstTripleLoad2() {
    $(document).ready(
        function() {
            Ajax_ShowPage(Ajax_Query_SortialTriple('', document.Form1.type.value, 'categorial1', true), 'DivSortialContent_1', 1000);
        }
    )
}

// DHTML Slayt Fonksiyonları

function dhtmlStopTimer(objectId) {
    document.getElementById(objectId).value = 1;
}

function dhtmlStartTimer(objectId) {
    document.getElementById(objectId).value = 0;
}

function dhtmlFirstPic(type, directOp) {
    //val'da hep bir sonra gösterilecek saklanıyor
    if (directOp == null) {
        directOp = false;
    }
    var a = document.getElementById('NewsFlowIds_' + type);
    var b;
    if (a != null) {
        var val = parseInt(document.getElementById('timer_' + type + '_val').value);
        b = a.value.split(",");
        if (val < b.length) {
            changeDhtmlPic(b[val]);
            val = val + 1;
        } else {
            changeDhtmlPic(b[0]);
            val = 1;
        }
        document.getElementById('timer_' + type + '_val').value = val;
        if (b.length != 1) {
            if (directOp) {
                dhtmlKilltimer();
            } else {
                timer = setTimeout("dhtmlFirstPic(" + type + "," + directOp + ")", 4000);
            }
        }
    }
}

function dhtmlFirstClick(next, type) {
    //document.getElementById(divDhtmlId).removeAttribute("onClick");
    //document.getElementById(divDhtmlId).setAttribute("onClick", "return false;");
    if (next) {
        dhtmlFirstPic(type, true);
    } else {
        var val = parseInt(document.getElementById('timer_' + type + '_val').value);
        if (val == 1) {
            var a = document.getElementById('NewsFlowIds_' + type);
            var b = a.value.split(",");
            val = b.length - 1;
        } else {
            val = val - 2;
        }
        document.getElementById('timer_' + type + '_val').value = val;
        dhtmlFirstPic(type, true);
    }
    return false;
}

function dhtmlArrowOpacity(opaValue, type) {
    if (document.getElementById('ImgNext').value != opaValue) {
        $("#ImgPrev").stop();
        $("#ImgNext").stop();
        $('#ImgPrev').animate({ opacity: opaValue }, 750);
        $('#ImgNext').animate({ opacity: opaValue }, 750);
    }
}

function dhtmlKilltimer() {

    //Timer durduruluyor
    if (timer != null) {
        if (timer) {
            clearTimeout(timer);
            timer = 0;
        }
    }

}