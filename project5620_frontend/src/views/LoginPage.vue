
  <template>
    <div>
        <h1>
          Login
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
  
  
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('Please input the password'))
    } else {
      if (ruleForm.pass !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
      }
      callback()
    }
  }

  
  const ruleForm = reactive({
    name:'',
    pass: '',
  })
  
  const rules = reactive({
    name: [{ validator: checkName, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
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
  