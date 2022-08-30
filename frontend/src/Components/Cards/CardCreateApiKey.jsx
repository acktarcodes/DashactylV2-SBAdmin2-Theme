import React from 'react';
import CreateApiKeyForm from '../../Api/CreateApiKeyForm';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.min.css';

const MySwal = withReactContent(Swal);

export default function CardGetUserInfo() {
	const createApiKeyForm = (event) => {
		CreateApiKeyForm(event).then(data => {
			if (data.success) return MySwal.fire({
				icon: 'success',
				title: 'API Key Created!',
				html: `API Key: ${data.key}`,
			}).then(() => {
				document.getElementById('createApiKeyForm').reset();
			});
			if (data.error) MySwal.fire({
				icon: 'error',
				title: 'Error',
				text: data.error,
			}).then(() => {
				document.getElementById('createApiKeyForm').reset();
			});
		});
	};
	return (
		<>
			 <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Create an API Key</h6>
                                    
                                </div>
                                <div className="card-body">
                                <form id="getUserInfoForm" onSubmit={createApiKeyForm}>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input type="text" className="form-control" name="description" id="description" placeholder=" " required/>
                    </div>
					<button type="submit" className="btn btn-primary me-2">Continue</button>
                    </form>
                                </div>
                            </div>
                        </div>
		</>
	);
}
