<template>
  <div class="my-container">
    <v-chip-group
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
        </v-chip-group>
  </div>
</template>
<style scoped>
.my-container{
  max-width: 1225px;
  margin: 10px !important;
  
}
.custom-selected-chip {
  background-color: #FF7C46; /* 선택된 chip 배경색 흰색 */
  border: 2px solid #FF7C46; /* 선택된 chip 테두리 색 오렌지 */
  color:  white; /* 선택된 chip 텍스트색 오렌지 */
  font-size: 36px !important;
  padding-left: 72px !important; padding-right: 72px !important; padding-top: 32px !important; padding-bottom: 32px !important;
}

.custom-chip {
  background-color: white; /* 선택된 chip 배경색 흰색 */
  border: 2px solid orange; /* 선택된 chip 테두리 색 오렌지 */

  color: #FFB547;
  font-size: 36px !important;
  padding-left: 72px !important; padding-right: 72px !important; padding-top: 32px !important; padding-bottom: 32px !important;
  font-family: Pretendard;
  font-weight: 700;
  word-wrap: break-word
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
