<template>
	<view class="content">

    <div>content</div>

		<!-- #ifdef MP-TOUTIAO -->
		<view>
			抖音退款2
		</view>
		<pay-button :order-status="orderStatus" :order-id="orderId" @refund="dy_pay_onRefund" 
		bind:applyrefund="onApplyRefund"
			@error="dy_pay_error" />
		<!-- #endif -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				orderStatus: 1,
				orderId: '20240408153004588692'
			}
		},
		onLoad() {
			// let a = {
			// 	{
			// 		[
			// 			['refund', [
			// 				['dy_pay_onRefund', ['$event']]
			// 			]],
			// 			['applyrefund', [
			// 				['dy_pay_applyRefund', ['$event']]
			// 			]],
			// 			['error', [
			// 				['dy_pay_error', ['$event']]
			// 			]]
			// 		]
			// 	}
			// }
	}, 
	created() { 
		this.$scope.onApplyRefund = this.onApplyRefund
	},
		methods: {
			async onApplyRefund(event) {
				// console.log('dy_pay_applyRefund event= ', event)
				let extra = {
					orderId: event.detail
				}; // 开发者需要透传的参数，可自定义内容
				const res = new Promise(resolve => {
					resolve(extra)
				})
				console.log(222)
				return res
				// return extra
			},
			// bind:refund-回调
			dy_pay_onRefund(event) {
				console.log(222)
				console.log('dy_pay_onRefund event=', event)
				const {
					status,
					result
				} = event.detail;
				if (status === 'success') {
					uni.$u.toast('退款成功')
				}
			},
			dy_pay_error(event) {
				console.log(333,'err',event)
				// console.log('dy_pay_error event=', event)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>