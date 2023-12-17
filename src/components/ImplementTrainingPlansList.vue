<template>
  <div>
    <BaseList
      :columns="columns"
      @reload_Click="loadData"
      :dataBinding="data"
      @delete_Click="confirmDelete_Click"
      @add_Click="add_Click"
      @view_Click="edit_Click"
    />
  </div>
  <ImplementTrainingPlansDetail
    @SaveSuccess="SaveSuccessDetail"
    ref="implementTrainingPlansDetail"
  />
</template>
<script lang="ts" src="./ImplementTrainingPlansList.ts" />
