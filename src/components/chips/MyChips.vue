<template>

    <v-chip-group
    class="my-container"
          v-model="selection"
          mandatory
        >
          <v-chip
          variant="outlined"
            v-for="tag in tags"
            :key="tag"
            :value="tag"
            :class="{ 'custom-selected-chip': isSelected(tag),'custom-chip': !isSelected(tag) }"
            @click="toggleSelection(tag)"
          >
            {{ tag }}
          </v-chip>
          <v-chip variant="outlined" class="my-custom-chip">
            원하는 주제를 적어보세요!
          </v-chip>
        </v-chip-group>

</template>

<style scoped>
.my-container{
  max-width: 1330px;
  margin: 0 auto !important;
  display: flex !important;
  justify-content: center !important;
  text-align: center !important;
  padding-top: 60px !important; 
}
.my-custom-chip{
  color:  rgba(55.25, 55.25, 55.25, 0.50);; /* 선택된 chip 텍스트색 오렌지 */
  border: 2px solid orange; /* 선택된 chip 테두리 색 오렌지 */
  font-size: 36px !important;
  padding-left: 72px !important; padding-right: 72px !important; padding-top: 36px !important; padding-bottom: 32px !important;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word;
  margin: 20px !important;
}
.custom-selected-chip {
  background-color: #FF7C46; /* 선택된 chip 배경색 흰색 */
  border: 2px solid #FF7C46; /* 선택된 chip 테두리 색 오렌지 */
  color:  white; /* 선택된 chip 텍스트색 오렌지 */
  font-size: 36px !important;
  padding-left: 72px !important; padding-right: 72px !important; padding-top: 36px !important; padding-bottom: 32px !important;
  margin: 20px !important;
}

.custom-chip {
  border: 2px solid orange; /* 선택된 chip 테두리 색 오렌지 */
  color: #FFB547;
  font-size: 36px !important;
  padding-left: 72px !important; padding-right: 72px !important; padding-top: 36px !important; padding-bottom: 32px !important;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word;
  margin: 20px !important;
  display: flex !important;
  align-items: center !important;
}
</style>

<script>
  export default {
    
    data: () => ({
      selection:"예의",
      tags: [
        '예의',
        '환경 오염',
        '편식',
        '횡단보도',
        '효도',
        '우정',
        '범죄',
      ],
    }),
    methods: {
    isSelected(chip) {
      return this.selection == chip;
    },
    toggleSelection(chip) {
      this.selection = chip
      this.$emit('send-data', chip);
  },
  }
  }
</script>
