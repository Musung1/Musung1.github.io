<template>
<div class="sys-chip">
    <img class ="conversation-img" src="@/assets/atti_big.png"/>
    <v-card class="conversation-sys-chip pa-2">{{message}}</v-card>
</div>
</template>
<style>
.conversation-img{
    width: 50px;
    height: 50px;
    margin-bottom: auto;
}
.conversation-sys-chip{
    /* height: 100px !important; */
    background-color: #646464 !important; /* 선택된 chip 배경색 흰색 */
    color: white !important; /* 선택된 chip 텍스트색 오렌지 */
    border-radius: 20px!important;
    text-align: left;
    max-width:70%;
}
.sys-chip{
    align-items: center;
    display:flex;
    width:100%;

}
</style>
<script>
export default{
    props:{
        message: String,
    }
}
</script>