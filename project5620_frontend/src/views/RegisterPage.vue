//<!-- <script setup>


  // </script>
  
  // <template>
  //   <el-row class="mb-4">
  //     <el-button disabled>Default</el-button>
  //     <el-button type="primary" disabled>Primary</el-button>
  //     <el-button type="success" disabled>Success</el-button>
  //     <el-button type="info" disabled>Info</el-button>
  //     <el-button type="warning" disabled>Warning</el-button>
  //     <el-button type="danger" disabled>Danger</el-button>
  //   </el-row>
  
  
  // </template>
  
  -->
  <template>
     <div>
        <h1>
          Sign Up
        </h1>
      </div>

    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >   
     
        <el-form-item label="Username" prop="name" >
          <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
        </el-form-item>

        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>

        <el-form-item label="Confirm" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item label="phone" prop="phone">
          <el-input v-model.number="ruleForm.phone" />
        </el-form-item>
        
        <el-form-item
          prop="email"
          label="Email"
          :rules="[
            {
              type: 'email',
              message: 'Please input correct email',
              trigger: ['blur', 'change'],
            },
          ]"
        >
      <el-input v-model="ruleForm.email" />

    </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Submit</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
    </el-form>
  </template>
  



  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  
  const ruleFormRef = ref<FormInstance>()

    const checkName = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input the username'))
    }
    else {
      callback()
    }
  }
  
  const checkPhone = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('Please input the phone number'))
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('Please input digits'))
      } 
        else {
          callback()
        }
      
    }, 1000)
  }
  
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (ruleForm.checkPass !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
      }
      callback()
    }
  }
  const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password again'))
    } else if (value !== ruleForm.pass) {
      callback(new Error("Two inputs don't match!"))
    } else {
      callback()
    }
  }
  
  const ruleForm = reactive({
    name:'',
    pass: '',
    checkPass: '',
    phone: '',
    email:'',
  })
  
  const rules = reactive({
    name: [{ validator: checkName, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    phone: [{ validator: checkPhone, trigger: 'blur' }],

  })
  
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>
  