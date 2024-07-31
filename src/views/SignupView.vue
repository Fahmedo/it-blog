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

let viewPassword = ref(false);

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

const viewPass = () => {
  viewPassword.value = !viewPassword.value;
  console.log(viewPassword);
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
    <Form :validation-schema="schema" @submit="register">
      <div class="card">
        <h2 class="text-center font-bold text-2xl">Register</h2>
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
              v-model="newUser.username"
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
          name="firstName"
          v-slot="{ field, errors, errorMessage }"
        >
          <div class="group">
            <label>First Name</label>
            <input
              class="input"
              type="text"
              v-model="newUser.firstName"
              placeholder="First name"
              v-bind="field"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div
            name="firstName"
            v-if="errors.length !== 0"
            class="text-red-500 font-bold text-xs"
          >
            {{ errorMessage }}
          </div>
        </Field>

        <Field
          class="border-grey-500 border-2"
          name="lastName"
          v-slot="{ field, errors, errorMessage }"
        >
          <div class="group">
            <label>Last Name</label>
            <input
              class="input"
              type="text"
              v-model="newUser.lastName"
              placeholder="Last name"
              v-bind="field"
            />
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div
            name="lastName"
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
              v-model="newUser.password"
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

        <Field name="confirm_password" v-slot="{ field, errors, errorMessage }">
          <div class="group">
            <label>Confirm Password</label>
            <input
              class="input"
              v-model="newUser.password"
              placeholder="Confirm Password"
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
        <div class="relative p-4">
          Already a user
          <RouterLink
            to="/login"
            class="text-white bg-[#5264ae] rounded-md p-1 cursor-pointer hover:border-sky-700 border-1"
            >Login</RouterLink
          >
        </div>
      </div>
    </Form>
  </div>
</template>
<style scoped></style>
