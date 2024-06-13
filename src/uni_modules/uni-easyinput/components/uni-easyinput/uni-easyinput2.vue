<template>
	<view class="uni-easyinput">
		<view class="uni-easyinput__content">




			<input type=" text " class="uni-easyinput__content-input" :name="name" :value="val" @input="onInput" />



		</view>
	</view>
</template>

<script>
	export default {
		name: 'uni-easyinput',
		emits: ['click', 'iconClick', 'update:modelValue',
			'input',
			'focus', 'blur', 'confirm', 'clear', 'eyes', 'change',
			'keyboardheightchange'
		],
		model: {
			prop: 'modelValue',
			event: 'update:modelValue'
		},
		options: {
			// #ifdef MP-TOUTIAO
			virtualHost: false,
			// #endif
			
			// #ifndef MP-TOUTIAO
			virtualHost: true,
			// #endif
		},

		props: {
			name: String,
			value: [Number, String],
			modelValue: [Number, String],


		},
		data() {
			return {

				val: '',

			};
		},
		computed: {
			// 输入框内是否有值
			isVal() {
				const val = this.val;
				// fixed by mehaotian 处理值为0的情况，字符串0不在处理范围
				if (val || val === 0) {
					return true;
				}
				return false;
			},


		},
		watch: {
			value(newVal) {
				this.val = newVal;
			},
			modelValue(newVal) {
				this.val = newVal;
			}

		},
		created() {

		},
		mounted() {

		},
		methods: {
			/**
			 * 初始化变量值
			 */
			init() {
				if (this.value || this.value === 0) {
					this.val = this.value;
				} else if (this.modelValue || this.modelValue === 0 || this.modelValue === '') {
					this.val = this.modelValue;
				} else {
					this.val = null;
				}
			},




			/**
			 * 输入时触发
			 * @param {Object} event
			 */
			onInput(event) {
				let value = event.detail.value;

				this.val = value;
				console.log(2, 'on input', value, this.val)
				// TODO 兼容 vue2
				// this.$emit('input', '55');
				this.$emit('input', value);
				// TODO　兼容　vue3
				// this.$emit('update:modelValue', value);
			},


		}
	};
</script>