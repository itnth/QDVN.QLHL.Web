<template>
  <a-modal
    :destroyOnClose="true"
    width="750px"
    class="h-2/3"
    v-model:open="showForm"
    title="Cán bộ"
    cancelText="Hủy"
    okText="Lưu"
    centered
    @ok="btnOk_click"
  >
    <a-form ref="formRef" :model="masterData" name="basic">
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Mã cán bộ"
            name="Code"
            :rules="[{ required: true, message: 'Mã cán bộ không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Code" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item label="Đơn vị" name="UnitId">
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
            label="Tên cán bộ"
            name="FullName"
            :rules="[{ required: true, message: 'Tên Cán bộ không được để trống!' }]"
          >
            <a-input v-model:value="masterData.FullName" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Cấp bậc" name="Rank">
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.Rank"
              @change="cboRank_Change"
              :options="ranks"
              :filter-option="filterOption"
              placeholder="Cấp bậc"
            ></a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Số điện thoại"
            name="Mobile"
            :rules="[{ required: true, message: 'Số điện thoại không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Mobile" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item label="Chức vụ" name="Parent">
            <a-select
              show-search
              v-model:value="masterData.Position"
              @change="cboPosition_Change"
              :options="positions"
              :filter-option="filterOption"
              placeholder="Chức vụ"
              :allowClear="true"
            ></a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12"
          ><a-form-item
            label="Ngày sinh"
            name="DateOfBirth"
            :rules="[{ required: true, message: 'Ngày sinh không được để trống!' }]"
          >
            <a-date-picker
              class="!w-full"
              v-model:value="masterData.DateOfBirth"
              :format="'DD/MM/YYYY'"
            /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item
            label="Địa chỉ"
            name="Address"
            :rules="[{ required: true, message: 'Địa chỉ không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Address" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./ManagersDetail.ts" />
