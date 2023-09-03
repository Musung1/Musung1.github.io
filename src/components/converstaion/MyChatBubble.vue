<template>
    <div class="my-chip">
        <div class="my-all">
            <v-card variant="text" class="conversation-my-chip pa-2">{{message}}</v-card>
        </div>
    </div>
</template>
<style>
.my-chip {
    margin-left: 409px !important;
}
.conversation-my-chip{
    margin-right: 80px;
    width: 841px;
}
.my-all {
    text-align: right !important;
    margin-left: 409px !important;
	width: 881px !important;
	height: 176px !important;
	margin: 22px 46px !important;
	padding: 22px 46px !important;
	border-radius: 120px !important;
    border: 6px solid #FFB547;
	background-color: white !important;
	color: black !important;
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