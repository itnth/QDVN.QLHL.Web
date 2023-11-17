import { defineComponent, onMounted, ref } from "vue";
import "./ArmyUnitDetail.css"
import { reactive } from 'vue';
import type { ArmyUnit } from "@/models/ArmyUnit.ts";

export default defineComponent({
  components: {
  },
  props: ['isShow'],
  setup(props, ctx) {
    const isShowFrom = ref<boolean>(false);
    const masterData = reactive<ArmyUnit>;
    onMounted(() => {
      // ...
    });
    return {
      masterData,
      isShowFrom
    }
  },
})