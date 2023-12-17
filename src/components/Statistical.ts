import { defineComponent, onMounted, ref } from 'vue'
import './Statistical.css'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import type { Student } from '@/models/Student'
import type { Class } from '@/models/Class'
export default defineComponent({
  components: {},
  setup(props, ctx) {
    const reportOption = ref({ Type: 1 })
    const armyUnits = ref([])
    const subjects = ref([])
    const reportData = ref([])
    const reportRankSummary = ref({})
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    const cboArmyUnit_Change = (e, r) => {
      if (!r || r.Type == 'TIEUDOI' || r.Type == 'TRUNGDOI') {
        reportOption.value.Type = 1
      } else {
        reportOption.value.Type = 2
      }
    }
    const btnGetData_Click = async () => {
      try {
        const res: BaseRespone = await axios.get('Report/LevelOfDiligence', {
          params: {
            armyUnitId: reportOption.value.ArmyUnitId,
            subjectId: reportOption.value.SubjectId,
            type: reportOption.value.Type || 1
          }
        })
        if (res && res.Success && res.Data) {
          reportData.value = res.Data
          if (reportOption.value.Type == 1) {
            reportRankSummary.value.NotGood = Math.round(
              (res.Data.filter((x) => x.Point <= 4).length / res.Data.length) * 100
            )
            reportRankSummary.value.Good = 100 - reportRankSummary.value.NotGood
          }
        }
      } catch (error) {
        console.error(error)
      }
    }
    const summaryColumns = [
      {
        title: 'Đơn vị',
        dataIndex: 'ArmyUnitName',
        key: 'ArmyUnitName'
      },
      {
        title: 'Đạt (%)',
        dataIndex: 'Good',
        key: 'Good'
      },
      {
        title: 'Không đạt (%)',
        dataIndex: 'NotGood',
        key: 'NotGood'
      }
    ]
    const columns = [
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
        title: 'Tổng số buổi vắng',
        dataIndex: 'TotalAbsence',
        key: 'TotalAbsence',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.TotalAbsence == value
        }
      },
      {
        title: 'Mức độ chuyên cần',
        dataIndex: 'LevelOfDiligence',
        key: 'LevelOfDiligence',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.LevelOfDiligence.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Điểm',
        dataIndex: 'Point',
        key: 'Point',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Point == value
        }
      },
      {
        title: 'Xếp loại',
        dataIndex: 'RankName',
        key: 'RankName',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.RankName.toString().toLowerCase().includes(value.toLowerCase())
        }
      }
    ]
    onMounted(async () => {
      const res: BaseRespone = await axios.get('ArmyUnit/SelectAll')
      if (res && res.Success && res.Data) {
        armyUnits.value = <Array<Student>>res.Data
      }
      const resClass: BaseRespone = await axios.get('Subject/SelectAll')
      if (resClass && resClass.Success && resClass.Data) {
        subjects.value = <Array<Class>>resClass.Data
      }
    })
    return {
      reportOption,
      armyUnits,
      subjects,
      filterOption,
      columns,
      btnGetData_Click,
      reportData,
      reportRankSummary,
      cboArmyUnit_Change,
      summaryColumns
    }
  }
})
