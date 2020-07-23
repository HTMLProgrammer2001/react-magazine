import * as React from 'react';


const SettingsPage: React.FC<{}> = () => (
	<div className="admContent">
		<div className="billing py-pad">
			<div className="container">
				<div className="login__head">Personal info</div>

				<div className="billing__form">
					<div className="file my-pad">
						<img className="file_image" src="/image/product.png"/>

						<label>
							<input className="file__elem" type="file"/>
							<div className="file__but">Select file</div>
						</label>
					</div>

					<div className="input">
						<input className="input__elem" required/>
						<label className="input__label">
							<span>First Name</span>
							<span className="red">*</span>
						</label>

						<div className="input__line"/>
					</div>

					<div className="input">
						<input className="input__elem" required/>
						<label className="input__label">
							<span>Last Name</span>
							<span className="red">*</span>
						</label>

						<div className="input__line"/>
					</div>

					<div className="input">
						<input className="input__elem" required/>
						<label className="input__label">
							<span>Email Address</span>
							<span className="red">*</span>
						</label>

						<div className="input__line"/>
					</div>

					<div className="row space-between my-pad w-100">
						<div/>
						<button type="button" className="check__but">Update</button>
					</div>

					<div className="login__head">Security</div>

					<div className="input">
						<input className="input__elem" required type="password"/>
						<label className="input__label">
							<span>Password</span>
							<span className="red">*</span>
						</label>

						<div className="input__line"/>
					</div>

					<div className="input">
						<input className="input__elem" required type="password"/>
						<label className="input__label">
							<span>Password confirmation</span>
							<span className="red">*</span>
						</label>

						<div className="input__line"/>
					</div>
				</div>

				<div className="row space-between my-pad w-100">
					<div/>
					<button type="button" className="check__but">Update</button>
				</div>

				<div className="login__head">Delete account</div>
				<div className="row space-between my-pad w-100">
					<div/>
					<button type="button" className="check__but">Delete</button>
				</div>
			</div>
		</div>
	</div>
);

export default SettingsPage;
