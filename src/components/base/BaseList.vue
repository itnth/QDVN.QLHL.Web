,
<template>
  <a-row>
    <a-col :span="24">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="route.meta.title"
        @back="
          () => {
            $router.back()
          }
        "
      >
        <a-row>
          <a-col :span="24">
            <a-button class="mr-2" type="primary" @click="add_Click">Thêm</a-button>
            <a-button @click="reload_Click" :icon="h(ReloadOutlined)" type="primary">Nạp</a-button>
          </a-col>
          <a-col class="pt-4" :span="24">
            <a-table
              size="middle"
              :scroll="{ y: 650 }"
              :columns="$props.columns"
              :data-source="$props.dataBinding"
              rowKey="Id"
              class="nth-table-style"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'operation'">
                  <a-button @click="edit_Click(record)" class="mr-2" type="primary">Sửa</a-button>
                  <a-popconfirm
                    title="Bạn có muốn xóa không?"
                    @confirm="confirmDelete_Click(record)"
                  >
                    <a-button type="primary" danger>Xóa</a-button>
                  </a-popconfirm>
                </template>
              </template>
            </a-table>
          </a-col>
        </a-row>
      </a-page-header></a-col
    >
  </a-row>
</template>
<script lang="ts" src="./BaseList.ts" />
