import { defineComponent, onMounted, ref } from 'vue'
import './ArmyUnitDetail.css'
import { ArmyUnit } from '@/models/ArmyUnit.js'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new ArmyUnit())
    const unitType = ref(CommonStored.UnitType)
    const armyUnits: any = ref([])
    onMounted(async () => {
      // ...
    })
    const show = async (data: ArmyUnit) => {
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
          const res: BaseRespone = await axios.post('ArmyUnit/SaveData', Array<ArmyUnit>(masterData.value))
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
    const cboArmyUnit_Change = (e: any, r: ArmyUnit) => {
      try {
        // ...
        masterData.value.ParentName = r.Name;
      } catch (error) {
        console.error(error)
      }
    }
    const cboType_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.TypeName = r['label'];
      } catch (error) {
        console.error(error)
      }
    }
    return {
      masterData,
      btnOk_click,
      showForm,
      formRef,
      unitType,
      filterOption,
      armyUnits,
      show,
      cboArmyUnit_Change,
      cboType_Change
    }
  }
})
