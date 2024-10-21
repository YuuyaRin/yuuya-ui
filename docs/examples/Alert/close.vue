<template>
  <div class="section">
    <yuuya-alert type="primary" title="Alert Title"></yuuya-alert>
    <yuuya-alert
      type="info"
      closeText="close"
      effect="dark"
      title="Alert Title"
      closable
    ></yuuya-alert>
    <yuuya-alert type="warning" effect="dark" title="Alert Title" closable></yuuya-alert>
  </div>
</template>
<style>
.section .yuuya-alert {
  margin-top: 20px;
}
</style>
