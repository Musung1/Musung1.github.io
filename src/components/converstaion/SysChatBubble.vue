<template>
<div class="sys-chip">
    <img class ="conversation-img" src="@/assets/monster.png"/>
    <div class="sys-all">
        <v-card class="conversation-sys-chip pa-2">{{message}}</v-card>
    </div>
</div>
</template>
<style>
.conversation-img{
    width: 120px;
    height: 136px;
    margin-top: 39px;
}
.sys-chip{
    display:flex;
    align-items: center;
}
.sys-all {
    /* display:flex;
    align-items: center;
    text-align: left !important;
	width: 1001px !important;
	height: 176px !important;
	margin: 22px 46px !important;
	border-radius: 68px 68px 68px 0px !important;
	background-color: #646464 !important;
	color: white !important;
    font-family: Pretendard !important;
	font-size: 40px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	line-height: normal !important; */
}

.conversation-sys-chip{
    /* width: 841px;
    background-color: transparent !important;
    margin-left: 80px;
    box-shadow: none !important;
     */
    display:flex;
    align-items: center;
    text-align: left !important;
	max-width: 1001px !important;
	height: auto !important;
	margin: 0px 46px !important;
	border-radius: 68px 68px 68px 0px !important;
    
	background-color: #646464 !important;
	color: white !important;
    font-family: Pretendard !important;
	font-size: 40px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	line-height: normal !important;
}


</style>
<script>
export default{
    props:{
        message: String,
    }
}
</script>