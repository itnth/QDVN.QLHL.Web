import { defineComponent, onMounted, reactive, ref, type UnwrapRef } from 'vue'
import './ImplementTrainingPlansDetail.css'
import { CommonStored } from '@/common/CommonStored'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { TrainingPlan } from "@/models/TrainingPlan"
import dayjs, { Dayjs } from "dayjs";
import Editor from '@tinymce/tinymce-vue';
import tinymce from 'tinymce/tinymce';
import { ImplementTrainingPlans } from '@/models/ImplementTrainingPlans'
import { Student } from '@/models/Student'
import { Managers } from '@/models/Managers'
import { cloneDeep } from 'lodash-es';
import { ImplementTrainingPlansParam } from '@/models/ImplementTrainingPlansParam'

export default defineComponent({
  components: { Editor },
  props: [],
  setup(props, ctx) {
    const showForm = ref(false)
    const formRef = ref()
    const trainingPlanDatas = ref([])
    const assignToDatas = ref([])
    const studenDatas = ref([])
    const statusDatas = ref(CommonStored.Status)
    const masterData = ref(new ImplementTrainingPlans())
    const types = ref(CommonStored.DeviceTypes)
    const columns = [
      {
        title: 'Mã học viên',
        dataIndex: 'Code',
        width: '15%',
      },
      {
        title: 'Tên học viên',
        dataIndex: 'FullName',
        width: '50%',
      },
      {
        title: 'Điểm',
        dataIndex: 'Point',
        width: '15%',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
      },
    ];
    onMounted(async () => {
      // ...
      tinymce.init({})
    })
    const dataSource = ref([]);
    const show = async (data: ImplementTrainingPlans) => {
      showForm.value = true
      masterData.value = data
      masterData.value.StartDate = dayjs(masterData.value.StartDate)
      masterData.value.EndDate = dayjs(masterData.value.EndDate)
      let res: BaseRespone = await axios.get('TrainingPlan/SelectAll')
      if (res && res.Success && res.Data) {
        trainingPlanDatas.value = <Array<TrainingPlan>>res.Data
      }
      res = await axios.get('Managers/SelectAll')
      if (res && res.Success && res.Data) {
        assignToDatas.value = <Array<Managers>>res.Data
      }
      res = await axios.post('ImplementTrainingPlans/SelectImplementTrainingPlansByAssignTo', { AssignToId: masterData.value.AssignToId, TrainingPlanId: masterData.value.TrainingPlanId })
      if (res && res.Success && res.Data && res.Data.length > 0) {
        masterData.value = res.Data[0]
        masterData.value.StartDate = dayjs(masterData.value.StartDate)
        masterData.value.EndDate = dayjs(masterData.value.EndDate)
      }
      res = await axios.post('ImplementTrainingPlans/SelectStudentByTrainingPlan',{ Id: masterData.value.Id })
      if (res && res.Success && res.Data) {
        dataSource.value = <Array<Student>>res.Data
      }
    }
    const editableData: UnwrapRef<Record<string, ImplementTrainingPlans>> = reactive({});

    const edit = (key: string) => {
      editableData[key] = cloneDeep(dataSource.value.filter((item: ImplementTrainingPlans) => key === item.Id)[0]);
    };
    const save = (key: string) => {
      Object.assign(dataSource.value.filter((item: ImplementTrainingPlans) => key === item.Id)[0], editableData[key]);
      delete editableData[key];
    };
    const cancel = (key: string) => {
      delete editableData[key];
    };
    const btnOk_click = () => {
      if (masterData.value) {
        formRef.value.validate().then(async () => {
          const param = new ImplementTrainingPlansParam();
          param.ImplementTrainingPlans = Array<ImplementTrainingPlans>(masterData.value);
          param.Students = dataSource.value;
          const res: BaseRespone = await axios.post('ImplementTrainingPlans/SaveImplementTrainingPlans', param)
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
    const cboTrainingPlan_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.TrainingPlanName = r.Name;
        masterData.value.TrainingPlanCode = r.Code;
        masterData.value.StartDate = dayjs(r.StartDate);
        masterData.value.EndDate = dayjs(r.EndDate);
      } catch (error) {
        console.error(error)
      }
    }
    const cboAssignTo_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.AssignToName = r.FullName;
      } catch (error) {
        console.error(error)
      }
    }
    const cbostatus_Change = (e: any, r: any) => {
      try {
        // ...
        masterData.value.StatusName = r.label;
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
      cboTrainingPlan_Change,
      types,
      trainingPlanDatas,
      dataSource,
      edit,
      save,
      cancel,
      columns,
      editableData,
      assignToDatas,
      cboAssignTo_Change,
      cbostatus_Change,
      statusDatas
    }
  }
})

