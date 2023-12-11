import { defineComponent, onMounted, ref } from 'vue'
import './StudentDetail.css'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import type { ArmyUnit } from '@/models/ArmyUnit'
import { Student } from "@/models/Student.js"
import dayjs, { Dayjs } from "dayjs";
import  { Class } from '@/models/Class'

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new Student())
    const unitType = ref(CommonStored.UnitType)
    const ranks = ref(CommonStored.Ranks)
    const positions = ref(CommonStored.Positions)
    const classs = ref([])
    const armyUnits: any = ref([])
    onMounted(async () => {
      // ...
    })
    const show = async (data: Student) => {
      showForm.value = true
      masterData.value = data
      masterData.value.DateOfBirth  = dayjs(masterData.value.DateOfBirth)
      masterData.value.StartTime  = dayjs(masterData.value.StartTime)
      const res: BaseRespone = await axios.get('ArmyUnit/SelectAll')
      if (res && res.Success && res.Data) {
        armyUnits.value = <Array<Student>>res.Data
      }
      const resClass: BaseRespone = await axios.get('Class/SelectAll')
      if (resClass && resClass.Success && resClass.Data) {
        classs.value = <Array<Class>>resClass.Data
      }
    }
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          const res: BaseRespone = await axios.post('Student/SaveData', Array<Student>(masterData.value))
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
    const cboClass_Change = (e: any, r: Class) => {
      try {
        // ...
        masterData.value.ClassName = r.Name;
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
      dayjs,
      cboClass_Change,
      classs
    }
  }
})
