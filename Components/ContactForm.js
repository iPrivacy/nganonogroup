import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

// const textInput = ({ label, ...props }) => {
//   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//   // which we can spread on <input>. We can use field meta to show an error
//   // message if the field is invalid and it has been touched (i.e. visited)
//   const [field, meta] = useField(props);
//     return (
//       <div className={style.inputWrapper}>
//         <label htmlFor={props.id || props.name} >{label}</label>
//         <input  {...field} {...props} />
//         {meta.touched && meta.error ? (
//           <div className="error">{meta.error}</div>
//         ) : null}
//       </div>
//     );
// };

// Manual form validation
// If active show validation function else null



export default function ContactForm() {
  // emailjs code to be fixed after formik form is done
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("the message has been sent: ", result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //  end of emailjs send email code

  return (
    <div className={style.container}>
      <h1 className={style.title}>Get in contact</h1>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
        <div className={style.inputWrapper}>
          <input type="text" name="first_name" placeholder="First Name" className={style.inputfield}/>
        </div>
        <div className={style.inputWrapper}>
          <input type="text" name="last_name" placeholder="Last Name" className={style.inputfield}/>
        </div>
        <div className={style.inputWrapper}>
          <input type="email" name="user_email" placeholder="Email" className={style.inputfield} />
        </div>
        <div className={style.inputWrapper}>
          <input type="text" name="company_name" placeholder="Company Name" className={style.inputfield}/>
        </div>
        <div className={style.inputWrapper}>
          <textarea name="message" placeholder="Message"  className={style.textArea}/>
          <input type="submit" value="Send" className={style.sendButton} />
        </div>
      </form>
    </div>
  );
}

{/* <Formik 
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        message: 'fshjhkhk',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('required'),
        email: Yup.string().email('Invalid email address').required('Required'),

      })}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(()=>{
          alert(JSON.stringify(values,null,2));
          setSubmitting(false)
        }, 400)
      }}>

      <Form className={style.form}>
        <textInput className={style.inputWrapper} label=" First Name" name="firstName" type="text" placeholder="Jane"/>
        <textInput label=" Last Name" name="lastName" type="text" placeholder="Doe"/>
        <textInput label=" Email Address" name="email" type="email" placeholder="jane@doeinc.com"/>
        <textInput label=" Company Name" name="companyName" type="text" placeholder="Doe Inc"/>
        <textInput label=" Message" name="message" className={style.textArea} type="text" as="textarea" placeholder="Jane"/>

        <button type="submit" className={style.sendButton}>Submit</button>
      </Form>

      </Formik> */}

