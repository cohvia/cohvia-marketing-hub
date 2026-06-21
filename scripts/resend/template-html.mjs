/** @file HTML for marketing-site Resend templates (table-based, inline CSS). */

const FONT =
  "Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/** Verified Resend sending domain. All template `from` values must use @mail.cohvia.com. */
export const RESEND_SENDING_DOMAIN = 'mail.cohvia.com';

export const DEFAULT_FROM = `Cohvia <notifications@${RESEND_SENDING_DOMAIN}>`;

export const SUBPROCESSOR_SEGMENT_NAME = 'Subprocessor change notifications';

export const SUBPROCESSOR_CHANGE = {
  alias: 'cohvia-subprocessor-change',
  name: 'Cohvia — Subprocessor change notification',
  subject: 'Upcoming change to Cohvia subprocessors (effective {{{effectiveDate}}})',
  from: DEFAULT_FROM,
  variables: [
    { key: 'effectiveDate', type: 'string', fallback_value: 'the date shown on our website' },
    { key: 'summaryOfChanges', type: 'string', fallback_value: 'See the updated subprocessor list on our website.' },
    {
      key: 'subprocessorsPageUrl',
      type: 'string',
      fallback_value: 'https://cohvia.com/legal/subprocessors',
    },
  ],
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Subprocessor change notification</title>
</head>
<body style="margin:0;padding:0;background-color:#F9FBFB;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F9FBFB;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#FFFFFF;border:1px solid #E5E9EF;border-radius:8px;">
          <tr>
            <td style="padding:32px 32px 16px 32px;font-family:${FONT};">
              <p style="margin:0 0 8px 0;font-size:13px;line-height:20px;color:#808AA0;text-transform:uppercase;letter-spacing:0.04em;">Subprocessor notice</p>
              <h1 style="margin:0 0 16px 0;font-size:24px;line-height:32px;font-weight:600;color:#131827;">Upcoming subprocessor change</h1>
              <p style="margin:0 0 16px 0;font-size:15px;line-height:24px;color:#131827;">
                You subscribed to receive at least <strong style="color:#131827;">30 days' notice</strong> before Cohvia adds or replaces a subprocessor that processes Customer Data, as described in our Data Processing Agreement.
              </p>
              <p style="margin:0 0 16px 0;font-size:15px;line-height:24px;color:#131827;">
                <strong style="color:#131827;">Effective date:</strong> {{{effectiveDate}}}
              </p>
              <p style="margin:0 0 8px 0;font-size:15px;line-height:24px;font-weight:600;color:#131827;">Summary of changes</p>
              <p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#131827;white-space:pre-wrap;">{{{summaryOfChanges}}}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 32px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" bgcolor="#21828D" style="background-color:#21828D;border-radius:6px;">
                    <a href="{{{subprocessorsPageUrl}}}" style="display:inline-block;padding:12px 24px;font-family:${FONT};font-size:14px;line-height:20px;font-weight:600;color:#FFFFFF;text-decoration:none;">View subprocessor list</a>
                  </td>
                </tr>
              </table>
              <p style="margin:24px 0 0 0;font-size:13px;line-height:20px;color:#808AA0;font-family:${FONT};">
                Or copy this link: <a href="{{{subprocessorsPageUrl}}}" style="color:#21828D;word-break:break-all;">{{{subprocessorsPageUrl}}}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px 32px;font-family:${FONT};">
              <p style="margin:0 0 16px 0;font-size:13px;line-height:20px;color:#808AA0;">
                If you have a reasonable data-protection objection, reply to this email or contact <a href="mailto:privacy@cohvia.com" style="color:#21828D;">privacy@cohvia.com</a> before the effective date.
              </p>
              <p style="margin:0 0 8px 0;font-size:13px;line-height:20px;color:#808AA0;">
                <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#808AA0;text-decoration:underline;">Unsubscribe</a> from subprocessor change notifications.
              </p>
              <p style="margin:0;font-size:13px;line-height:20px;color:#808AA0;">
                SACS Ecommerce Stores Inc. (operating as Cohvia) · <a href="https://cohvia.com" style="color:#808AA0;text-decoration:underline;">cohvia.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  text: `Upcoming subprocessor change

You subscribed to receive at least 30 days' notice before Cohvia adds or replaces a subprocessor that processes Customer Data.

Effective date: {{{effectiveDate}}}

Summary of changes:
{{{summaryOfChanges}}}

View the updated list: {{{subprocessorsPageUrl}}}

If you have a reasonable data-protection objection, reply to this email or contact privacy@cohvia.com before the effective date.

Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}`,
};

export const MARKETING_TEMPLATES = [SUBPROCESSOR_CHANGE];
