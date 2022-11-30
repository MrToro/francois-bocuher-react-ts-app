import './Contact.scss';


function Contact() {
  return (
		<section className='contact'>
			<div className='container contact__form-container'>
				<form className='contact__form form' action='' method='post'>
					<h3 className='contact__title'>Any Questions?</h3>

					<label className='form__label input-label'>
						Name:
						<input className='input-text' type='text' name='name' placeholder='Enter your name' />
					</label>

					<label className='form__label input-label'>
						Email:
						<input className='input-text' type='text' name='name' placeholder='Enter your email' />
					</label>

					<label className='form__label input-label'>
						Question:
						<textarea className='input-area' rows={5} cols={5} placeholder='Enter your question' />
					</label>
					<input className='btn before-circle-left' type='submit' value='Submit' />
				</form>
			</div>
		</section>
	);
}

export default Contact
