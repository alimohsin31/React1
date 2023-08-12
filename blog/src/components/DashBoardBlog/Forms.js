import React, {useState, useRef} from 'react';
import axios from 'axios';
import DashBoardNavigation from '../DashBoard/DashBoardNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Forms() {

    // const formRef = useRef(null);
    const MySwal = withReactContent(Swal)

    const [formData, setFormData] = useState({

        authorName: '',
        authorEmail: '',
        blogheading: '',
        blogPostedby: '',
        blogtextFirst: '',
        blogtextSecond: '',
        blogtextThird: '',
        blogQuotes: '',
        // ... other form fields
        blogimage1: null,
        blogimage2: null,
        blogimage3: null,
      });

      const formRef = useRef(null);
      const handleFileChange = (event) => {
        setFormData({
          ...formData,
          blogimage1: event.target.files[0],
        });
      };
      const handleFileChange2 = (event) => {
        setFormData({
          ...formData,
          blogimage2: event.target.files[0],
        });
      };
      const handleFileChange3 = (event) => {
        setFormData({
          ...formData,
          blogimage3: event.target.files[0],
        });
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const submitBlogForm = (event) => {
        event.preventDefault();
    
        const formDataToSend = new FormData();

        formDataToSend.append('authorName'       , formData.authorName);
        formDataToSend.append('authorEmail'      , formData.authorEmail);
        formDataToSend.append('blogheading'      , formData.blogheading);
        formDataToSend.append('blogPostedby'     , formData.blogPostedby);
        formDataToSend.append('blogtextFirst'    , formData.blogtextFirst);
        formDataToSend.append('blogtextSecond'   , formData.blogtextSecond);
        formDataToSend.append('blogtextThird'    , formData.blogtextThird);
        formDataToSend.append('blogQuotes'       , formData.blogQuotes);

        // ... append other form fields
        formDataToSend.append('blogimage1', formData.blogimage1);
        formDataToSend.append('blogimage2', formData.blogimage2);
        formDataToSend.append('blogimage3', formData.blogimage3);

        console.warn([formData.blogimage1,formData.blogimage2,formData.blogimage3])
    
        axios.post('http://localhost:8081/blog-submit', formDataToSend)
          .then((response) => {
            console.log('Data submitted successfully:', response.data);
            // event.target.reset();
            
            // alert('Data Added Successfuly');

            MySwal.fire({
              // position: 'top-end',
              icon: 'success',
              title: 'Your blog has been saved',
              width: 600,
              heightAuto: false,
              // showConfirmButton: false,
              timer: 2500
            });
            formRef.current.reset();
            const fileInputs = formRef.current.querySelectorAll('input[type="text"]');
                fileInputs.forEach((input) => {
                input.value = ''; // Clear the file input value
            });

            const fileEmail = formRef.current.querySelectorAll('input[type="email"]');
                fileEmail.forEach((input) => {
                input.value = ''; // Clear the file input value
            });

            const TextAreaField = formRef.current.querySelectorAll('textarea');
                TextAreaField.forEach((textarea) => {
                textarea.value = ''; // Clear the file textarea value
            });

            // Handle success or display a success message
          })
          .catch((error) => {
            console.error('Error submitting data:', error);
            alert('Data Has some' + error);
            // Handle error or display an error message
          });
      };


    
    return (
        <>
            <section className="blogs-section">
                    <Row className="row">
                        <Col md={2} style={{backgroundColor: '#13181E'}}>
                            <DashBoardNavigation />
                        </Col>
                        <Col md={10} style={{background: '#000000'}}>
                            <div className="blogs-form">
                                <h4>Let’s Connect</h4>
                                <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
                                <form  method="post" className="row" ref={formRef} onSubmit={submitBlogForm}>
                                    <div className="col-md-6">
                                        <input type="text" required name="authorName" value={formData.authorName} onChange={handleChange} placeholder="Author Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" required name="authorEmail" value={formData.authorEmail} onChange={handleChange} placeholder="Author Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" required name="blogheading" value={formData.blogheading} onChange={handleChange} placeholder="Blog Heading" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" required name="blogPostedby" value={formData.blogPostedby} onChange={handleChange} placeholder="Posted By" />
                                    </div>
                                    <div className="col-md-6">
                                        <textarea name="blogtextFirst" required value={formData.blogtextFirst} onChange={handleChange} placeholder="First Message"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <textarea name="blogtextSecond" required value={formData.blogtextSecond} onChange={handleChange} placeholder="Second Message"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <textarea name="blogtextThird" required value={formData.blogtextThird} onChange={handleChange} placeholder="Third Message"></textarea>
                                    </div>
                                    <div className="col-md-6">
                                        <textarea name="blogQuotes" required value={formData.blogQuotes} onChange={handleChange} placeholder="Blog Quotes"></textarea>
                                    </div>

                                    <div className="col-md-4">
                                        <label className='blogs-form-label'>Image 1</label>
                                        <input type='file' required accept="image/*,.pdf" name='blogimage1' onChange={handleFileChange} multiple="true" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className='blogs-form-label'>Image 2</label>
                                        <input type='file' required accept="image/*,.pdf" name='blogimage2' onChange={handleFileChange2} multiple="true" />
                                    </div>
                                    <div className="col-md-4">
                                        <label className='blogs-form-label'>Image 3</label>
                                        <input type='file' required accept="image/*,.pdf" name='blogimage3' onChange={handleFileChange3} multiple="true" />
                                    </div>
                                    <div className="col-md-12 mt-4 text-left">
                                        <input type="submit" name="submit" value="Submit Blog" />
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
            </section>
        </>
    );
}

export default Forms;
