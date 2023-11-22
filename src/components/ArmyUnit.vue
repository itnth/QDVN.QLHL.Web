<template>
  <BaseList :columns="columns"  :innerColumns="innerColumns" :dataBinding="data" @add_Click="addArmyUnit_Click" @edit_Click="editArmyUnit_Click" :showChildrens="true"/>
  <ArmyUnitDetail :isShow="showDetail" ref="armyUnitDetail" />
</template>
<script lang="ts" src="./ArmyUnit.ts" />
