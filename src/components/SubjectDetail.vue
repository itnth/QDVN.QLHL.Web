<template>
  <a-modal
    :destroyOnClose="true"
    width="750px"
    class="h-2/3"
    v-model:open="showForm"
    title="Nội dung huấn luyện"
    cancelText="Hủy"
    okText="Lưu"
    centered
    @ok="btnOk_click"
  >
    <a-form ref="formRef" :model="masterData" name="basic">
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Mã nội dung"
            name="Code"
            :rules="[{ required: true, message: 'Mã nội dung không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Code" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item
            label="Tên nội dung"
            name="Name"
            :rules="[{ required: true, message: 'Tên nội dung không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Name" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Số buổi"
            name="NumberOfLesson"
            :rules="[{ required: true, message: 'Số buổi không được để trống!' }]"
          >
            <a-input-number
              class="w-full"
              v-model:value="masterData.NumberOfLesson"
            /> </a-form-item
        ></a-col>
        <a-col :span="12"
          ><a-form-item
            label="Số tín chỉ"
            name="NumberOfCredit"
            :rules="[{ required: true, message: 'Số tín chỉ không được để trống!' }]"
          >
            <a-input-number
              class="w-full"
              v-model:value="masterData.NumberOfCredit"
            /> </a-form-item
        ></a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./SubjectDetail.ts" />
