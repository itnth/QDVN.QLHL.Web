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
    <a-form ref="formRef" :model="masterData" name="basic" 
>
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Mã lớp"
            name="Code"
            :rules="[{ required: true, message: 'Mã lớp không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Code" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item
            label="Tên lớp"
            name="Name"
            :rules="[{ required: true, message: 'Tên lớp không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Name" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./ClassDetail.ts" />
