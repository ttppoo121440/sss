<template>
  <validation-observer
    v-slot="{ invalid }"
    tag="form"
    class="col-md-8 col-lg-6"
    @submit.prevent="createOrder"
  >
    <div
      v-for="form in ruleForm"
      :key="form.name"
      class="form-item"
    >
      <component
        :is="form.type"
        :title="form.name"
        :rules="form.rules === undefined ? '' : form.rules"
        :value.sync="formData[form.prop]"
        :max="form.max"
        :disabled="disabled"
      />
    </div>
    <div class="btn-group">
      <div class="row m-0 w-100">
        <div class="col-md-6">
          <button
            type="button"
            class="btn btn-outline  w-100 mb-5"
            @click="$emit('back')"
          >
            上一步
          </button>
        </div>
        <div class="col-md-6">
          <button
            type="button"
            class="btn  w-100"
            :disabled="invalid"
            @click="$emit('next')"
          >
            {{ nextName }}
          </button>
        </div>
      </div>
    </div>
  </validation-observer>
</template>

<script>
import Email from './Email';
import Select from './Select';
import Tel from './Tel';
import TextInput from './TextInput';
import TextArea from './TextArea';

export default {
  name: 'Form',
  components: {
    Email,
    Select,
    Tel,
    TextInput,
    TextArea,
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
    ruleForm: {
      type: Array,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nextName: {
      type: String,
      default: '下一步',
    },
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
