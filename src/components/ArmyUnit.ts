import { defineComponent, onMounted, ref } from 'vue'
import './ArmyUnit.css'
import { h } from 'vue'
import ArmyUnitDetail from './ArmyUnitDetail.vue'
import { useRoute } from 'vue-router'
import { ReloadOutlined } from '@ant-design/icons-vue'
import BaseList from './base/BaseList.vue'
import axios from '@/common/axios'
import type { BaseRespone } from '@/models/BaseRespone'
import { ArmyUnit } from '@/models/ArmyUnit'
import { Enumeration } from '@/common/Enum'

export default defineComponent({
  components: {
    ArmyUnitDetail,
    ReloadOutlined,
    BaseList
  },
  setup(props, ctx) {
    const route = useRoute()
    const data: any = ref([])
    const armyUnitDetail = ref(ArmyUnitDetail)
    const baseList = ref(BaseList)
    const showDetail = ref(false)
    const columns = [
      { title: 'Mã đơn vị', dataIndex: 'Code', key: 'Code' },
      { title: 'Tên đơn vị', dataIndex: 'Name', key: 'Name' },
      { title: 'Loại đơn vị', dataIndex: 'Type', key: 'Type' },
      { title: 'Số điện thoại', dataIndex: 'Tel', key: 'Tel' },
      { title: 'Địa chỉ', dataIndex: 'Address', key: 'Address' },
      { title: 'Mô tả', dataIndex: 'Description', key: 'Description' },
      { title: '', key: 'operation' }
    ]
    const innerColumns = [
      { title: 'Mã đơn vị', dataIndex: 'Code', key: 'Code' },
      { title: 'Tên đơn vị', dataIndex: 'Name', key: 'Name' },
      { title: 'Loại đơn vị', dataIndex: 'Type', key: 'Type' },
      { title: 'Số điện thoại', dataIndex: 'Tel', key: 'Tel' },
      { title: 'Địa chỉ', dataIndex: 'Address', key: 'Address' },
      { title: 'Mô tả', dataIndex: 'Description', key: 'Description' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation'
      }
    ]

    onMounted(async () => {
      try {
        const res: BaseRespone = await axios.get('ArmyUnit/SelectAll')
        if (res && res.Success && res.Data) {
          data.value = <Array<ArmyUnit>>res.Data
        }
      } catch (error) {
        console.error(error)
      }
      // ...
    })
    const addArmyUnit_Click = () => {
      try {
        const record = new ArmyUnit()
        record.EditMode = Enumeration.EditMode.Edit
        armyUnitDetail.value['masterData'] = record
        armyUnitDetail.value['showForm'] = true
      } catch (error) {
        console.log(error)
      }
    }
    const editArmyUnit_Click = (record: ArmyUnit) => {
      try {
        record.EditMode = Enumeration.EditMode.Edit
        armyUnitDetail.value['masterData'] = record
        armyUnitDetail.value['showForm'] = true
      } catch (error) {
        console.log(error)
      }
    }
    const confirmDelete_Click = (record: ArmyUnit) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(true), 3000)
      })
    }
    return {
      columns,
      data,
      innerColumns,
      armyUnitDetail,
      addArmyUnit_Click,
      editArmyUnit_Click,
      confirmDelete_Click,
      h,
      ReloadOutlined,
      baseList,
      route,
      showDetail
    }
  }
})
