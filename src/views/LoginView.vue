<script setup>
import { Field, Form } from 'vee-validate';

import { useUserStore } from '../stores/user';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
/////////////////////////////////////////////////

/////////////////////////////////////////////////

const router = useRouter();

const { user, userLogin, loginUser } = useUserStore();

let viewPassword = ref(false);

/////////////////////////////////////////////////

const login = async () => {
  try {
    await loginUser(user);
    userLogin;
    router.push('/');
  } catch (error) {
    throw error;
  }
};

const viewPass = () => {
  viewPassword.value = !viewPassword.value;
};

const schema = yup.object({
  email: yup.string().required('email is required').email('not valid email'),
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .required('Password most contain Upper and lower case, @$%, 0-9')
    .min(8),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
</script>

<template>
  <div class="container w-[200px] md:lg:[50%]" id="container">
    <Form :validation-schema="schema" @submit="login">
      <div class="card">
        <h2 class="text-center font-bold text-2xl">Login</h2>
        <Field
          class="border-grey-500 border-2"
          name="username"
          v-slot="{ field, errors, errorMessage }"
        >
          <div class="group">
            <label>Email</label>
            <input
              class="input"
              type="email"
              v-model="user.username"
              placeholder="email"
              v-bind="field"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>

          <div
            name="username"
            v-if="errors.length !== 0"
            class="text-red-500 font-bold text-xs"
          >
            {{ errorMessage }}
          </div>
        </Field>

        <Field name="password" v-slot="{ field, errors, errorMessage }">
          <div class="group">
            <label>Password</label>
            <input
              class="input"
              v-model="user.password"
              placeholder="Password"
              v-bind="field"
              :type="viewPassword ? 'text' : 'password'"
            />
            <div
              class="cursor-pointer absolute top-2 right-0 text-gray-500 hover:text-gray-600 transition duration-200 text-sm"
              @click="viewPass"
            >
              {{ viewPassword ? 'Hide' : 'Show' }}
            </div>
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div
            name="password"
            v-if="errors.length !== 0"
            class="text-red-500 font-bold text-xs"
          >
            {{ errorMessage }}
          </div>
        </Field>
        <div role="Forgot password">
          <RouterLink to="/reset_password"> Forgot password?</RouterLink>
        </div>
        <button class="button my-3" @click="login">Login</button>
      </div>
      <div class="flex float-left left-10 mt-4">
        <div class="relative p-4">
          I'm a new user
          <RouterLink
            to="/signup"
            class="text-white bg-[#5264ae] rounded-md p-1 cursor-pointer hover:border-sky-700 border-1"
            >signup</RouterLink
          >
        </div>
      </div>
    </Form>
  </div>
</template>
<style scoped></style>
