import { defineComponent, onMounted, ref } from "vue";
import "./ManagersList.css"
import { Enumeration } from "@/common/Enum";
import { Managers } from "@/models/Managers";
import type { BaseRespone } from "@/models/BaseRespone";
import axios from "@/common/axios";
import BaseList from './base/BaseList.vue'
import ManagersDetail from './ManagersDetail.vue'
import moment from "moment";

export default defineComponent({
    components: {
        BaseList,
        ManagersDetail
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
            loadData();
        })
        const managersDetail = ref(ManagersDetail)
        const data: any = ref([]);
        const columns = [
            {
                title: 'Mã cán bộ', dataIndex: 'Code', key: 'Code',
                customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Code.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên cán bộ', dataIndex: 'FullName', key: 'FullName', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Ngày sinh', dataIndex: 'DateOfBirth', key: 'DateOfBirth', DataType:"Date"
            },
            { title: 'Số điện thoại', dataIndex: 'Mobile', key: 'Mobile' },
            { title: 'Cấp bậc', dataIndex: 'RankName', key: 'Rank' },
            { title: 'Chức vụ', dataIndex: 'PositionName', key: 'Position' },
            { title: 'Đơn vị', dataIndex: 'ArmyUnitName', key: 'ArmyUnitName' },
            { title: 'Địa chỉ', dataIndex: 'Address', key: 'Address' },
            { title: '', key: 'operation' }
        ];
        const addArmyUnit_Click = () => {
            try {
                const record = new Managers()
                record.EditMode = Enumeration.EditMode.Add
                managersDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const editArmyUnit_Click = (record: Managers) => {
            try {
                record.EditMode = Enumeration.EditMode.Edit
                managersDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const confirmDelete_Click = async (record: Managers) => {
            record.EditMode = Enumeration.EditMode.Delete;
            const res: BaseRespone = await axios.post('Managers/SaveData', Array<Managers>(record))
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
            const res: BaseRespone = await axios.get('Managers/SelectAll')
            if (res && res.Success && res.Data) {
                data.value = <Array<Managers>>res.Data
            }
        }
        return {
            columns,
            addArmyUnit_Click,
            editArmyUnit_Click,
            confirmDelete_Click,
            SaveSuccessDetail,
            data,
            loadData,
            managersDetail,moment
        }
    },
})