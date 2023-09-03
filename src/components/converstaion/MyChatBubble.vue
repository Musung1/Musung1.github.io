<template>
    <div class="my-chip">
        <v-card variant="text" class="conversation-my-chip pa-2">{{message}}</v-card>
    </div>
</template>
<style>
.conversation-my-chip{
    background-color: #7669DFCC !important; /* 선택된 chip 배경색 흰색 */
    color: black !important; /* 선택된 chip 텍스트색 오렌지 */
    margin-left: auto
}
.my-chip{
    float:right;
}
</style>
<script>
export default{
    props:{
        message: String,
    }
}
</script>