<template>
    <div class="my-chip">
        <div class="my-all">
            <v-card variant="text" class="conversation-my-chip">{{message}}</v-card>
        </div>
    </div>
</template>
<style>
.my-chip {
    margin-left: 480px !important;
}
.conversation-my-chip{
    text-align: right !important;
    min-width: 200px !important;
	max-width: 581px !important;
	margin: 22px 46px !important;
	padding: 40px 80px !important;
	border-radius: 120px !important;
	background-color: white !important;
	color: black !important;
    font-family: Pretendard !important;
	font-size: 32px !important;
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