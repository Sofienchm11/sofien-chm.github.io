<template>
  <div class="contact">
    <section class="contact" id="contact">
		<div class="container">
			<div class="row">
				<div class="contact_cont">
				<div class="contact__header">
					<h4 class="contact__header__overley">What’s Next?</h4>
					<h2 class="contact__header__title">Get In Touch</h2>
					<p>my inbox is always open. Whether you have a question or <br> just want to say hi, I’ll try my best to get back to you!</p>
				</div>
				<div class="contact__body">
					<ul class="wrapper">
						<li class="icon linkedin">
							<span class="tooltip">Linkedin</span>
							<span><font-awesome-icon icon="fa-brands fa-linkedin" /></span>
						</li>
						<li class="icon github">
							<span class="tooltip">Github</span>
							<span><font-awesome-icon icon="fab fa-github" /></span>
						</li>
						<li class="icon Mailchimp">
							<span class="tooltip">Mailchimp</span>
							<span><font-awesome-icon icon="fab fa-mailchimp" /></span>
						</li>
						<li class="icon skype">
							<span class="tooltip">Skype</span>
							<span><font-awesome-icon icon="fab fa-skype" /></span>
						</li>
					</ul>
					<div class="contact__body__email">
						<a class="email-link" href="mailto:cheikhmouhamedsofien@gmail.com" rel="noopener noreferrer" target="_blank">Mail me</a>
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>
  </div>
</template>

<style lang="scss">
@import '@/scss/contact.scss';
@import '@/scss/global.scss';
</style>

<script>
export default {
  name: "contanct-home",
};
</script>
