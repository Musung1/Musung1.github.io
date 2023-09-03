<template>
<div class="sys-chip">
    <img class ="conversation-img" src="@/assets/monster.png"/>
    <div class="sys-all">
        <v-card class="conversation-sys-chip">{{message}}</v-card>
    </div>
</div>
</template>
<style>
.conversation-img{
    width: 100px;
    height: 115px;
    margin-top: 39px;
}
.sys-chip{
    display:flex;
    align-items: center;
    width: 1200px;
    margin: auto;
    padding: 7px;
}
.sys-all {
    display:flex;
    align-items: center;   
}

.conversation-sys-chip{
    display:flex;
    align-items: center;
    text-align: left !important;
	max-width: 840px !important;
	height: auto !important;
	margin: 0px 46px !important;
	border-radius: 68px 68px 68px 0px !important;
	background-color: #E5E5E5 !important;
	color: black !important;
    font-family: Pretendard !important;
	font-size: 32px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	line-height: normal !important;
    border: 50px solid #E5E5E5 !important;
    box-shadow: none !important;
}


</style>
<script>
export default{
    props:{
        message: String,
    }
}
</script>