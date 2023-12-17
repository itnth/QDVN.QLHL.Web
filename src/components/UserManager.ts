import { defineComponent, onMounted, ref } from 'vue'
import './UserManager.css'
import type { BaseRespone } from '@/models/BaseRespone'
import axios from '@/common/axios'
import { Enumeration } from '@/common/Enum'
import moment from 'moment'
import UserManagerDetail from './UserManagerDetail.vue'
import BaseList from './base/BaseList.vue'
import { User } from '@/models/User'

export default defineComponent({
  components: {
    UserManagerDetail,
    BaseList
  },
  setup(props, ctx) {
    onMounted(() => {
      // ...
      loadData()
    })
    const userManagerDetail = ref(UserManagerDetail)
    const data: any = ref([])
    const columns = [
      {
        title: 'Tên đăng nhập',
        dataIndex: 'Username',
        key: 'Username',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Username.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Email.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'Tel',
        key: 'Tel',
        customFilterDropdown: true,
        onFilter: (value: any, record: any) => {
          return record.Tel.toString().toLowerCase().includes(value.toLowerCase())
        }
      },
      { title: '', key: 'operation' }
    ]
    const add_Click = () => {
      try {
        const record = new User()
        record.EditMode = Enumeration.EditMode.Add
        userManagerDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const edit_Click = (record: User) => {
      try {
        record.EditMode = Enumeration.EditMode.Edit
        userManagerDetail.value.show(record)
      } catch (error) {
        console.log(error)
      }
    }
    const confirmDelete_Click = async (record: User) => {
      record.EditMode = Enumeration.EditMode.Delete
      const res: BaseRespone = await axios.post('Users/SaveData', Array<User>(record))
      if (res && res.Success) {
        loadData()
      }
    }
    const SaveSuccessDetail = (success: any) => {
      if (success) {
        loadData()
      }
    }
    const loadData = async () => {
      const res: BaseRespone = await axios.get('Users/SelectAll')
      if (res && res.Success && res.Data) {
        data.value = <Array<User>>res.Data
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
      userManagerDetail,
      moment
    }
  }
})
