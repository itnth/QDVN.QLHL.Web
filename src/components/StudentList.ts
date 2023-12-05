import { defineComponent, onMounted, ref } from "vue";
import "./StudentList.css"
import { Student } from "@/models/Student.js";
import type { BaseRespone } from "@/models/BaseRespone";
import axios from "@/common/axios";
import { Enumeration } from "@/common/Enum";
import moment from "moment";
import StudentDetail from "./StudentDetail.vue";
import BaseList from './base/BaseList.vue'

export default defineComponent({
    components: {
        StudentDetail,
        BaseList
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
            loadData();
        })
        const studentDetail = ref(StudentDetail)
        const data: any = ref([]);
        const columns = [
            {
                title: 'Mã học viên', dataIndex: 'Code', key: 'Code',
                customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Code.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên học viên', dataIndex: 'FullName', key: 'FullName', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Ngày sinh', dataIndex: 'DateOfBirth', key: 'DateOfBirth',
            },
            { title: 'Số điện thoại', dataIndex: 'Mobile', key: 'Mobile' },
            { title: 'Cấp bậc', dataIndex: 'RankName', key: 'Rank' },
            { title: 'Chức vụ', dataIndex: 'PositionName', key: 'Position' },
            { title: 'Đơn vị', dataIndex: 'ArmyUnitName', key: 'ArmyUnitName' },
            { title: 'Địa chỉ', dataIndex: 'Address', key: 'Address' },
            { title: 'Ngày nhập học', dataIndex: 'StartTime', key: 'StartTime' },

            { title: '', key: 'operation' }
        ];
        const add_Click = () => {
            try {
                const record = new Student()
                record.EditMode = Enumeration.EditMode.Add
                studentDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const edit_Click = (record: Student) => {
            try {
                record.EditMode = Enumeration.EditMode.Edit
                studentDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const confirmDelete_Click = async (record: Student) => {
            record.EditMode = Enumeration.EditMode.Delete;
            const res: BaseRespone = await axios.post('Student/SaveData', Array<Student>(record))
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
            const res: BaseRespone = await axios.get('Student/SelectAll')
            if (res && res.Success && res.Data) {
                data.value = <Array<Student>>res.Data
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
            studentDetail, moment
        }
    },
})