import { defineComponent, onMounted, ref } from "vue";
import "./TrainingPlanList.css"
import { TrainingPlan } from "@/models/TrainingPlan";
import type { BaseRespone } from "@/models/BaseRespone";
import axios from "@/common/axios";
import { Enumeration } from "@/common/Enum";
import moment from "moment";
import TrainingPlanDetail from "./TrainingPlanDetail.vue";
import BaseList from './base/BaseList.vue'

export default defineComponent({
    components: {
        TrainingPlanDetail,
        BaseList
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
            loadData();
        })
        const trainingPlanDetail = ref(TrainingPlanDetail)
        const data: any = ref([]);
        const columns = [
            {
                title: 'Mã kế hoạch', dataIndex: 'Code', key: 'Code',
                customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Code.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên kế hoạch', dataIndex: 'Name', key: 'Name', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên môn học', dataIndex: 'SubjectName', key: 'SubjectName ', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Ngày thực hiện', dataIndex: 'StartDate', key: 'StartDate', DataType:"Date"
            },
            {
                title: 'Ngày kết thúc', dataIndex: 'EndDate', key: 'EndDate',DataType:"Date"
            },
            { title: '', key: 'operation' }
        ];
        const add_Click = () => {
            try {
                const record = new TrainingPlan()
                record.EditMode = Enumeration.EditMode.Add
                trainingPlanDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const edit_Click = (record: TrainingPlan) => {
            try {
                record.EditMode = Enumeration.EditMode.Edit
                trainingPlanDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const confirmDelete_Click = async (record: TrainingPlan) => {
            record.EditMode = Enumeration.EditMode.Delete;
            const res: BaseRespone = await axios.post('TrainingPlan/SaveData', Array<TrainingPlan>(record))
            if (res && res.Success) {
                loadData();
            }
        };
        const SaveSuccessDetail = (success: any) => {
            if (success) {
                loadData();
            }
        };
        const loadData = async () => {
            const res: BaseRespone = await axios.get('TrainingPlan/SelectAll')
            if (res && res.Success && res.Data) {
                data.value = <Array<TrainingPlan>>res.Data
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
            trainingPlanDetail, moment
        }
    },
})