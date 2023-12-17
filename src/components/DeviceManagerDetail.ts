import { defineComponent, onMounted, ref } from 'vue'
import './ClassDetail.css'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { DeviceManager } from '@/models/DeviceManager'
import dayjs, { Dayjs } from 'dayjs'
import type { ArmyUnit } from '@/models/ArmyUnit'

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new DeviceManager())
    const types = ref(CommonStored.DeviceTypes)
    const armyUnits: any = ref([])
    onMounted(async () => {
      // ...
    })

    const cboArmyUnit_Change = (e: any, r: ArmyUnit) => {
      try {
        // ...
        masterData.value.ArmyUnitName = r.Name
      } catch (error) {
        console.error(error)
      }
    }
    const show = async (data: DeviceManager) => {
      showForm.value = true
      masterData.value = data
      const res: BaseRespone = await axios.get('ArmyUnit/SelectAll')
      if (res && res.Success && res.Data) {
        armyUnits.value = <Array<ArmyUnit>>res.Data
      }
    }
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          const res: BaseRespone = await axios.post(
            'DeviceManager/SaveData',
            Array<DeviceManager>(masterData.value)
          )
          if (res && res.Success && res.Data) {
            // ...
            showForm.value = false
            ctx.emit('SaveSuccess', true)
          }
        })
      }
    }
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    const cboType_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.TypeName = r.label
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
      types,
      armyUnits,
      cboArmyUnit_Change
    }
  }
})
