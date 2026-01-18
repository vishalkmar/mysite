const nodemailer = require("nodemailer");

const image = "https://nexatechinnovation.in/logo.png"; // make sure file exists at this path


exports.handler = async (event) => {
  const { name, email, phone, message } = JSON.parse(event.body);
 console.log(event.body)
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      port:465,
      secure: true,
      auth: {
        user:'websiteemailxx@gmail.com', // Gmail email from environment variable
        pass:'kzmi kqsu vztr sjzz', // Gmail app password from environment variable
      },
    });

const mailOptions = {
  from: email, // sender's email (from request body)
  to:"nexatechinnovation4@gmail.com", // receiver's email
  subject: "New Project Enquiry - NexaTech Innovation", // email subject
  html: `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>New Project Enquiry</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0; padding:0; background-color:#020617; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#020617; padding:24px 0;">
        <tr>
          <td align="center" style="padding:0 16px;">
            <!-- Card Wrapper -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; background:#0b1120; border-radius:18px; overflow:hidden; border:1px solid #1e293b; box-shadow:0 20px 50px rgba(15,23,42,0.8);">
              <!-- Header / Brand -->
              <tr>
                <td style="padding:20px 24px 16px; background:linear-gradient(135deg,#020617 0%,#0f172a 50%,#0b1120 100%); border-bottom:1px solid #1e293b;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="left" style="vertical-align:middle;">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="padding-right:12px;">
                              <!-- Logo -->
                              <div style="width:48px;height:48px;border-radius:999px;border:1px solid rgba(56,189,248,0.8);background:#0f172a;display:flex;align-items:center;justify-content:center;overflow:hidden;">
                                <img 
                                  src="${image}" 
                                  alt="NexaTech Innovation" 
                                  style="display:block;width:40px;height:40px;object-fit:contain;"
                                />
                              </div>
                            </td>
                            <td>
                              <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#38bdf8;font-weight:600; margin-bottom:2px;">
                                NexaTech Innovation
                              </div>
                              <div style="font-size:13px;color:#e5e7eb;">
                                New website enquiry received
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td align="right" style="vertical-align:middle;">
                        <span style="display:inline-block;font-size:11px;padding:4px 10px;border-radius:999px;background:rgba(56,189,248,0.12);color:#e0f2fe;border:1px solid rgba(56,189,248,0.4);text-transform:uppercase;letter-spacing:0.16em;">
                          New Lead
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Title & Intro -->
              <tr>
                <td style="padding:22px 24px 10px;">
                  <h1 style="margin:0 0 6px;font-size:20px;line-height:1.4;color:#f9fafb;">
                    You&apos;ve received a new project enquiry
                  </h1>
                  <p style="margin:0;font-size:13px;line-height:1.6;color:#9ca3af;">
                    A visitor has submitted their details through your website form. Below are the lead details for your reference:
                  </p>
                </td>
              </tr>

              <!-- Lead Details -->
              <tr>
                <td style="padding:8px 24px 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                    <!-- Name -->
                    <tr>
                      <td width="120" style="padding:6px 0;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.12em;">
                        Name
                      </td>
                      <td style="padding:6px 0;font-size:14px;color:#e5e7eb;font-weight:500;">
                        ${name || "Not provided"}
                      </td>
                    </tr>
                    <!-- Email -->
                    <tr>
                      <td width="120" style="padding:6px 0;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.12em;">
                        Email
                      </td>
                      <td style="padding:6px 0;font-size:14px;color:#e5e7eb;">
                        <a href="mailto:${email}" style="color:#38bdf8;text-decoration:none;">${email}</a>
                      </td>
                    </tr>
                    <!-- Phone -->
                    <tr>
                      <td width="120" style="padding:6px 0;font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.12em;">
                        Phone
                      </td>
                      <td style="padding:6px 0;font-size:14px;color:#e5e7eb;">
                        <a href="tel:${phone}" style="color:#e5e7eb;text-decoration:none;">${phone}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Message Block -->
              <tr>
                <td style="padding:0 24px 20px;">
                  <div style="border-radius:12px;border:1px solid #1f2937;background:radial-gradient(circle at 0% 0%,rgba(56,189,248,0.12),transparent 55%);padding:14px 16px;">
                    <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.14em;color:#9ca3af;margin-bottom:6px;">
                      User Message
                    </div>
                    <p style="margin:0;font-size:14px;line-height:1.7;color:#e5e7eb;white-space:pre-line;">
                      ${message}
                    </p>
                  </div>
                </td>
              </tr>

              <!-- CTA / Footer info -->
              <tr>
                <td style="padding:4px 24px 18px;">
                  <p style="margin:0 0 10px;font-size:12px;line-height:1.6;color:#9ca3af;">
                    You can reply directly to this email to continue the conversation with the client.
                  </p>
                  <p style="margin:0;font-size:11px;line-height:1.6;color:#6b7280;">
                    This notification was triggered automatically from the NexaTech Innovation website lead form.
                  </p>
                </td>
              </tr>

              <!-- Brand Footer -->
              <tr>
                <td style="padding:12px 24px 18px;border-top:1px solid #1e293b;background:#020617;">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="left" style="font-size:11px;color:#6b7280;">
                        © ${new Date().getFullYear()} NexaTech Innovation. All rights reserved.
                      </td>
                      <td align="right" style="font-size:11px;color:#6b7280;">
                        Built by your website contact system.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!-- /Card Wrapper -->
          </td>
        </tr>
      </table>
    </body>
  </html>
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Mail sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
