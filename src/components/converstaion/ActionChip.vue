<template>
    <div>
    <v-chip variant="text" class="end-chip" @click="next">다음 주제로 넘어가기</v-chip>
    <v-chip variant="text" class="next-chip" @click="end">대화 끝내기</v-chip>
</div>
</template>
<script>
export default {
    props:{
        isEnd: Boolean
    },
    methods:{
        next(){

        },
        end(){
            this.$emit('send-data', !this.isEnd);
        }
    }
}
</script>
<style>
.end-chip{
background-color: #FFB547 !important; 
color: white !important; 
}
.next-chip{
background-color: #FF7C46 !important;
color: white !important; 
}
</style>