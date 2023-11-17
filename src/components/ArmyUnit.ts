import { defineComponent, onMounted, ref } from "vue";
import "./ArmyUnit.css"
import ArmyUnitDetail from "./ArmyUnitDetail.vue";
interface DataItem {
    key: number;
    name: string;
    platform: string;
    version: string;
    upgradeNum: number;
    creator: string;
    createdAt: string;
}
interface innerDataItem {
    key: number;
    date: string;
    name: string;
    upgradeNum: string;
}
export default defineComponent({
    components: {
        ArmyUnitDetail
    },
    setup(props, ctx) {
        onMounted(() => {
            // ...
        });
        const armyUnitDetail = ref(ArmyUnitDetail);
        const columns = [
            { title: 'Mã đơn vị', dataIndex: 'name', key: 'name' },
            { title: 'Tên đơn vị', dataIndex: 'platform', key: 'platform' },
            { title: 'Loại đơn vị', dataIndex: 'creator', key: 'creator' },
            { title: 'Số điện thoại', dataIndex: 'version', key: 'version' },
            { title: 'Địa chỉ', dataIndex: 'upgradeNum', key: 'upgradeNum' },
            { title: 'Mô tả', dataIndex: 'createdAt', key: 'createdAt' },
            { title: '', key: 'operation' },
        ];
       
        const data: DataItem[] = [];
        for (let i = 0; i < 1000; ++i) {
            data.push({
                key: i,
                name: `Screem ${i + 1}`,
                platform: 'iOS',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: 'Jack',
                createdAt: '2014-12-24 23:12:00',
            });
        }
        const innerColumns = [
            { title: 'Date', dataIndex: 'date', key: 'date' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Status', key: 'state' },
            { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
            },
        ];

        
        const innerData: innerDataItem[] = [];
        for (let i = 0; i < 10; ++i) {
            innerData.push({
                key: i,
                date: '2014-12-24 23:12:00',
                name: `This is production name ${i + 1}`,
                upgradeNum: 'Upgraded: 56',
            });
        }
        const addArmyUnit_Click=()=>{
            try {
                armyUnitDetail.value['isShowFrom'] = true;
            } catch (error) {
                console.log(error)
            }
        }
        return {
            columns,
            data,
            innerColumns,
            innerData,
            armyUnitDetail,
            addArmyUnit_Click
        }
    },
})