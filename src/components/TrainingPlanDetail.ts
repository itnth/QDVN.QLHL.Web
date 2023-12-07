import { defineComponent, onMounted, ref } from 'vue'
import './TrainingPlanDetail.css'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { TrainingPlan } from "@/models/TrainingPlan"
import dayjs, { Dayjs } from "dayjs";

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new TrainingPlan())
    const types = ref(CommonStored.DeviceTypes)
    onMounted(async () => {
      // ...
    })
    const show = async (data: TrainingPlan) => {
      showForm.value = true
      masterData.value = data
    }
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          const res: BaseRespone = await axios.post('TrainingPlan/SaveData', Array<TrainingPlan>(masterData.value))
          if (res && res.Success && res.Data) {
            // ...
            showForm.value = false;
            ctx.emit('SaveSuccess', true);
          }
        })
      }
    }
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    };
    const cboType_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.TypeName = r.label;
      } catch (error) {
        console.error(error)
      }
    }
    return {
      masterData,
      btnOk_click,
      showForm,
      formRef,
      filterOption,
      show,
      dayjs,
      cboType_Change,
      types
    }
  }
})
