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
  mixins:[BaseList],
  setup(props, ctx) {
    const route = useRoute()
    const data: any = ref([])
    const armyUnitDetail = ref(ArmyUnitDetail)
    const baseList = ref(BaseList)
    const showDetail = ref(false)
    const columns = [
      {
        title: 'Mã đơn vị', dataIndex: 'Code', key: 'Code',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          let valid = false;
          valid = record.Code.toString().toLowerCase().includes(value.toLowerCase())
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.Code.toString().toLowerCase().includes(value.toLowerCase())
                if (valid) {
                  return true;
                }
              });
              children = children.children;
            }
          }
          return valid;
        },
      },
      {
        title: 'Tên đơn vị', dataIndex: 'Name', key: 'Name', customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          let valid = false;
          valid = record.Name.toString().toLowerCase().includes(value.toLowerCase())
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.Name.toString().toLowerCase().includes(value.toLowerCase())
                if (valid) {
                  return true;
                }
              });
              children = children.children;
            }
          }
          return valid;
        },
      },
      { title: 'Loại đơn vị', dataIndex: 'TypeName', key: 'Type' },
      { title: 'Số điện thoại', dataIndex: 'Tel', key: 'Tel' },
      { title: 'Địa chỉ', dataIndex: 'Address', key: 'Address' },
      { title: 'Mô tả', dataIndex: 'Description', key: 'Description' },
      { title: '', key: 'operation' }
    ]
    const innerColumns = [
      { title: 'Mã đơn vị', dataIndex: 'Code', key: 'Code' },
      { title: 'Tên đơn vị', dataIndex: 'Name', key: 'Name' },
      { title: 'Loại đơn vị', dataIndex: 'TypeName', key: 'Type' },
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
        loadData()
      } catch (error) {
        console.error(error)
      }
      // ...
    })
    const loadData = async () => {
      const res: BaseRespone = await axios.get('ArmyUnit/SelectArmyUnit')
      if (res && res.Success && res.Data) {
        data.value = <Array<ArmyUnit>>res.Data
      }
    }
    const addArmyUnit_Click = () => {
      try {
        const record = new ArmyUnit()
        record.EditMode = Enumeration.EditMode.Add
        armyUnitDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const editArmyUnit_Click = (record: ArmyUnit) => {
      try {
        record.EditMode = Enumeration.EditMode.Edit
        armyUnitDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const confirmDelete_Click = async (record: ArmyUnit) => {
      record.EditMode = Enumeration.EditMode.Delete;
      record.children = undefined;
      const res: BaseRespone = await axios.post('ArmyUnit/SaveData', Array<ArmyUnit>(record))
      if (res && res.Success) {
        loadData();
      }
    }
    const SaveSuccessDetail = (success: any) => {
      if (success) {
        loadData();
      }
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
      showDetail,
      SaveSuccessDetail,
      loadData
    }
  }
})
