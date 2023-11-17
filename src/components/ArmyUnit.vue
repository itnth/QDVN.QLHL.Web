<template>
  <a-row>
    <a-col :span="24">
      <a-button class="mr-2" type="primary" @click="addArmyUnit_Click">Thêm</a-button>
      <a-button  type="primary">Nạp</a-button>
    </a-col>
    <a-col class="pt-4" :span="24">
      <a-table
        size="middle"
        :scroll="{ y: 650 }"
        :columns="columns"
        :data-source="data"
        class="nth-table-style"
      >
        <template #bodyCell="{ column }">
          <template v-if="column.key === 'operation'">
            <a-button class="mr-2" type="primary">Sửa</a-button>
            <a-button   type="primary" danger>Xóa</a-button>
          </template>
        </template>
        <template #expandedRowRender>
          <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
            <template #bodyCell="{ column }">
              <template v-if="column.key === 'state'">
                <span>
                  <a-badge status="success" />
                  Finished
                </span>
              </template>
              <template v-else-if="column.key === 'operation'">
                <span class="table-operation">
                  <a>Pause</a>
                  <a>Stop</a>
                  <a-dropdown>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item>Action 1</a-menu-item>
                        <a-menu-item>Action 2</a-menu-item>
                      </a-menu>
                    </template>
                    <a>
                      More
                      <down-outlined />
                    </a>
                  </a-dropdown>
                </span>
              </template>
            </template>
          </a-table>
        </template>
      </a-table>
    </a-col>
  </a-row>
  <ArmyUnitDetail ref="armyUnitDetail" />
</template>
<script lang="ts" src="./ArmyUnit.ts" />
