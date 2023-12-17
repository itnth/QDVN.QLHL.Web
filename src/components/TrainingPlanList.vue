<template>
  <div>
    <BaseList
      :columns="columns"
      @reload_Click="loadData"
      :dataBinding="data"
      @delete_Click="confirmDelete_Click"
      @add_Click="add_Click"
      @view_Click="edit_Click"
      :showChildrens="true"
      :innerColumns="innerColumns"
    />
  </div>
  <TrainingPlanDetail @SaveSuccess="SaveSuccessDetail" ref="trainingPlanDetail" />
</template>
<script lang="ts" src="./TrainingPlanList.ts" />
