import { defineComponent, onMounted, ref } from "vue";
import "./ArmyUnitDetail.css"
import { ArmyUnit } from "@/models/ArmyUnit.js";

export default defineComponent({
  components: {
  },
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const masterData= ref(new ArmyUnit);
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