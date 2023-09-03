<template>
    <div class="my-chip">
        <div class="my-all">
            <v-card variant="text" class="conversation-my-chip">{{message}}</v-card>
        </div>
    </div>
</template>
<style>
.my-chip {
    margin-left: 409px !important;
}
.conversation-my-chip{
    text-align: right !important;
    margin-left: 409px !important;
	max-width: 881px !important;
	margin: 22px 46px !important;
	padding: 22px 46px !important;
	border-radius: 120px !important;
	background-color: white !important;
	color: black !important;
    font-family: Pretendard !important;
	font-size: 40px !important;
	font-style: normal !important;
	font-weight: 700 !important;
	line-height: normal !important;
    border: 6px solid #FFB547 !important;
}


</style>
<script>
export default{
    props:{
        message: String,
    }
}
</script>