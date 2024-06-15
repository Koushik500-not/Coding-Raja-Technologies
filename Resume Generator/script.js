document.getElementById('generateButton').addEventListener('click', function () {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const gitamDegree = document.querySelector('input[name="gitam_degree"]').value;
    const gitamCgpa = document.querySelector('input[name="gitam_cgpa"]').value;
    const gitamYear = document.querySelector('input[name="gitam_year"]').value;
    const sriGroup = document.querySelector('input[name="sri_group"]').value;
    const sriPercentage = document.querySelector('input[name="sri_percentage"]').value;
    const sriYear = document.querySelector('input[name="sri_year"]').value;
    const swethaSsc = document.querySelector('input[name="swetha_ssc"]').value;
    const swethaCgpa = document.querySelector('input[name="swetha_cgpa"]').value;
    const swethaYear = document.querySelector('input[name="swetha_year"]').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Create a new window and write the resume content
    const resumeWindow = window.open('', '_blank');
    resumeWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                }
                h1, h2, h3 {
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px;
                }
                .section {
                    margin-bottom: 20px;
                }
                .section h3 {
                    margin-top: 0;
                }
                .section p {
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>

            <div class="section">
                <h2>Education</h2>
                <h3>Gitam Institute of Technology & Sciences</h3>
                <p>B.Tech: ${gitamDegree}</p>
                <p>CGPA: ${gitamCgpa}</p>
                <p>Academic Year: ${gitamYear}</p>

                <h3>Sri Viswa Junior College</h3>
                <p>Group: ${sriGroup}</p>
                <p>Percentage: ${sriPercentage}</p>
                <p>Academic Year: ${sriYear}</p>

                <h3>Swetha Chalapathi High School</h3>
                <p>SSC: ${swethaSsc}</p>
                <p>CGPA: ${swethaCgpa}</p>
                <p>Academic Year: ${swethaYear}</p>
            </div>

            <div class="section">
                <h2>Experience</h2>
                <p>${experience}</p>
            </div>

            <div class="section">
                <h2>Skills</h2>
                <p>${skills}</p>
            </div>
        </body>
        </html>
    `);
    resumeWindow.document.close();
});