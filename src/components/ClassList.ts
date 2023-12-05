import { defineComponent, onMounted, ref } from "vue";
import "./ClassList.css"
import { Class } from "@/models/Class";
import type { BaseRespone } from "@/models/BaseRespone";
import axios from "@/common/axios";
import { Enumeration } from "@/common/Enum";
import moment from "moment";
import ClassDetail from "./ClassDetail.vue";
import BaseList from './base/BaseList.vue'

export default defineComponent({
    components: {
        ClassDetail,
        BaseList
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
            loadData();
        })
        const classDetail = ref(ClassDetail)
        const data: any = ref([]);
        const columns = [
            {
                title: 'Mã lớp', dataIndex: 'Code', key: 'Code',
                customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Code.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên lớp', dataIndex: 'Name', key: 'Name', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            { title: '', key: 'operation' }
        ];
        const add_Click = () => {
            try {
                const record = new Class()
                record.EditMode = Enumeration.EditMode.Add
                classDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const edit_Click = (record: Class) => {
            try {
                record.EditMode = Enumeration.EditMode.Edit
                classDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const confirmDelete_Click = async (record: Class) => {
            record.EditMode = Enumeration.EditMode.Delete;
            const res: BaseRespone = await axios.post('Class/SaveData', Array<Class>(record))
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
            const res: BaseRespone = await axios.get('Class/SelectAll')
            if (res && res.Success && res.Data) {
                data.value = <Array<Class>>res.Data
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
            classDetail, moment
        }
    },
})