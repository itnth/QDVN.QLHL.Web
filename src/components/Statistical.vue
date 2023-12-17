<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Thống kê"
    @back="
      () => {
        $router.back()
      }
    "
  >
    <a-row class="mt-4">
      <a-col :span="6">
        <a-form-item label="Nội dung HL" name="Subject">
          <a-select
            show-search
            :allowClear="true"
            v-model:value="reportOption.SubjectId"
            :options="subjects"
            :filter-option="filterOption"
            :fieldNames="{ label: 'Name', value: 'Id' }"
            placeholder="Nội dung HL"
          ></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="Đơn vị" name="UnitId" class="ml-4">
          <a-select
            show-search
            @change="cboArmyUnit_Change"
            v-model:value="reportOption.ArmyUnitId"
            :allowClear="true"
            :options="armyUnits"
            :fieldNames="{ label: 'Name', value: 'Id' }"
            :filter-option="filterOption"
            placeholder="Đơn vị"
          ></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6" class="ml-4">
        <a-button type="primary" @click="btnGetData_Click">Lấy dữ liệu</a-button>
      </a-col>
    </a-row>
    <a-row class="mt-4" v-if="reportOption.Type == 1">
      <a-col :span="24">
        <a-table :columns="columns" :dataSource="reportData">
          <template #footer>
            <div class="text-right">
              <p>Đạt: {{ reportRankSummary.Good }} %</p>
              <p>Không đạt: {{ reportRankSummary.NotGood }} %</p>
            </div>
          </template>
        </a-table>
      </a-col>
    </a-row>
    <a-row class="mt-4" v-if="reportOption.Type == 2">
      <a-col :span="24">
        <a-table :columns="summaryColumns" :dataSource="reportData"> </a-table>
      </a-col>
    </a-row>
  </a-page-header>
</template>
<script lang="ts" src="./Statistical.ts" />
