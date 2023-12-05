import { defineComponent, onMounted, ref } from 'vue'
import './ClassDetail.css'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import type { ArmyUnit } from '@/models/ArmyUnit'
import { Class } from "@/models/Class.js"
import dayjs, { Dayjs } from "dayjs";

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new Class())
    onMounted(async () => {
      // ...
    })
    const show = async (data: Class) => {
      showForm.value = true
      masterData.value = data
    }
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          const res: BaseRespone = await axios.post('Class/SaveData', Array<Class>(masterData.value))
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
    
    return {
      masterData,
      btnOk_click,
      showForm,
      formRef,
      filterOption,
      show,
      dayjs,
    }
  }
})
