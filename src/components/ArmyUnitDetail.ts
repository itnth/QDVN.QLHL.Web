import { defineComponent, onMounted, ref } from "vue";
import "./ArmyUnitDetail.css"
import { reactive } from 'vue';
import type { ArmyUnit } from "@/models/ArmyUnit.ts";

interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }
export default defineComponent({
    components: {
    },
    props : ['isShow',],
    setup(props, ctx) {
        const formState = reactive<ArmyUnit>;
          const onFinish = (values: any) => {
            console.log('Success:', values);
          };
          
          const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
          };
        const isShow = ref<boolean>(props.isShow);
        onMounted(() => {
            // ...
        });
        return {
            formState,
            onFinish,
            onFinishFailed,
            isShow
        }
    },
})