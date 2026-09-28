const certificates = {

    "V03112025-5641RJ": {
        name: "Priyanka Choudhary",
        course: "Digital Marketing",
        start: "03 November 2025",
        finish: "03 February 2026"
    },

    "V05112025-7892RJ": {
        name: "Rahul Sharma",
        course: "Web Development",
        start: "05 November 2025",
        finish: "05 February 2026"
    },

    "V10112025-4587RJ": {
        name: "Neha Sharma",
        course: "Graphic Designing",
        start: "10 November 2025",
        finish: "10 February 2026"
    }

};


function verifyCertificate() {

    const input = document.getElementById("certificateId");

    const id = input.value.trim().toUpperCase();

    const result = document.getElementById("certificateResult");

    const message = document.getElementById("message");

    if (!id) {
        result.style.display = "none";
        message.style.color = "red";
        message.textContent = "Please enter a certificate ID.";
        return;
    }

    if (certificates[id]) {

        const certificate = certificates[id];

        document.getElementById("studentName").textContent =
            certificate.name;

        document.getElementById("studentId").textContent =
            id;

        document.getElementById("courseName").textContent =
            certificate.course;

        document.getElementById("startDate").textContent =
            certificate.start;

        document.getElementById("finishDate").textContent =
            certificate.finish;

        message.textContent = "";

        result.style.display = "block";

    } else {

        result.style.display = "none";

        message.style.color = "red";

        message.textContent =
            "Certificate not found. Please check the certificate ID.";

    }
}


/* Automatically read student-id from URL */

window.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const studentId = params.get("student-id");

    if (studentId) {

        document.getElementById("certificateId").value =
            studentId;

        verifyCertificate();
    }

});
