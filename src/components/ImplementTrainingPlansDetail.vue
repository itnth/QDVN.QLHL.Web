<template>
  <a-modal
    :destroyOnClose="true"
    width="1000px"
    class="h-2/3"
    v-model:open="showForm"
    title="Kế hoạch huấn luyện"
    cancelText="Hủy"
    :okText="masterData.EditMode == Enumeration.EditMode.View ? 'Sửa' : 'Lưu'"
    style="top: 0px"
    centered
    @ok="btnOk_click"
  >
    <a-form
      ref="formRef"
      :model="masterData"
      name="basic"
      :disabled="masterData.EditMode == Enumeration.EditMode.View"
    >
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item
            :rules="[{ required: true, message: 'Kế hoạch không được để trống!' }]"
            label="Kế hoạch"
            name="TrainingPlanId"
          >
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.TrainingPlanId"
              @change="cboTrainingPlan_Change"
              :options="trainingPlanDatas"
              :filter-option="filterOption"
              placeholder="Kế hoạch"
              :fieldNames="{ label: 'Name', value: 'Id' }"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="Trạng Thái"
            name="Status"
            :rules="[{ required: true, message: 'Trạng thái không được để trống!' }]"
          >
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.Status"
              @change="cbostatus_Change"
              :options="statusDatas"
              :filter-option="filterOption"
              placeholder="Trạng thái"
            ></a-select>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item
            :rules="[{ required: true, message: 'Người huấn luyện không được để trống!' }]"
            label="Người huấn luyện"
            name="AssignToId"
          >
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.AssignToId"
              @change="cboAssignTo_Change"
              :options="assignToDatas"
              :filter-option="filterOption"
              placeholder="Người huấn luyện"
              :fieldNames="{ label: 'FullName', value: 'Id' }"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Đơn vị" name="ArmyUnitId">
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.ArmyUnitId"
              @change="cboArmyUnit_Change"
              :options="armyUnits"
              :fieldNames="{ label: 'Name', value: 'Id' }"
              :filter-option="filterOption"
              placeholder="Đơn vị"
            ></a-select>
          </a-form-item>
        </a-col>
      </a-row>

      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item
            label="Ngày thực hiện"
            name="StartDate"
            :rules="[{ required: true, message: 'Ngày bắt đầu không được để trống!' }]"
          >
            <a-date-picker
              class="!w-full"
              v-model:value="masterData.StartDate"
              :format="'DD/MM/YYYY'"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12"
          ><a-form-item
            label="Ngày kết thúc"
            name="EndDate"
            :rules="[{ required: true, message: 'Ngày kết thúc không được để trống!' }]"
          >
            <a-date-picker
              class="!w-full"
              v-model:value="masterData.EndDate"
              :format="'DD/MM/YYYY'"
            /> </a-form-item
        ></a-col>
      </a-row>
      <a-row class="mb-4">
        <a-col :span="24">
          <a-table
            class="!w-full"
            :columns="deviceColumns"
            :data-source="dsDevices"
            bordered
            :pagination="false"
          >
            <template #bodyCell="{ column, text, record, index }">
              <template v-if="column.dataIndex == 'Id'">
                <a-select
                  class="w-full"
                  :allowClear="true"
                  ref="select"
                  v-model:value="record.DeviceId"
                  :options="devices"
                  @change="(_, o) => cboDevice_Change(o, record)"
                  :fieldNames="{ label: 'Name', value: 'Id' }"
                />
              </template>
              <template v-if="column.dataIndex == 'Quantity'">
                <a-input-number v-model:value="record.Quantity" :min="1" class="w-full" />
              </template>
              <template v-if="column.dataIndex === 'operation'">
                <div class="w-full text-center">
                  <a-button :icon="h(DeleteOutlined)" type="text" danger @click="del(index)" />
                </div>
              </template>
            </template>
          </a-table>
        </a-col>
      </a-row>
      <a-row class="mb-4">
        <a-col :span="24" class="text-right">
          <a-button
            :icon="h(PlusOutlined)"
            shape="circle"
            type="primary"
            @click="btnAddDevice_Click"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24" class="mb-4">
          <a-checkbox v-model:checked="masterData.IsExam"> Kế hoạch kiểm tra </a-checkbox>
        </a-col>
        <a-col :span="24">
          <a-table class="!w-full" :columns="columns" :data-source="dsStudents" bordered>
            <template #bodyCell="{ column, text, record }">
              <template v-if="column.dataIndex == 'IsAbsent'">
                <a-checkbox v-model:checked="record.IsAbsent" />
              </template>
              <template v-if="column.dataIndex == 'AbsenceReason'">
                <a-input v-model:value="record.AbsenceReason" />
              </template>
              <template v-if="column.dataIndex == 'Point'">
                <a-input-number v-model:value="record.Point" />
              </template>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./ImplementTrainingPlansDetail.ts" />
