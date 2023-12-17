import { computed, defineComponent, onMounted, ref } from 'vue'
import './StudentList.css'
import { Student } from '@/models/Student.js'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { Enumeration } from '@/common/Enum'
import moment from 'moment'
import StudentDetail from './StudentDetail.vue'
import BaseList from './base/BaseList.vue'
import type { ArmyUnit } from '@/models/ArmyUnit'

export default defineComponent({
  components: {
    StudentDetail,
    BaseList
  },
  setup(props, ctx) {
    onMounted(() => {
      // ...
      loadData()
    })
    const studentDetail = ref(StudentDetail)
    const data: any = ref([])
    const armyUnits: any = ref([])
    const columns = computed(() => [
      {
        title: 'Mã học viên',
        dataIndex: 'Code',
        key: 'Code',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Code.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Tên học viên',
        dataIndex: 'FullName',
        key: 'FullName',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Name.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Ngày sinh',
        dataIndex: 'DateOfBirth',
        key: 'DateOfBirth',
        DataType: 'Date'
      },
      { title: 'Số điện thoại', dataIndex: 'Mobile', key: 'Mobile' },
      { title: 'Cấp bậc', dataIndex: 'RankName', key: 'Rank' },
      { title: 'Chức vụ', dataIndex: 'PositionName', key: 'Position' },
      {
        title: 'Đơn vị',
        dataIndex: 'ArmyUnitName',
        key: 'ArmyUnitName',
        customFilterDropdown: true,
        isComboboxFilter: true,
        comboboxOptions: armyUnits.value,
        onFilter: (value: any, record: any) => {
          return record.ArmyUnitId == value
        }
      },
      { title: 'Địa chỉ', dataIndex: 'Address', key: 'Address' },
      { title: 'Khóa học', dataIndex: 'SchoolYear', key: 'SchoolYear' },
      { title: '', key: 'operation' }
    ])
    const add_Click = () => {
      try {
        const record = new Student()
        record.EditMode = Enumeration.EditMode.Add
        studentDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const edit_Click = (record: Student) => {
      try {
        record.EditMode = Enumeration.EditMode.Edit
        studentDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const confirmDelete_Click = async (record: Student) => {
      record.EditMode = Enumeration.EditMode.Delete
      const res: BaseRespone = await axios.post('Student/SaveData', Array<Student>(record))
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
      let res: BaseRespone = await axios.get('Student/SelectAll')
      if (res && res.Success && res.Data) {
        data.value = <Array<Student>>res.Data
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
      studentDetail,
      moment
    }
  }
})
