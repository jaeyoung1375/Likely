<template>
<div class="mypage-wrapper">

    <div class="title-wrap">
        <h1 class="title">마이페이지</h1>
    </div>
    <div class="clear"></div>
    <div class="mypage-iconbox">
        <ul class="mypage-link">
            <li>
                <a href="/login">
                    <img src="../assets/member.png" class="member">
                    <br>
                    <span>로그인/회원가입</span>
                    <img src="../assets/ico_my_arrow_gray.png" class="mypage-arrow">
                </a>
            </li>
            <li>
                <a href="/orderNoMember">
                    <img src="../assets/orderList.png" class="member">
                    <br>
                    <span>비회원 구매조회</span>
                    <img src="../assets/ico_my_arrow_gray.png" class="mypage-arrow">
                </a>
            </li>
            <li>
                <a href="/cart">
                    <img src="../assets/cart.png" class="member">
                    <br>
                    <span>장바구니</span>
                    <img src="../assets/ico_my_arrow_gray.png" class="mypage-arrow">
                </a>
            </li>
            <li>
                <a href="/faq">
                    <img src="../assets/faq.png" class="member">
                    <br>
                    <span>FAQ</span>
                    <img src="../assets/ico_my_arrow_gray.png" class="mypage-arrow">
                </a>
            </li>
            <li style="border: none;">
                <a href="/callcenter">
                    <img src="../assets/callcenter.png" class="member">
                    <br>
                    <span>고객센터</span>
                    <img src="../assets/ico_my_arrow_gray.png" class="mypage-arrow">
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name : 'Mypage',
}
</script>

<style>
.mypage-wrapper{
    max-width: 1260px;
    margin: 0 auto;
}

.title-wrap{
    margin: 0 20px;
    padding: 40px 0 20px;
    max-width: 1260px;
}
.title{
    text-align: left;
    font-size: 32px;
    font-weight: 700;

}
.mypage-iconbox{
    display: block;
    max-width: 1260px;
    height: 200px;
    border: 1px solid #000;
    background: #fcfcfc;
    margin: 0 20px;
    padding: 50px 0;


}

.mpyage-iconbox:before{
    content: "";
    display: block;
    clear: both;
}
.mypage-iconbox li{
    text-align: center;
    width: 20%;
    float: left;
    border-right: 1px solid #000;
}

.mypage-iconbox li span{
    display: inline-block;
    vertical-align: top;
    color: #7d7d7d;
    line-height: 18px;
    font-size: 1.1em;
    font-weight: 600;
}
.member{
    height: 75px;
    width: 75px;
    opacity: .4;
}
.mypage-arrow{
    width: 12px;
    opacity: .4;
    margin-bottom: 9px;
    margin-left: 5px;
}
</style>