<template>
  <a-modal
    :destroyOnClose="true"
    width="1000px"
    class="h-2/3"
    v-model:open="showForm"
    title="Tài khoản"
    cancelText="Hủy"
    okText="Lưu"
    style="top: 0px"
    centered
    @ok="btnOk_click"
  >
    <a-form ref="formRef" :model="masterData" name="basic">
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item
            :rules="[{ required: true, message: 'Tên đăng nhập không được để trống!' }]"
            label="Tên đăng nhập"
            name="Username"
          >
            <a-input v-model:value="masterData.Username" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            :rules="[{ required: true, message: 'Mật khẩu không được để trống!' }]"
            label="Mật khẩu"
            name="Password"
          >
            <a-input-password v-model:value="masterData.Password" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item label="Email" name="Email">
            <a-input v-model:value="masterData.Email" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Số điện thoại" name="Tel">
            <a-input v-model:value="masterData.Tel" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item label="Vai trò" name="RoleCode">
            <a-radio-group v-model:value="masterData.RoleCode">
              <a-radio value="SYSTEM">Quản lý hệ thống</a-radio>
              <a-radio value="ADMIN">Quản lý đơn vị</a-radio>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="12" v-if="masterData.RoleCode == 'ADMIN'">
          <a-form-item label="Đơn vị quản lý" name="RoleCode">
            <a-select
              v-model:value="masterData.ArrayManagingArmyUnitIds"
              :options="armyUnits"
              mode="multiple"
              :allowClear="true"
              :filterOption="(i, o) => o.Name.toLowerCase().includes(i.toLowerCase())"
              :fieldNames="{ label: 'Name', value: 'Id' }"
              placeholder="Đơn vị"
            ></a-select>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./UserManagerDetail.ts" />
