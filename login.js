function joinform_check() {
    let email = document.getElementById('email')
    let pw = document.getElementById('pw')
    let rpw = document.getElementById('rpw')
    let nickname = document.getElementById('nickname')
    let name = document.getElementById('name')
    let gender = document.getElementById('gender')
    let birthday = document.getElementById('birthday')
    let mobile1 = document.getElementById('mobile1')
    let mobile2 = document.getElementById('mobile2')
    let mobile3 = document.getElementById('mobile3')
    let zip_code = document.getElementById('zip_code')
    let ch1 = document.getElementById('ch1')
    let ch2 = document.getElementById('ch2')


    if(email.value == ""){
        alert('아이디를 입력하시오.')
        email.focus()
        return false
    }

    let emailCheck = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (!emailCheck.test(email.value)){
        alert('아이디형식에 맞게 입력하시오')
        email.focus()
        return false
    }

    if(pw.value == ""){
        alert('비밀번호를 입력하시오.')
        pw.focus()
        return false
    }

    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*-+])(?=.*[0-9]).{6,12}$/;

    if (!pwdCheck.test(pw.value)){
        alert('비밀번호 형식에 맞게 입력하시오')
        pw.focus()
        return false
    }

    if(rpw.value == ""){
        alert('비밀번호를 한 번 더 입력하시오.')
        rpw.focus()
        return false
    }

    if (rpw.value !== pw.value){
        alert('비밀번호가 일치하지 않습니다.')
        rpw.focus()
        return false
    }

    if(nickname.value == ""){
        alert('필명을 입력하시오.')
        nickname.focus()
        return false
    }

    let nicknameCheck = /^[가-힣]{2,6}$/;

    if (!nicknameCheck.test(nickname.value)){
        alert('필명 형식에 맞게 입력하시오.')
        nickname.focus()
        return false
    }

    if(name.value == ""){
        alert('이름을 입력하시오.')
        name.focus()
        return false
    }

    let nameCheck = /^[가-힣]+$/;

    if (!nameCheck.test(name.value)){
        alert('이름 형식에 맞게 입력하시오.')
        name.focus()
        return false
    }

    if(gender.value == ""){
        alert('성별을 입력하시오.')
        gender.focus()
        return false
    }

    if(birthday.value == ""){
        alert('생일을 입력하시오.')
        birthday.focus()
        return false
    }

    let birthdayCheck = /^[0-9]{8}$/ ;

    if (!birthdayCheck.test(birthday.value)){
        alert('생년월일 형식에 맞게 입력하시오.')
        birthday.focus()
        return false
    }

    if(mobile1.value == ""){
        alert('휴대폰번호를 입력하시오.')
        mobile1.focus()
        return false
    }

    let mobile1Check = /^[0-9]{3}$/ ;

    if (!mobile1Check.test(mobile1.value)){
        alert('3자리의 숫자를 입력하시오. ex) 010, 011')
        mobile1.focus()
        return false
    }

    if(mobile2.value == ""){
        alert('휴대폰번호를 입력하시오.')
        mobile2.focus()
        return false
    }

    let mobile2Check = /^[0-9]{4}$/ ;

    if (!mobile2Check.test(mobile2.value)){
        alert('4자리의 숫자를 입력하시오.')
        mobile2.focus()
        return false
    }
    
    if(mobile3.value == ""){
        alert('휴대폰번호를 입력하시오.')
        mobile3.focus()
        return false
    }

    let mobile3Check = /^[0-9]{4}$/ ;

    if (!mobile3Check.test(mobile3.value)){
        alert('4자리의 숫자를 입력하시오.')
        mobile3.focus()
        return false
    }

    if(zip_code.value == ""){
        alert('우편번호를 입력하시오.')
        zip_code.focus()
        return false
    }

    let zip_codeCheck = /^[0-9]+$/;

    if (!zip_codeCheck.test(zip_code.value)){
        alert('우편번호 형식에 맞게 입력하시오.')
        zip_code.focus()
        return false
    }

    if (!ch1.checked) {
        alert("이용약관 확인 후 체크하시오.");
        ch1.focus();
        return false;
    }

    if (!ch2.checked) {
        alert("개인정보취급방침 확인 후 체크하시오.");
        ch2.focus();
        return false;
    }
}

$(function(){
    $('#ch1').click(function(){
        $('.ch1_pop').addClass('on')
    })

    $('.ch1_pop button').click(function(){
        $('.ch1_pop').removeClass('on')
    })

    $('#ch2').click(function(){
        $('.ch2_pop').addClass('on')
    })

    $('.ch2_pop button').click(function(){
        $('.ch2_pop').removeClass('on')
    })
})
