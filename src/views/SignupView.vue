<!-- Login.vue -->
<script setup>
import { ref } from 'vue';
import { Field, Form } from 'vee-validate';

import { useUserStore } from '../stores/user';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
/////////////////////////////////////////////////

/////////////////////////////////////////////////

const router = useRouter();

const { newUser, registerUser } = useUserStore();

/////////////////////////////////////////////////
const register = async () => {
  try {
    await registerUser(newUser);
    // router.push('/verify_email');
    router.push('/login');
  } catch (error) {
    throw error;
  }
};

const schema = yup.object({
  email: yup.string().required('email is required').email('not valid email'),
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password most contain a-z, @$%, 0-9').min(8),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});
</script>

<template>
  <div class="container w-[200px] md:lg:[50%]" id="container">
    <Form :validation-schema="schema">
      <div class="card">
        <Field
          class="border-grey-500 border-2"
          name="email"
          v-slot="{ field, errors, errorMessage }"
        >
          <div class="group">
            <label>Email</label>
            <input
              class="input"
              type="email"
              v-model="newUser.email"
              placeholder="example@mail.com"
              v-bind="field"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div
            name="email"
            v-if="errors.length !== 0"
            class="text-red-500 font-bold text-xs"
          >
            {{ errorMessage }}
          </div>
        </Field>

        <Field
          class="border-grey-500 border-2"
          name="username"
          v-slot="{ field, errors, errorMessage }"
        >
          <div class="group">
            <label>Username</label>
            <input
              class="input"
              type="text"
              v-model="newUser.username"
              placeholder="Username"
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
              type="password"
              v-model="newUser.password"
              placeholder="Password"
              v-bind="field"
            />
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

        <Field name="confirm_password" v-slot="{ field, errors, errorMessage }">
          <div class="group">
            <label>Confirm Password</label>
            <input
              class="input"
              type="password"
              v-model="newUser.password"
              placeholder="Confirm Password"
              v-bind="field"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div
            name="confirm_password"
            v-if="errors.length !== 0"
            class="text-red-500 font-bold text-xs"
          >
            {{ errorMessage }}
          </div>
        </Field>

        <button class="button my-3" @click="register">signup</button>
      </div>
      <div class="flex float-left left-10 mt-4">
        <div>
          Already a user
          <RouterLink
            to="/login"
            class="text-white bg-red-500 rounded-sm p-1 cursor-pointer hover:border-black border-2"
            >Login</RouterLink
          >
        </div>
      </div>
    </Form>
  </div>
</template>
<style scoped></style>
