<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-sheet
        class="py-4 px-1"
      >
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
      </v-sheet>
    </v-col>
  </v-row>
</template>

<style scoped>
* {background-color: #FEF8F1;}
.custom-selected-chip {
  background-color: orange; /* 선택된 chip 배경색 흰색 */
  color:  white; /* 선택된 chip 텍스트색 오렌지 */
}

.custom-chip {
  border: 2px solid orange; /* 선택된 chip 테두리 색 오렌지 */
  color: orange; /* 선택된 chip 텍스트색 오렌지 */
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
