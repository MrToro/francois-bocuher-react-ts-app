
function Contact() {
  return (
		<section className='container contact'>
			<form className='contact__form' action='' method='post'>
				<h3>Any Questions?</h3>
				<label>
					Name:
					<input type='text' name='name' />
				</label>

				<label>
					Email:
					<input type='text' name='name' />
				</label>

				<label>
					Email:
					<textarea rows={5} cols={5} />
				</label>
				<input className='btn' type='submit' value='Submit' />
			</form>
		</section>
	);
}

export default Contact
