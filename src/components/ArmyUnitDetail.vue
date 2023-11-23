<template>
  <a-modal width="750px" class="h-2/3" v-model:open="showForm" title="Đơn vị" cancelText="Hủy" okText="Lưu" centered @ok="btnOk_click">
    <a-form :model="masterData" name="basic">
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Mã đơn vị"
            name="Code"
            :rules="[{ required: true, message: 'Mã đơn vị không được để trống!' }]"
          >
            <a-input v-model="masterData.Code" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item label="Đơn vị cha" name="Parent">
            <a-select show-search placeholder="Đơn vị cha"></a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item
            label="Tên đơn vị"
            name="Code"
            :rules="[{ required: true, message: 'Tên đơn vị không được để trống!' }]"
          >
            <a-input />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item  label="Loại đơn vị" name="Parent">
            <a-select show-search placeholder="Loại đơn vị"></a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Số điện thoại"
            name="Tel"
            :rules="[{ required: true, message: 'Số điện thoại không được để trống!' }]"
          >
            <a-input /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item
            label="Địa chỉ"
            name="Address"
            :rules="[{ required: true, message: 'Địa chỉ không được để trống!' }]"
          >
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[24]">
        <a-col :span="24"
          ><a-form-item label="Mô tả" name="Description">
            <a-textarea
              placeholder="Nhập mô tả đơn vị"
              :auto-size="{ minRows: 10, maxRows: 50 }"
            /> </a-form-item
        ></a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./ArmyUnitDetail.ts" />
