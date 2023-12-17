import { defineComponent, onMounted, ref } from 'vue'
import './MainView.css'
import { RouterLink, RouterView } from 'vue-router'
import axios from '@/common/axios'
import type { BaseRespone } from '@/models/BaseRespone'
import {
  AreaChartOutlined,
  DeploymentUnitOutlined,
  TeamOutlined,
  ToolOutlined,
  SolutionOutlined,
  ScheduleOutlined,
  ClusterOutlined,
  HomeOutlined,
  ReadOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
export default defineComponent({
  components: {
    AreaChartOutlined,
    DeploymentUnitOutlined,
    TeamOutlined,
    ToolOutlined,
    SolutionOutlined,
    ScheduleOutlined,
    ClusterOutlined,
    HomeOutlined,
    ReadOutlined
  },
  setup(props, ctx) {
    const collapsed = ref<boolean>(false)
    const selectedKeys = ref<string[]>(['1'])
    const showLogin = ref(true)
    const loginInfo = ref({})
    const login = async () => {
      const res: BaseRespone = await axios.post('Users/Login', {
        Username: loginInfo.value.Username,
        Password: loginInfo.value.Password
      })
      if (res && res.Success && res.Data) {
        showLogin.value = false
        sessionStorage.setItem('isLoggedIn', 'true')
      } else {
        message.error('Sai tên tài khoản hoặc mật khẩu!')
      }
    }
    onMounted(() => {
      showLogin.value = !sessionStorage.getItem('isLoggedIn')
    })

    return {
      collapsed,
      selectedKeys,
      showLogin,
      loginInfo,
      login
    }
  }
})
