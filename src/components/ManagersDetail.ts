import { defineComponent, onMounted, ref } from 'vue'
import './ManagersDetail.css'
import { Managers } from '@/models/Managers.js'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import type { ArmyUnit } from '@/models/ArmyUnit'
import dayjs, { Dayjs } from "dayjs";

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new Managers())
    const unitType = ref(CommonStored.UnitType)
    const ranks = ref(CommonStored.Ranks)
    const positions = ref(CommonStored.Positions)
  
    const armyUnits: any = ref([])
    onMounted(async () => {
      // ...
    })
    const show = async (data: Managers) => {
      showForm.value = true
      masterData.value = data
      masterData.value.DateOfBirth  = dayjs(masterData.value.DateOfBirth)
      const res: BaseRespone = await axios.get('ArmyUnit/SelectAll')
      if (res && res.Success && res.Data) {
        armyUnits.value = <Array<Managers>>res.Data
      }
    }
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          const res: BaseRespone = await axios.post('Managers/SaveData', Array<Managers>(masterData.value))
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
    const cboRank_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.RankName = r['label'];
      } catch (error) {
        console.error(error)
      }
    }
    const cboPosition_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.PositionName = r['label'];
      } catch (error) {
        console.error(error)
      }
    };
    const cboArmyUnit_Change = (e: any, r: ArmyUnit) => {
      try {
        // ...
        masterData.value.ArmyUnitName = r.Name;
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
      cboRank_Change,
      cboPosition_Change,
      ranks,
      positions,
      cboArmyUnit_Change,
      dayjs
    }
  }
})
