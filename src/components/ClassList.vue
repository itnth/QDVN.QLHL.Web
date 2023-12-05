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
  <ClassDetail @SaveSuccess="SaveSuccessDetail" ref="classDetail" />
</template>
<script lang="ts" src="./ClassList.ts" />
