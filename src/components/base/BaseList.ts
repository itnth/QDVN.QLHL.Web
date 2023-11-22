import { defineComponent, defineEmits, onMounted, ref } from "vue";
import "./BaseList.css"
import { h } from 'vue';
import { useRoute } from 'vue-router';
import { ReloadOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        ReloadOutlined
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
        return {
            add_Click,
            edit_Click,
            confirmDelete_Click,
            h,
            ReloadOutlined,
            route,
            reload_Click,
        }
    },
})