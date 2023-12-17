import { defineComponent, ref } from 'vue'
import './UserManagerDetail.css'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import dayjs from 'dayjs'
import { User } from '@/models/User'
import { h } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {},
  props: [],
  setup(props, ctx) {
    const armyUnits: any = ref([])
    const showForm = ref(false)
    const formRef = ref()
    const masterData = ref(new User())
    const show = async (data: User) => {
      showForm.value = true
      masterData.value = data
      if (masterData.value.ManagingArmyUnitIds?.length > 0) {
        masterData.value.ArrayManagingArmyUnitIds = JSON.parse(masterData.value.ManagingArmyUnitIds)
      }
      const resAU: BaseRespone = await axios.get('ArmyUnit/SelectAll')
      if (resAU && resAU.Success && resAU.Data) {
        armyUnits.value = <Array<ArmyUnit>>resAU.Data
      }
    }
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          if (masterData.value.ArrayManagingArmyUnitIds) {
            masterData.value.ManagingArmyUnitIds = JSON.stringify(
              masterData.value.ArrayManagingArmyUnitIds
            )
          }
          const res: BaseRespone = await axios.post('Users/SaveData', Array<User>(masterData.value))
          if (res && res.Success && res.Data) {
            showForm.value = false
            ctx.emit('SaveSuccess', true)
          }
        })
      }
    }
    return {
      masterData,
      btnOk_click,
      showForm,
      formRef,
      show,
      dayjs,
      PlusOutlined,
      h,
      armyUnits
    }
  }
})
