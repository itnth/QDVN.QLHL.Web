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
              <template
                #customFilterDropdown="{
                  setSelectedKeys,
                  selectedKeys,
                  confirm,
                  clearFilters,
                  column
                }"
              >
                <div style="padding: 8px" v-if="!column.isComboboxFilter">
                  <a-input
                    ref="searchInput"
                    :placeholder="`Search ${column.dataIndex}`"
                    :value="selectedKeys[0]"
                    style="width: 188px; margin-bottom: 8px; display: block"
                    @change="(e: any) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                    @pressEnter="handleSearch(selectedKeys, confirm, column)"
                  />
                  <a-button
                    type="primary"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="handleSearch(selectedKeys, confirm, column)"
                  >
                    <template #icon><SearchOutlined /></template>
                    Search
                  </a-button>
                  <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                    Reset
                  </a-button>
                </div>
                <div v-else style="padding: 8px">
                  <a-select
                    ref="select"
                    :placeholder="`Search ${column.dataIndex}`"
                    :value="selectedKeys[0]"
                    :options="column.comboboxOptions"
                    :fieldNames="{ label: 'Name', value: 'Id' }"
                    :filter-option="filterOption"
                    style="width: 188px; margin-bottom: 8px; display: block"
                    @change="(e) => setSelectedKeys(e ? [e] : [])"
                    @pressEnter="handleSearch(selectedKeys, confirm, column)"
                  />
                  <a-button
                    type="primary"
                    size="small"
                    style="width: 90px; margin-right: 8px"
                    @click="handleSearch(selectedKeys, confirm, column)"
                  >
                    <template #icon><SearchOutlined /></template>
                    Search
                  </a-button>
                  <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
                    Reset
                  </a-button>
                </div>
              </template>
              <template #customFilterIcon="{ filtered }">
                <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
              </template>
              <template #bodyCell="{ text, column, record }">
                <template v-if="column.key === 'operation'">
                  <a-button @click="edit_Click(record)" class="mr-2" type="primary">Sửa</a-button>
                  <a-popconfirm
                    title="Bạn có muốn xóa không?"
                    @confirm="confirmDelete_Click(record)"
                  >
                    <a-button type="primary" danger>Xóa</a-button>
                  </a-popconfirm>
                </template>
                <span v-if="state.searchText && state.searchedColumn === column.dataIndex">
                  <template
                    v-for="(fragment, i) in text
                      .toString()
                      .split(new RegExp(`(?<=${state.searchText})|(?=${state.searchText})`, 'i'))"
                  >
                    <mark
                      v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
                      :key="i"
                      class="highlight"
                    >
                      {{ fragment }}
                    </mark>
                    <template v-else>{{ fragment }}</template>
                  </template>
                </span>
                <template v-if="column.DataType === 'Date'">
                  <span> {{ moment(text).format('DD/MM/YYYY') }} </span>
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
