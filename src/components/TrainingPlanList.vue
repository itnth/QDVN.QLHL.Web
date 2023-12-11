<template>
  <div>
    <BaseList
      :columns="columns"
      @reload_Click="loadData"
      :dataBinding="data"
      @delete_Click="confirmDelete_Click"
      @add_Click="add_Click"
      @edit_Click="edit_Click"
    />
  </div>
  <TrainingPlanDetail @SaveSuccess="SaveSuccessDetail" ref="trainingPlanDetail" />
</template>
<script lang="ts" src="./TrainingPlanList.ts" />
