export function getEmailTemplate(
  name: string,
  email: string,
  message: string,
  phone: string,
  recipient: string
) {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #333; text-align: center;">📩 Nova mensagem do site</h2>
        <p style="color: #555;">Olá ${recipient}, Você recebeu uma nova mensagem através do seu site:</p>
        <div style="background: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
          <p><strong>Nome do cliente:</strong> ${name}</p>
          <p><strong>Email do cliente:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          <p><strong>Telefone do cliente:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <blockquote style="border-left: 4px solid #007bff; padding-left: 10px; color: #333;">${message}</blockquote>
        </div>
        <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
          <em>Este e-mail foi enviado automaticamente. Por favor, não responda.</em>
        </p>
      </div>
    `;
}
