import { defineComponent, onMounted, ref } from "vue";
import "./MainView.css"
import { RouterLink, RouterView } from 'vue-router'
import {
    AreaChartOutlined,
    DeploymentUnitOutlined,
    TeamOutlined,
    ToolOutlined,
    SolutionOutlined,
    ScheduleOutlined,
    ClusterOutlined
} from '@ant-design/icons-vue'
export default defineComponent({
    components: {
        AreaChartOutlined,
        DeploymentUnitOutlined,
        TeamOutlined,
        ToolOutlined,
        SolutionOutlined,
        ScheduleOutlined,
        ClusterOutlined
    },
    setup(props, ctx) {

        const collapsed = ref<boolean>(false)
        const selectedKeys = ref<string[]>(['1'])

        onMounted(() => {
            // ...
        })

        return {
            collapsed,
            selectedKeys
        }
    },
})