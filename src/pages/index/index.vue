<template>
	<div>
		<video @timeupdate='OnTimeUpdate' id="video1"
			src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-video-courses.mp4"></video>
		<button @click="onPlay">play/pause</button>
		<button @click="onSeek">seek 13s</button>
	</div>
</template>
<script lang="ts" setup>
	import { ref } from 'vue'
	const videoRef = uni.createVideoContext('video1');
	console.log(videoRef)

	const isPlay = ref(false)

	function onPlay() {
		if (!isPlay.value) {

			videoRef.play()

			isPlay.value = true
		} else {
			videoRef.pause()
		}
	}

	function onSeek() {
		videoRef.seek(13)
	}
	function OnTimeUpdate(e) {
		console.log('time update', e.detail);
	}
</script>

<style></style>