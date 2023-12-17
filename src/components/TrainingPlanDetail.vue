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
        <a-col :span="12"
          ><a-form-item
            label="Mã kế hoạch"
            name="Code"
            :rules="[{ required: true, message: 'Mã kế hoạch không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Code" /> </a-form-item
        ></a-col>
        <a-col :span="12">
          <a-form-item
            label="Tên kế hoạch"
            name="Name"
            :rules="[{ required: true, message: 'Tên kế hoạch không được để trống!' }]"
          >
            <a-input v-model:value="masterData.Name" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item label="Nội dung" name="Subject">
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.SubjectId"
              @change="cboSubject_Change"
              :options="SubjectDatas"
              :filter-option="filterOption"
              placeholder="Nội dung"
              :fieldNames="{ label: 'Name', value: 'Id' }"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Kế hoạch cha" name="Parent">
            <a-select
              show-search
              :allowClear="true"
              v-model:value="masterData.ParentId"
              :options="TrainingPlansData"
              :fieldNames="{ label: 'Name', value: 'Id' }"
              :filter-option="filterOption"
              placeholder="Kế hoạch cha"
              @change="cboParent_Change"
            ></a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="[16, 24]" class="hidden">
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
      <a-row :gutter="[16, 24]">
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
        <a-col :span="12">
          <a-form-item label="Số tiết" name="NumberOfLesson">
            <a-input-number v-model:value="masterData.NumberOfLesson" class="w-full" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <Editor
          v-model="masterData.ResouceContent"
          style="height: 450px !important"
          :init="editorInit"
          :disabled="masterData.EditMode == Enumeration.EditMode.View"
        />
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./TrainingPlanDetail.ts" />
