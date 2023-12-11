<template>
  <a-modal
    :destroyOnClose="true"
    width="1000px"
    class="h-2/3"
    v-model:open="showForm"
    title="Kế hoạch huấn luyện"
    cancelText="Hủy"
    okText="Lưu"
    style="top: 0px"
    centered
    @ok="btnOk_click"
  >
    <a-form ref="formRef" :model="masterData" name="basic">
      <a-row :gutter="[16, 24]">
        <a-col :span="12">
          <a-form-item  :rules="[{ required: true, message: 'Kế hoạch không được để trống!' }]" label="Kế hoạch" name="TrainingPlanId">
            <a-select
              show-search
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
          <a-form-item  :rules="[{ required: true, message: 'Người thực hiện không được để trống!' }]" label="Người thực hiện" name="AssignToId">
            <a-select
              show-search
              v-model:value="masterData.AssignToId"
              @change="cboAssignTo_Change"
              :options="assignToDatas"
              :filter-option="filterOption"
              placeholder="Người thực hiện"
              :fieldNames="{ label: 'FullName', value: 'Id' }"
            ></a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="Người thực hiện"
            name="AssignToName"
            :rules="[{ required: true, message: 'Tên người thực hiện không được để trống!' }]"
          >
            <a-input v-model:value="masterData.AssignToName" />
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
      <a-row>
        <a-col :span="24">
          <a-table class="!w-full" :columns="columns" :data-source="dataSource" bordered>
            <template #bodyCell="{ column, text, record }">
              <template v-if="['Point'].includes(column.dataIndex)">
                <div>
                  <a-input
                    v-if="editableData[record.Id]"
                    v-model:value="editableData[record.Id][column.dataIndex]"
                    style="margin: -5px 0"
                  />
                  <template v-else>
                    {{ text }}
                  </template>
                </div>
              </template>
              <template v-else-if="column.dataIndex === 'operation'">
                <div class="editable-row-operations">
                  <span v-if="editableData[record.Id]">
                    <a-typography-link @click="save(record.Id)">Save</a-typography-link>
                    <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.Id)">
                      <a class="pl-4" >Cancel</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="edit(record.Id)">Edit</a>
                  </span>
                </div>
              </template>
            </template>
          </a-table>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script lang="ts" src="./ImplementTrainingPlansDetail.ts" />
