<template>
  <a-modal
    :destroyOnClose="true"
    width="750px"
    class="h-2/3"
    v-model:open="showForm"
    title="Lớp học"
    cancelText="Hủy"
    okText="Lưu"
    centered
    @ok="btnOk_click"
  >
    <a-form ref="formRef" :model="masterData" name="basic">
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Mã trang bị"
            name="Code"
            :rules="[{ required: true, message: 'Mã trang bị không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Code" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item
            label="Tên trang bị"
            name="Name"
            :rules="[{ required: true, message: 'Tên trang bị không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Name" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item label="Loại trang bị" name="Type">
            <a-select
              show-search
              v-model:value="masterData.Type"
              @change="cboType_Change"
              :options="types"
              :filter-option="filterOption"
              placeholder="Loại trang bị"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12"
          ><a-form-item label="Số lượng" name="Quantity">
            <a-input-number v-model:value="masterData.Quantity" class="w-full" /> </a-form-item
        ></a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item label="Đơn vị" name="UnitId">
            <a-select
              show-search
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
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./DeviceManagerDetail.ts" />
