import { defineComponent, onMounted, ref } from "vue";
import "./DeviceManagerDetail.css"
import { DeviceManager } from "@/models/DeviceManager";
import type { BaseRespone } from "@/models/BaseRespone";
import axios from "@/common/axios";
import { Enumeration } from "@/common/Enum";
import moment from "moment";
import DeviceManagerDetail from "./DeviceManagerDetail.vue";
import BaseList from './base/BaseList.vue'

export default defineComponent({
    components: {
        DeviceManagerDetail,
        BaseList
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
            loadData();
        })
        const deviceManagerDetail = ref(DeviceManagerDetail)
        const data: any = ref([]);
        const columns = [
            {
                title: 'Mã trang bị', dataIndex: 'Code', key: 'Code',
                customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Code.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Tên trang bị', dataIndex: 'Name', key: 'Name', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Loại trang bị', dataIndex: 'TypeName', key: 'TypeName', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            {
                title: 'Kích thước', dataIndex: 'Size', key: 'Size', customFilterDropdown: true,
                onFilter: (value: any, record: any) => {
                    return record.Name.toString().toLowerCase().includes(value.toLowerCase());
                },
            },
            { title: '', key: 'operation' }
        ];
        const add_Click = () => {
            try {
                const record = new DeviceManager()
                record.EditMode = Enumeration.EditMode.Add
                deviceManagerDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const edit_Click = (record: DeviceManager) => {
            try {
                record.EditMode = Enumeration.EditMode.Edit
                deviceManagerDetail.value.show(record)
            } catch (error) {
                console.log(error)
            }
        };
        const confirmDelete_Click = async (record: DeviceManager) => {
            record.EditMode = Enumeration.EditMode.Delete;
            const res: BaseRespone = await axios.post('DeviceManager/SaveData', Array<DeviceManager>(record))
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
            const res: BaseRespone = await axios.get('DeviceManager/SelectAll')
            if (res && res.Success && res.Data) {
                data.value = <Array<DeviceManager>>res.Data
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
            deviceManagerDetail, moment
        }
    },
})