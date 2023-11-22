import { defineComponent, onMounted, ref } from "vue";
import "./ArmyUnitDetail.css"
import { reactive } from 'vue';
import type { ArmyUnit } from "@/models/ArmyUnit.ts";

export default defineComponent({
  components: {
  },
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const masterData = reactive<ArmyUnit>;
    onMounted(() => {
      // ...
    });
    const btnOk_click = ()=>{

    };
    return {
      masterData,
      btnOk_click,
      showForm
    }
  },
})