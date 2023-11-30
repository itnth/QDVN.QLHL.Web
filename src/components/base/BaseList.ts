import { defineComponent, defineEmits, onMounted, reactive, ref } from "vue";
import "./BaseList.css"
import { h } from 'vue';
import { useRoute } from 'vue-router';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        ReloadOutlined,
        SearchOutlined
    },

    props: ['columns', 'innerColumns', 'dataBinding', 'showChildrens'],
    setup(props, ctx) {
        const route = useRoute();
        // const emit = defineEmits(['add_Click1', 'edit_Click', 'delete_Click', 'reload_Click']);
        onMounted(() => {
            // ...
        });

        const add_Click = (record: any) => {
            try {
                ctx.emit('add_Click', record)
            } catch (error) {
                console.log(error)
            }
        }
        const edit_Click = (record: any) => {
            try {
                ctx.emit('edit_Click', record)
            } catch (error) {
                console.log(error)
            }
        }
        const confirmDelete_Click = (record: any) => {
            try {
                ctx.emit('delete_Click', record)
            } catch (error) {
                console.log(error)
            }
        }
        const reload_Click = (record: any) => {
            try {
                ctx.emit('reload_Click', record)
            } catch (error) {
                console.log(error)
            }
        }
        const state = reactive({
            searchText: '',
            searchedColumn: '',
        });

        const searchInput = ref();
        const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
            confirm();
            state.searchText = selectedKeys[0];
            state.searchedColumn = dataIndex;
        };

        const handleReset = (clearFilters: any) => {
            clearFilters({ confirm: true });
            state.searchText = '';
        };
        return {
            add_Click,
            edit_Click,
            confirmDelete_Click,
            h,
            ReloadOutlined,
            route,
            reload_Click,
            handleSearch,
            handleReset,
            state,
            searchInput
        }
    },
})