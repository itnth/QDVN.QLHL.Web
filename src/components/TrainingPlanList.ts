import { computed, defineComponent, onMounted, ref } from 'vue'
import './TrainingPlanList.css'
import { TrainingPlan } from '@/models/TrainingPlan'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { Enumeration } from '@/common/Enum'
import moment from 'moment'
import TrainingPlanDetail from './TrainingPlanDetail.vue'
import BaseList from './base/BaseList.vue'
import type { ArmyUnit } from '@/models/ArmyUnit'

export default defineComponent({
  components: {
    TrainingPlanDetail,
    BaseList
  },
  setup(props, ctx) {
    const armyUnits: any = ref([])
    onMounted(() => {
      // ...
      loadData()
    })
    const trainingPlanDetail = ref(TrainingPlanDetail)
    const data: any = ref([])
    const columns = computed(() => [
      {
        title: 'Mã kế hoạch',
        dataIndex: 'Code',
        key: 'Code',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          let valid = false
          valid = record.Code.toString().toLowerCase().includes(value.toLowerCase())
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.Code.toString().toLowerCase().includes(value.toLowerCase())
                if (valid) {
                  return true
                }
              })
              children = children.children
            }
          }
          return valid
        }
      },
      {
        title: 'Tên kế hoạch',
        dataIndex: 'Name',
        key: 'Name',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          let valid = false
          valid = record.Code.toString().toLowerCase().includes(value.toLowerCase())
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.Code.toString().toLowerCase().includes(value.toLowerCase())
                if (valid) {
                  return true
                }
              })
              children = children.children
            }
          }
          return valid
        }
      },
      {
        title: 'Tên nội dung',
        dataIndex: 'SubjectName',
        key: 'SubjectName ',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          let valid = false
          valid = record.SubjectName.toString().toLowerCase().includes(value.toLowerCase())
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.SubjectName.toString().toLowerCase().includes(value.toLowerCase())
                if (valid) {
                  return true
                }
              })
              children = children.children
            }
          }
          return valid
        }
      },
      // {
      //   title: 'Ngày thực hiện',
      //   dataIndex: 'StartDate',
      //   key: 'StartDate',
      //   DataType: 'Date'
      // },
      // {
      //   title: 'Ngày kết thúc',
      //   dataIndex: 'EndDate',
      //   key: 'EndDate',
      //   DataType: 'Date'
      // },
      {
        title: 'Số tiết',
        dataIndex: 'NumberOfLesson',
        key: 'NumberOfLesson ',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          let valid = false
          valid = record.NumberOfLesson == value
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.NumberOfLesson == value
                if (valid) {
                  return true
                }
              })
              children = children.children
            }
          }
          return valid
        }
      },
      {
        title: 'Đơn vị',
        dataIndex: 'ArmyUnitName',
        key: 'ArmyUnitName',
        customFilterDropdown: true,
        isComboboxFilter: true,
        comboboxOptions: armyUnits.value,
        onFilter: (value: any, record: any) => {
          let valid = false
          valid = record.ArmyUnitId == value
          if (!valid) {
            let children = record.children
            while (children && children.length > 0) {
              children.forEach((item: any) => {
                valid = item.ArmyUnitId == value
                if (valid) {
                  return true
                }
              })
              children = children.children
            }
          }
          return valid
        }
      },
      { title: '', key: 'operation', isShowViewButton: true }
    ])
    const innerColumns = [
      {
        title: 'Mã kế hoạch',
        dataIndex: 'Code',
        key: 'Code',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Code.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Tên kế hoạch',
        dataIndex: 'Name',
        key: 'Name',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Name.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Tên môn học',
        dataIndex: 'SubjectName',
        key: 'SubjectName ',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Name.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      // {
      //   title: 'Ngày thực hiện',
      //   dataIndex: 'StartDate',
      //   key: 'StartDate',
      //   DataType: 'Date'
      // },
      // {
      //   title: 'Ngày kết thúc',
      //   dataIndex: 'EndDate',
      //   key: 'EndDate',
      //   DataType: 'Date'
      // },
      {
        title: 'Số tiết',
        dataIndex: 'NumberOfLesson',
        key: 'NumberOfLesson ',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.NumberOfLesson == value
        }
      },
      {
        title: 'Đơn vị',
        dataIndex: 'ArmyUnitName',
        key: 'ArmyUnitName ',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.ArmyUnitName.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      { title: '', key: 'operation' }
    ]
    const add_Click = () => {
      try {
        const record = new TrainingPlan()
        record.EditMode = Enumeration.EditMode.Add
        trainingPlanDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const edit_Click = (record: TrainingPlan) => {
      try {
        record.EditMode = Enumeration.EditMode.View
        trainingPlanDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const confirmDelete_Click = async (record: TrainingPlan) => {
      record.EditMode = Enumeration.EditMode.Delete
      const res: BaseRespone = await axios.post(
        'TrainingPlan/SaveData',
        Array<TrainingPlan>(record)
      )
      if (res && res.Success) {
        loadData()
      }
    }
    const SaveSuccessDetail = (success: any) => {
      if (success) {
        loadData()
      }
    }
    const loadData = async () => {
      let res: BaseRespone = await axios.get('TrainingPlan/SelectTrainingPlan')
      if (res && res.Success && res.Data) {
        data.value = <Array<TrainingPlan>>res.Data
      }
      res = await axios.get('ArmyUnit/SelectAll')
      if (res && res.Success && res.Data) {
        armyUnits.value = <Array<ArmyUnit>>res.Data
      }
    }
    return {
      columns,
      add_Click,
      edit_Click,
      confirmDelete_Click,
      SaveSuccessDetail,
      data,
      loadData,
      trainingPlanDetail,
      moment,
      innerColumns
    }
  }
})
