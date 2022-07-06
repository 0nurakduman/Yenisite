
//Global Değişkenler

var timer;

function ready() {
    scroll();
    $(".fancybox").fancybox({});
    $("#DivBrands1578").als({ visible_items: 6, scrolling_items: 1, orientation: "horizontal", circular: "yes", autoscroll: "no", interval: 5000, speed: 450 });
    //$("#DivBrands1582").als({ visible_items: 6, scrolling_items: 1, orientation: "horizontal", circular: "yes", autoscroll: "no", interval: 5000, speed: 450 });
    //$("#DivBrands1584").als({ visible_items: 6, scrolling_items: 1, orientation: "horizontal", circular: "yes", autoscroll: "no", interval: 5000, speed: 450 });
}

function readyDetail() {
    scroll();
    $(".fancybox").fancybox({});
    $("#DivBrands1578Detail").als({ visible_items: 1, scrolling_items: 1, orientation: "horizontal", circular: "yes", autoscroll: "no", interval: 5000, speed: 450 });
}

function openPopupMain() {
    $.fancybox({ 'href': 'maintenance.html', 'maxHeight': '530', 'width': '630', 'height': '530', 'autoScale': false, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'padding': '0' });
}



// Hizmetlerimiz / Çözümlerimiz Fonksiyonu

function brandsShow(target) {
    document.getElementById('DivBrands1582').style.display = 'none';
    document.getElementById('DivBrands1578').style.display = 'none';
    document.getElementById('DivBrands1584').style.display = 'none';
    document.getElementById('ImgArasButtonArrowLeft').style.display = 'none';
    document.getElementById('ImgArasButtonArrowMid').style.display = 'none';
    document.getElementById('ImgArasButtonArrowRight').style.display = 'none';
    if (target == 'Brands') {
        document.getElementById('DivBrands1578').style.display = 'block';
        document.getElementById('ImgArasButtonArrowLeft').style.display = 'block';
    } else {
        if (target == 'ExBrands') {
            document.getElementById('DivBrands1584').style.display = 'block';
            document.getElementById('ImgArasButtonArrowMid').style.display = 'block';
        } else {
            document.getElementById('DivBrands1582').style.display = 'block';
            document.getElementById('ImgArasButtonArrowRight').style.display = 'block';
        }
    }
}



// Haberlerimiz / Kampanyalarımız Fonksiyonu

function servicesShow(target) {
    document.getElementById('DivNews').style.display = 'none';
    document.getElementById('DivCampaigns').style.display = 'none';
    document.getElementById('ImgHaberlerArrow').style.display = 'none';
    document.getElementById('ImgKampanyaArrow').style.display = 'none';
    if (target == 'News') {
        document.getElementById('DivNews').style.display = 'block';
        document.getElementById('ImgHaberlerArrow').style.display = 'block';
    } else {
        document.getElementById('DivCampaigns').style.display = 'block';
        document.getElementById('ImgKampanyaArrow').style.display = 'block';
    }
}



// Scroll Fonksiyonu

function scroll() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
}



// Menü Fonksiyonları

function displayMenu(menuId, close) {
    if (menuId == 'DivMenu') {
        if ($("#DivMenu").is(":visible") == false) {
            $("#DivMenu").stop();
            $("#DivMenu").slideDown(550);
        } else {
            $("#DivMenu").stop();
            $("#DivMenu").slideUp(450);
        }
    } else {
        if ($("#DivCargo" + menuId).is(":visible") == false) {
            if (close) {
                $("#DivCargo1").stop();
                $("#DivCargo1").slideUp(100);
                $("#DivCargo2").stop();
                $("#DivCargo2").slideUp(100);
                $("#DivCargo3").stop();
                $("#DivCargo3").slideUp(100);
                $("#DivCargo4").stop();
                $("#DivCargo4").slideUp(100);
                $("#DivCargo5").stop();
                $("#DivCargo5").slideUp(100);
            }
            $("#DivCargo" + menuId).stop();
            document.getElementById('DivCargo1B').className = 'div_cargo_button';
            document.getElementById('DivCargo2B').className = 'div_cargo_button';
            document.getElementById('DivCargo3B').className = 'div_cargo_button';
            document.getElementById('DivCargo4B').className = 'div_cargo_button';
            document.getElementById('DivCargo5B').className = 'div_cargo_button';
            document.getElementById('DivCargo' + menuId + 'B').className = 'div_cargo_button_on';
            $("#DivCargo" + menuId).slideDown(550);
        }
    }
}

function changeMenu(buttonId, index, close) {
    if (document.getElementById('DivCargo1B').className != 'div_cargo_button_on') {
        document.getElementById('ImgM1').src = '../tr/images/cargo_1.gif';
    }
    if (document.getElementById('DivCargo2B').className != 'div_cargo_button_on') {
        document.getElementById('ImgM2').src = '../tr/images/cargo_2.gif';
    }
    if (document.getElementById('DivCargo3B').className != 'div_cargo_button_on') {
        document.getElementById('ImgM3').src = '../tr/images/cargo_3.gif';
    }
    if (document.getElementById('DivCargo4B').className != 'div_cargo_button_on') {
        document.getElementById('ImgM4').src = '../tr/images/cargo_4.gif';
    }
    if (document.getElementById('DivCargo5B').className != 'div_cargo_button_on') {
        document.getElementById('ImgM5').src = '../tr/images/cargo_5.gif';
    }
    if (close==false) {
        document.getElementById(buttonId).src = '../tr/images/cargo_' + index + '_over.gif';
    }
}

function lP() {
    MM_preloadImages('../tr/images/cargo_1_over.gif', '../tr/images/cargo_1_over.gif', '../tr/images/cargo_1_over.gif', '../tr/images/cargo_1_over.gif', '../tr/images/cargo_1_over.gif');
}



// DHTML Fonksiyonları

function changeDhtmlPic(Val) {
    var a = document.getElementById('Dhtml1_DivDhtml');
    var b = document.getElementById('Srt_PicId_' + Val);
    if (a != null && b != null) {
        $("#Dhtml1_DivDhtml").stop();
        a.style.backgroundImage = 'url(' + b.src + ')';
        $("#DivDhtmlLink").click(function () {
            window.location.href = document.getElementById('DivLink_' + Val).innerText;
        });
    }
}

/* Eski

function changeDhtmlPic(Val) {
    var a = document.getElementById('Dhtml1_DivDhtml');
    var b = document.getElementById('Srt_PicId_' + Val);
    var c = document.getElementById('Div_Headline_' + Val)
    var d = document.getElementById('Div_' + Val);
    if (a != null && b != null) {
        $("#Dhtml1_DivDhtml").stop();
        $("#Dhtml1_Shodes").stop();
        $("#Dhtml1_HeadlineText").stop();
        a.style.backgroundImage = 'url(' + b.src + ')';
        //$("#ImageNews").animate({ opacity: 0 }, 0);
        //a.setAttribute("src", b.getAttribute("src"));
        //$("#ImageNews").animate({ opacity: 1 }, 750);
        $("#Dhtml1_HeadlineText").animate({ opacity: 0 }, 0);
        $("#Dhtml1_HeadlineText").html(c.innerHTML);
        $("#Dhtml1_HeadlineText").animate({ opacity: 1 }, 1750);
        $("#Dhtml1_Shodes").animate({ opacity: 0 }, 0);
        $("#Dhtml1_Shodes").html(d.innerHTML);
        $("#Dhtml1_Shodes").animate({ opacity: 1 }, 3500);
        document.getElementById('DhtmlLink').href = document.getElementById('DivLink_' + Val).innerText;
    }
}

*/




// Mobil Alan, Günaydın Fonksiyonları

function openMobilAlan() {

    window.open('popup_mobil_alan.aspx','', 'width=800,height=650,top=50,left=50,scrollbars=yes');

}

function openGunaydin() {

    window.open('popup_gunaydin_kargo.aspx', '', 'width=800,height=650,top=50,left=50,scrollbars=yes');

}

function openMaintenance(Val) {

    window.open('popup_maintenance_'+Val+'.html', '', 'width=500,height=371,top=50,left=50,scrollbars=yes');

}


/*****************/

function MenuSubOver(ObjSpe,LinkId) {
    pviiClassNew(ObjSpe, 'tk_menu_over'); ObjSpe.style.cursor = 'hand'; pviiClassNew(document.getElementById(LinkId), 'link_top_over');
}

function MenuSubOut(ObjSpe,LinkId) {
    pviiClassNew(ObjSpe, 'tk_menu_out'); pviiClassNew(document.getElementById(LinkId), 'link_top');
}

function showMobileMenu() {
    if (document.getElementById('DivMenuRow').style.display == 'none') {
        document.getElementById('DivMenuRow').style.display = 'block';
    } else {
        document.getElementById('DivMenuRow').style.display = 'none';
    }
    return false;
}




// Mobil Menü //

function changeMobileMenu() {

    var a = document.getElementById('SelectMenu').value;
    if (a != "") {
        if (a == "0") {
            document.location.href = 'index.aspx';
            return false;
        }
        if (a == "10000") {
            document.location.href = 'sortial.aspx?sp_table=Tk_2837_Distributors&sp_primary=distributor_id&sp_fields=,name,telephone,fax,web,address&sp_language=0&sp_table_extra';
            return false;
        }
        if (a == "20000") {
            document.location.href = 'rss.aspx';
            return false;
        }
        if (a == "30000") {
            document.location.href = 'contact_aras_subeler.aspx';
            return false;
        }
        if (a == "40000") {
            document.location.href = 'webform_acenta_basvuru_map.aspx';
            return false;
        }
        if (a == "50000") {
            document.location.href = 'webform_aras.aspx';
            return false;
        }
        if (a == "60000") {
            document.location.href = 'contact_aras_bolgeler.aspx';
            return false;
        }
        if (a == "70000") {
            document.location.href = '../tr/webform_aras_burasi.aspx';
            return false;
        }
        document.location.href = 'neuralnetwork.aspx?type=' + a;
    }
    return false;

}

function changeMobileMenuSub() {

    var a = document.getElementById('SelectMenuSub').value;
    if (a != "-1") {
        if (a == "30000") {
            document.location.href = 'contact_aras_subeler.aspx';
            return false;
        }
        if (a == "40000") {
            document.location.href = 'webform_acenta_basvuru_map.aspx';
            return false;
        }
        if (a == "50000") {
            document.location.href = 'webform_aras.aspx';
            return false;
        }
        if (a == "60000") {
            document.location.href = 'contact_aras_bolgeler.aspx';
            return false;
        }
        document.location.href = 'neuralnetwork.aspx?type=' + a;
    }

}




/* Özel Hizmetler */

function changeServices(Val) {
    var allIds = document.getElementById('NewsFlowIds_1484').value.split(",");
    var count;
    if (document.getElementById('Tr_' + Val).style.display != 'block') {
        for (count = 0; count < allIds.length; count++) {
            $("#Tr_" + allIds[count]).hide();
            //document.getElementById('Table_' + allIds[count]).className = 'table-news-out';
        }
        $("#Tr_" + Val).show(0);
        //document.getElementById('Table_' + Val).className = 'table-news-over';
    }
}

function FirstService(Val) {
    var a = document.getElementById('NewsFlowIds_1484');
    var b;
    if (a != null) {
        b = a.value.split(",");
        changeServices(b[Val]);
    }
}




/* Arama */

function SearchKeyDown() {
    if (document.getElementById("InputSearch").value=="") {
        alert("Lütfen arama yapmak istediğiniz kelimeyi giriniz.");
        return false;
    }
    if (event.keyCode == 13) {
        window.location.href = 'search.aspx?zoom_sort=0&zoom_xml=0&zoom_query=' + document.getElementById("InputSearch").value + '&zoom_per_page=20&zoom_and=0';
        return false;
    }
}




/* FAQ */

function changeFAQ(id) {
    if (document.getElementById('Tr_' + id).style.display == 'block' || document.getElementById('Tr_' + id).style.display == '') {
        $("#Tr_" + id).hide();
    } else {
        $("#Tr_" + id).show(0);
    }
    return false;
}


/* Border */

function ChangeBorder(Obj, Over) {
    if (Over) {
        Obj.style.border = 'solid 1px #E80034';
    } else {
        Obj.style.border = 'solid 1px #C4C3C3';
    }
}

function changeBorderFn(Obj, Over) {
    if (Over) {
        Obj.style.border = 'solid 1px #FFFFFF';
    } else {
        Obj.style.border = 'solid 1px #565656';
    }
}



// Kargo Fonksiyonları

function HideFaceBook() {
}

function autoConUpdateGeneral(ObjBehavior, ObjContextValue) {
    //Genel Context Fonksiyonu
    var autoComplete = $find(ObjBehavior);
    if (!autoComplete) return;
    var target = autoComplete.get_element();
    if (!target) return;
    var userContext = $get(ObjContextValue);
    if (!userContext) return;
    autoComplete.add_populating(function() {
        autoComplete.set_contextKey(userContext.value);
    });
}

function autoReset() {
    var mes = document.getElementById('autocomp_def_message').value;
    autoConUpdateGeneral('autocomp_search_semtilce', 'state_id');
    document.getElementById('semtilce').innerText = mes;
    document.getElementById('cadde').innerText = mes;
    document.getElementById('sokak').innerText = mes;
    document.getElementById('selected_semtilce').value = '';
    document.getElementById('selected_cadde').value = '';
    document.getElementById('selected_sokak').value = '';
    //autoConUpdateGeneral('autocomp_search_cadde', contextTakenFrom);
    //autoConUpdateGeneral('autocomp_search_sokak', contextTakenFrom);
    //document.getElementById('search_cadde').focus();
    //document.getElementById('search_sokak').focus();
    //document.getElementById('state_id').focus();
}

function autoResetKur() {
    var mes = document.getElementById('autocomp_def_message').value;
    document.getElementById('kurye_semtilce').value = mes;
    document.getElementById('kurye_search_semtilce').value = "";
    document.getElementById('kurye_selected_semtilce').value = "";
}

function commonSelectSemtIlceText(a, kurye) {
    document.getElementById(kurye + 'selected_semtilce').value = a;
    document.getElementById(kurye + 'semtilce').innerText = document.getElementById(kurye + 'search_semtilce').value;
    autoReset(2, 'selected_semtilce', kurye);
}

function commonSelectMahalleText(a, kurye) {
    document.getElementById(kurye + 'selected_mahalle').value = a;
    document.getElementById(kurye + 'mahalle').innerHTML = document.getElementById(kurye + 'search_mahalle').value;
    autoReset(3, 'selected_mahalle', kurye);
}

function commonSelectCaddeText(a, kurye) {
    document.getElementById(kurye + 'selected_cadde').value = a;
    document.getElementById(kurye + 'cadde').innerHTML = document.getElementById(kurye + 'search_cadde').value;
}

function commonSelectSokakText(a, kurye) {
    document.getElementById(kurye + 'selected_sokak').value = a;
    document.getElementById(kurye + 'sokak').innerHTML = document.getElementById(kurye + 'search_sokak').value;
}

function OpenCargoTrack(Val, Val2, Val3) {
    if (Val2 == 1) {
        window.open('cargo_tracking_detail.aspx?query=1&querydetail=' + Val, '', 'width=800,height=750,top=50,left=50,scrollbars=yes');
    } else {
        if (Val3 == null || Val3 == "0") {
            $.fancybox({ 'href': 'cargo_tracking_detail.aspx?r=' + Math.floor(Math.random() * 10000000) + 'query=1&querydetail=' + Val, 'maxHeight': '750', 'width': '800', 'height': '750', 'autoScale': false, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'padding': '0' });
        } else {
            window.location.href = 'cargo_tracking_detail.aspx?query=1&querydetail=' + Val;
        }
    }
    return false;
}

function OpenCargoTrackTest(Val, Val2, Val3) {
    if (Val2 == 1) {
        window.open('cargo_tracking_detail_13012022.aspx?query=1&querydetail=' + Val, '', 'width=800,height=750,top=50,left=50,scrollbars=yes');
    } else {
        if (Val3 == null || Val3 == "0") {
            $.fancybox({ 'href': 'cargo_tracking_detail_13012022.aspx?r=' + Math.floor(Math.random() * 10000000) + 'query=1&querydetail=' + Val, 'maxHeight': '750', 'width': '800', 'height': '750', 'autoScale': false, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'padding': '0' });
        } else {
            window.location.href = 'cargo_tracking_detail_13012022.aspx?query=1&querydetail=' + Val;
        }
    }
    return false;
}

function openVideo(queryString) {
    $.fancybox({ 'href': 'wf_video_player.aspx' + queryString, 'maxHeight': '530', 'width': '630', 'height': '530', 'autoScale': false, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'padding': '0' }); 
}

function Step1Help() {
    window.open('popup_entitialfocus.aspx?target=categorial1&primary_id=8019&type=1539&detail=nocategorial&showdatetime=0&sp_table_extra=', '', 'width=700,height=450,top=50,left=50,scrollbars=yes');
    return false;
}

function Step2Help_1() {
    window.open('popup_entitialfocus.aspx?target=categorial1&primary_id=7972&type=1514&detail=nocategorial&showdatetime=0&sp_table_extra=', '', 'width=700,height=510,top=50,left=50,scrollbars=yes');
    return false;
}

function Step2Help_2() {
    window.open('popup_gunaydin_kargo.aspx', '', 'width=700,height=450,top=50,left=50,scrollbars=yes');
    return false;
}

function Step2Help_3() {
    window.open('popup_mobil_alan.aspx', '', 'width=800,height=450,top=50,left=50,scrollbars=yes,resizable=yes');
    return false;
}

function step4Help_1(Val, Val2) {
    window.open('popup_desi.aspx?ratio=' + Val + '&functions=' + Val2, '', 'width=450,height=430,top=50,left=50,scrollbars=no');
    return false;
}

function checkStep1Form1(lan) {
    if (document.getElementById('InputCargo1').value == "Kargo takip no" || document.getElementById('InputCargo1').value == "Cargo tracking number") {
        switch (lan) {
            case 1:
                alert("Lütfen kargo takip numaranızı giriniz.");
                break;
            case 2:
                alert("Please enter your cargo tracking number.");
                break;
        }
        document.getElementById('InputCargo1').focus();
        return false;
    }
}

function checkStep1Form2(lan) {
    if (document.getElementById('EComs').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen siparişinizi verdiğiniz şirketi seçiniz.");
                break;
            case 2:
                alert("Please select company.");
                break;
        }
        document.getElementById('EComs').focus();
        return false;
    }
    if (document.getElementById('InputCargo2').value == "Takip no" || document.getElementById('InputCargo2').value == "Tracking number") {
        switch (lan) {
            case 1:
                alert("Lütfen takip numaranızı giriniz.");
                break;
            case 2:
                alert("Please enter tracking number.");
                break;
        }
        document.getElementById('InputCargo2').focus();
        return false;
    }
}

function checkStep2Form(lan) {
    if (document.getElementById('StateOut').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen çıkış ili seçiniz.");
                break;
            case 2:
                alert("Please select departure state.");
                break;
        }
        document.getElementById('StateOut').focus();
        return false;
    }
    if (document.getElementById('StateIn').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen varış ili seçiniz.");
                break;
            case 2:
                alert("Please select arrival state.");
                break;
        }
        document.getElementById('StateIn').focus();
        return false;
    }
}

function checkStep3Form(lan) {
    if (document.getElementById('state_id').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen il seçiniz.");
                break;
            case 2:
                alert("Please select state.");
                break;
        }
        document.getElementById('state_id').focus();
        return false;
    }
    if (document.getElementById('town_id').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen ilçe seçiniz.");
                break;
            case 2:
                alert("Please select town.");
                break;
        }
        document.getElementById('town_id').focus();
        return false;
    }
}

function checkDesi() {
    if (document.getElementById('desi').value == "0") {
        //document.Form1.ana_hizmet.value = 'DC261CBFD5E0674986C7B6D7093E4060';
        //document.getElementById('ana_hizmet').value = '-1';
    } else {
        //document.getElementById('ana_hizmet').value = '-1';
    }
}

function checkStep4Form1(lan) {
    if (document.getElementById('ucret_cikis_ili').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen çıkış ili seçiniz.");
                break;
            case 2:
                alert("Please select departure state.");
                break;
        }
        document.getElementById('ucret_cikis_ili').focus();
        return false;
    }
    if (document.getElementById('ucret_varis_ili').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen varış ili seçiniz.");
                break;
            case 2:
                alert("Please select arrival state.");
                break;
        }
        document.getElementById('ucret_varis_ili').focus();
        return false;
    }
    if (document.getElementById('desi').value == "" || document.getElementById('desi').value == "Desi/KG giriniz" || document.getElementById('desi').value == "Enter volumetric weight") {
        switch (lan) {
            case 1:
                alert("Lütfen ya desi/kg hesaplayınız ya da desi/kg biliyorsanız giriniz. Örneğin belge / döküman / evrak için '0' girebilirsiniz.");
                break;
            case 2:
                alert("Please either compute volumetric weight or enter the exact figure if you already know. You can enter '0' for documents.");
                break;
        }
        document.getElementById('desi').focus();
        return false;
    }
    if (document.getElementById('ana_hizmet').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen ana hizmet seçiniz.");
                break;
            case 2:
                alert("Please select main service.");
                break;
        }
        document.getElementById('ana_hizmet').focus();
        return false;
    }
}

function checkStep4Form2(lan) {
    if (document.getElementById('ucret_varis_ulke').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen varış ülkesi seçiniz.");
                break;
            case 2:
                alert("Please select arrival country.");
                break;
        }
        document.getElementById('ucret_varis_ulke').focus();
        return false;
    }
    if (document.getElementById('desi2').value == "" || document.getElementById('desi2').value == "Desi giriniz" || document.getElementById('desi2').value == "Enter volumetric weight") {
        switch (lan) {
            case 1:
                alert("Lütfen ya desi hesaplayınız ya da desiyi biliyorsanız Giriniz. Örneğin belge / döküman / evrak için '0' girebilirsiniz.");
                break;
            case 2:
                alert("Please either compute volumetric weight or enter the exact figure if you already know. You can enter '0' for documents.");
                break;
        }
        document.getElementById('desi2').focus();
        return false;
    }
    if (document.getElementById('ana_hizmet_yurtdisi').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen ana hizmet seçiniz.");
                break;
            case 2:
                alert("Please select main service.");
                break;
        }
        document.getElementById('ana_hizmet_yurtdisi').focus();
        return false;
    }
}

function checkStep4Form3(lan) {
    if (document.getElementById('ucret_cikis_ili').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen çıkış ili seçiniz.");
                break;
            case 2:
                alert("Please select departure state.");
                break;
        }
        document.getElementById('ucret_cikis_ili').focus();
        return false;
    }
    if (document.getElementById('ucret_cikis_ilcesi').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen çıkış ilçesi seçiniz.");
                break;
            case 2:
                alert("Please select departure town.");
                break;
        }
        document.getElementById('ucret_cikis_ilcesi').focus();
        return false;
    }
    if (document.getElementById('ucret_varis_ili').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen varış ili seçiniz.");
                break;
            case 2:
                alert("Please select arrival state.");
                break;
        }
        document.getElementById('ucret_varis_ili').focus();
        return false;
    }
    if (document.getElementById('ucret_varis_ilcesi').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen varış ilçesi seçiniz.");
                break;
            case 2:
                alert("Please select arrival town.");
                break;
        }
        document.getElementById('ucret_varis_ilcesi').focus();
        return false;
    }
    if (document.getElementById('ucret_adres').value == "" || document.getElementById('ucret_adres').value == "Adres giriniz" || document.getElementById('ucret_adres').value == "Enter address") {
        switch (lan) {
            case 1:
                alert("Mahalle, Cadde ismi ve Kapı Numarası giriniz");
                break;
            case 2:
                alert("Please enter address.");
                break;
        }
        document.getElementById('ucret_adres').focus();
        return false;
    }
}

function checkStep5Form1(lan) {
    if (document.getElementById('name').value == "İsminiz" || document.getElementById('name').value == "Name") {
        switch (lan) {
            case 1:
                alert("Lütfen isminizi giriniz.");
                break;
            case 2:
                alert("Please enter your name.");
                break;
        }
        document.getElementById('name').focus();
        return false;
    }
    if (document.getElementById('surname').value == "Soyisminiz" || document.getElementById('surname').value == "Surname") {
        switch (lan) {
            case 1:
                alert("Lütfen soyisminizi giriniz.");
                break;
            case 2:
                alert("Please enter your surname.");
                break;
        }
        document.getElementById('surname').focus();
        return false;
    }
    if (lan == 1) {
        if (document.getElementById('tc_kimlik_no').value != "TC kimlik numaranız" || document.getElementById('birthyear').value != "Doğum yılınız") {
            if (document.getElementById('tc_kimlik_no').value == "TC kimlik numaranız") {
                alert("Lütfen TC kimlik numaranızı giriniz.");
                document.getElementById('tc_kimlik_no').focus();
                return false;
            }
            if (document.getElementById('birthyear').value == "Doğum yılınız") {
                alert("Lütfen doğum yılınızı giriniz.");
                document.getElementById('birthyear').focus();
                return false;
            }
        }
    } else {
        if (document.getElementById('tc_kimlik_no').value != "TC number" || document.getElementById('birthyear').value != "Birth year") {
            if (document.getElementById('tc_kimlik_no').value == "TC number") {
                alert("Please enter your TC number.");
                document.getElementById('tc_kimlik_no').focus();
                return false;
            }
            if (document.getElementById('birthyear').value == "Birth year") {
                alert("Please enter your birth year.");
                document.getElementById('birthyear').focus();
                return false;
            }
        }
    }
    if (document.getElementById('code').value == "Telefon (kod)" || document.getElementById('code').value == "Phone (code)") {
        switch (lan) {
            case 1:
                alert("Lütfen telefon kodunuzu giriniz.");
                break;
            case 2:
                alert("Please enter your phone code.");
                break;
        }
        document.getElementById('code').focus();
        return false;
    }
    if (document.getElementById('phone').value == "Telefon (numara)" || document.getElementById('phone').value == "Phone (number)") {
        switch (lan) {
            case 1:
                alert("Lütfen telefon numaranızı giriniz.");
                break;
            case 2:
                alert("Please enter your phone number.");
                break;
        }
        document.getElementById('phone').focus();
        return false;
    }
    if (filteremail.test(document.getElementById('email').value) == false) {
        switch (lan) {
            case 1:
                alert("Lütfen geçerli bir e-posta adresi yazınız.");
                break;
            case 2:
                alert("Please supply a valid email address.");
                break;
        }
        document.getElementById('email').focus();
        return false;
    }
    if (document.getElementById('kurye_state_id').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen kuryenin hangi ilden alınacağını seçiniz.");
                break;
            case 2:
                alert("Please choose the state from which the cargo will be picked-up.");
                break;
        }
        document.getElementById('kurye_state_id').focus();
        return false;
    }
    if (document.getElementById('kurye_town_id').value == "-1") {
        switch (lan) {
            case 1:
                alert("Lütfen ilçe ya da semt seçiniz.");
                break;
            case 2:
                alert("Please choose town or district.");
                break;
        }
        document.getElementById('kurye_town_id').focus();
        return false;
    }
    if (lan == 1) {
        if (document.getElementById('kurye_adres').value == "Mahalle / cadde / sokak ismi giriniz" ) {
            alert("Lütfen mahalle / cadde / sokak ismi giriniz.");
            return false;
        }
        if (document.getElementById('kurye_dis_kapi_no').value == "Dış kapı no") {
            alert("Lütfen dış kapı no giriniz.");
            document.getElementById('kurye_dis_kapi_no').focus();
            return false;
        }
        if (document.getElementById('kurye_ic_kapi_no').value == "İç kapı no") {
            alert("Lütfen iç kapı no giriniz.");
            document.getElementById('kurye_ic_kapi_no').focus();
            return false;
        }
    } else {
        if (document.getElementById('kurye_adres').value == "Quarter / street / avenue name") {
            alert("Please select quarter / street / avenue name.");
            return false;
        }
        if (document.getElementById('kurye_dis_kapi_no').value == "Building Outer Number") {
            alert("Please enter building outer number.");
            document.getElementById('kurye_dis_kapi_no').focus();
            return false;
        }
        if (document.getElementById('kurye_ic_kapi_no').value == "Inner Number") {
            alert("Please enter inner number.");
            document.getElementById('kurye_ic_kapi_no').focus();
            return false;
        }
    }
    return true;
}
function checkStep5Form2(lan) {
    if (checkStep5Form1(lan)) {
        if (document.getElementById('kurye_sube_results').value=="-1") {
            switch (lan) {
                case 1:
                    alert("Lütfen sorumlu şube seçiniz.");
                    break;
                case 2:
                    alert("Please select branch.");
                    break;
            }
            document.getElementById('kurye_sube_results').focus();
            return false;
        }
        if (document.getElementById('kurye_yurticidisi_0').checked) {
            if (document.getElementById('nereye_il').value == "-1") {
                switch (lan) {
                    case 1:
                        alert("Lütfen kuryenin hangi ile gönderileceğini seçiniz.");
                        break;
                    case 2:
                        alert("Please choose arrival state.");
                        break;
                }
                document.getElementById('nereye_il').focus();
                return false;
            }
        } else {
            if (document.getElementById('nereye_ulke').value == "-1") {
                switch (lan) {
                    case 1:
                        alert("Lütfen kuryenin hangi ülkeye gönderileceğini seçiniz.");
                        break;
                    case 2:
                        alert("Please choose arrival country.");
                        break;
                }
                document.getElementById('nereye_ulke').focus();
                return false;
            }
        }
        if (document.getElementById('kurye_sube_results').value == "-1") {
            switch (lan) {
                case 1:
                    alert("Lütfen kuryenin çağrılacağı şubeyi seçiniz.");
                    break;
                case 2:
                    alert("Please select a branch.");
                    break;
            }
            document.getElementById('kurye_sube_results').focus();
            return false;
        }
        document.getElementById('ButtonKurye2').style.display = 'none';
    } else {
        return false;
    }
}




/* Siteyi Terk Etme */

var win;
var staying_in_site = false;
var from_popup = false;

function paL() {
    //var e = window.event.srcElement;
    //alert(e.tagName);
    staying_in_site = true;
}

function poL() {
    if (staying_in_site) {
        return;
    } else {
        if (win == undefined) {
            //win = open('https://anket.araskargo.com.tr/', '', 'width=1024,height=600,top=50,left=50,scrollbars=yes');
        }
    }
}



/* FAQ */

function faqC(prefix, id) {
    var i = 1;
    var obj = document.getElementById(prefix + '1');
    do {
        document.getElementById(prefix + i).style.display = 'none';
        i++;
        obj = document.getElementById(prefix + i);
    }
    while (obj != null);
    document.getElementById(prefix + id).style.display = 'block';
}