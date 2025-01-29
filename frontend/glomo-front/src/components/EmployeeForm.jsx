import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    job_title: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/employee/",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Specify JSON content type
          },
          withCredentials: true, // Use this if authentication is needed
        }
      );
      console.log("Response:", response.data);
      Swal.fire({
        title: "Success!",
        text: "Record added successfully!",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#1D60E8",
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to another page after confirmation
          navigate("/employees");
        }
      });
      setFormData({ name: "", last_name: "", job_title: "", department: "" });
    } catch (error) {
      console.error("Error sending request:", error);
      Swal.fire({
        title: "Error submitting form!",
        text: error,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       await axios.post("http://localhost:8000/employee/", {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         formData,
  //       });
  //       alert("Form Submitted");
  //       setFormData({ name: "", last_name: "", job_title: "", department: "" });
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //       Swal.fire({
  //         title: "Something Went Wrong!",
  //         text: error,
  //         icon: "error",
  //         confirmButtonText: "Okay",
  //       });
  //       //alert("Error submitting form. Please try again later.");
  //     }
  //   };

  return (
    <div class="emp-form-parent">
      <h1 class="form-heading">Enter Employee Details</h1>
      <form class="emp-form" onSubmit={handleSubmit}>
        <div class="names">
          <input
            class="input-a"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            required="true"
          ></input>
          <input
            class="input-a"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            required="true"
          ></input>
        </div>
        <input
          class="input-b"
          id="job_title"
          name="job_title"
          value={formData.job_title}
          onChange={handleChange}
          type="text"
          placeholder="Job Title"
          required="true"
        ></input>
        <input
          class="input-b"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          type="text"
          placeholder="Department"
          required="true"
        ></input>
        <button class="emp-add-button form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;
