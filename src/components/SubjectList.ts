import { defineComponent, onMounted, ref } from "vue";
import "./SubjectList.css"
import { Subject } from "@/models/Subject";
import type { BaseRespone } from "@/models/BaseRespone";
import axios from "@/common/axios";
import { Enumeration } from "@/common/Enum";
import moment from "moment";
import SubjectDetail from "./SubjectDetail.vue";
import BaseList from './base/BaseList.vue'

export default defineComponent({
    components: {
        SubjectDetail,
        BaseList
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
            loadData();
        })
        const subjectDetail = ref(SubjectDetail)
        const data: any = ref([]);
        const columns = [
            {
                title: 'Mã môn', dataIndex: 'Code', key: 'Code',
                customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Code.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên môn', dataIndex: 'Name', key: 'Name', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            { title: '', key: 'operation' }
        ];
        const add_Click = () => {
            try {
                const record = new Subject()
                record.EditMode = Enumeration.EditMode.Add
                subjectDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const edit_Click = (record: Subject) => {
            try {
                record.EditMode = Enumeration.EditMode.Edit
                subjectDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const confirmDelete_Click = async (record: Subject) => {
            record.EditMode = Enumeration.EditMode.Delete;
            const res: BaseRespone = await axios.post('Subject/SaveData', Array<Subject>(record))
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
            const res: BaseRespone = await axios.get('Subject/SelectAll')
            if (res && res.Success && res.Data) {
                data.value = <Array<Subject>>res.Data
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
            subjectDetail, moment
        }
    },
})